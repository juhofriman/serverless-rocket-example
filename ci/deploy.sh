#! /bin/bash

set -e

# This is just a simple example of deploy script

# Put your bucket name here
S3_BUCKET=s3://understand-backend-dev-rocketsitebucket-1gs9hb0yl9gps

cd "$(dirname "$0")"
cd ..

echo "Deploying backend"
cd rocket-backend
serverless deploy
cd ..

echo "Building site"
cd rocket-frontend
yarn build
cd build
aws s3 sync . $S3_BUCKET
