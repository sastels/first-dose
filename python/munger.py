#!/usr/bin/env python

# Data from Our World in Data, https://github.com/owid/covid-19-data

import firebase_admin
from firebase_admin import credentials, storage
import pandas as pd

LOCAL_SERVICE_ACCOUNT_KEY = "/Users/sastels/Firebase_Keys/first-dose-eb9bd-firebase-adminsdk-srkcq-39b504aac1.json"
cred = credentials.Certificate(LOCAL_SERVICE_ACCOUNT_KEY)
firebase_admin.initialize_app(cred, {
    'storageBucket': 'first-dose-eb9bd.appspot.com'
})

bucket = storage.bucket()


def upload_blob(source_file_name, destination_blob_name):
    """Uploads a file to the bucket."""
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_filename(source_file_name)
    print(
        "File {} uploaded to {}.".format(
            source_file_name, destination_blob_name
        )
    )


def get_first_dose(data_df, country, population):
    data = data_df.query("country == @country").data
    df = pd.DataFrame(data.array[0])
    df['people_vaccinated'] = df['people_vaccinated'].fillna(
        df['total_vaccinations'])  # before there were 2nd doses
    df = df[["date", "people_vaccinated"]]
    df[country] = df.people_vaccinated / population * 100
    df["datetime"] = pd.to_datetime(df.date)
    df = df.set_index("datetime")
    return df[[country]]


if __name__ == "__main__":
    vaccine_file = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
    vaccination_data_df = pd.read_json(vaccine_file)

    df_ca = get_first_dose(vaccination_data_df, "Canada", 37746527)
    df_us = get_first_dose(vaccination_data_df, "United States", 334438269)
    df_uk = get_first_dose(vaccination_data_df, "United Kingdom", 67893379)
    df_is = get_first_dose(vaccination_data_df, "Israel", 8652167)

    df = df_is.join(df_uk, how="outer").join(
        df_us, how="outer").join(df_ca, how="outer")
    df.to_json("dose_stats.json")

    upload_blob('dose_stats.json', 'dose_stats.json')
