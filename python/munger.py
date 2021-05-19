#!/usr/bin/env python

# Data from Our World in Data, https://github.com/owid/covid-19-data

import pandas as pd


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

    df_ca = get_first_dose(vaccination_data_df, "Canada", 37590000)
    df_us = get_first_dose(vaccination_data_df, "United States", 328200000)
    df_uk = get_first_dose(vaccination_data_df, "United Kingdom", 66650000)
    df_is = get_first_dose(vaccination_data_df, "Israel", 9053000)

    df = df_is.join(df_uk, how="outer").join(
        df_us, how="outer").join(df_ca, how="outer")
    df.to_json("public/dose_stats.json")
