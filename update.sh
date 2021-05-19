#!/bin/sh

echo "downloading and munging data..."
python python/munger.py
echo "deploying to Github Pages"
yarn run deploy
