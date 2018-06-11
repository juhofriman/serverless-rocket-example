# Serverless/Cloudfront Stub

This is an example project stub for serving static SPA site and serverless backend via Cloudfront.

## Development

Start backend in serverless offline mode

```
cd rocket-backend
npm install
serverless offline
```

Start frontend in separate shell

```
cd rocket-frontend
npm install
yarn start
```

Access the site via http://localhost:3000. Both, frontend and backend supports hot reloading of code.

## Deploy to AWS account

1. Acquire an AWS account
2. Acquire `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
3. If you want own domain /w SSL, acquire SSL cert via Certificate Manager and pass domain name and SSL cert ARN to `serverless.yml`
4. Deploy initial backend `cd rocket-backend &&  serverless deploy` (provisioning of CloudFront will take time, at least 30 minutes. After that you might see temporary redirects to S3 bucket, but aften couple of hours, your bucket and CloudFront should be in sync -- https://stackoverflow.com/questions/38706424/aws-cloudfront-returns-http-307-when-origin-is-s3-bucket)
5. Get your generated S3-bucket name using aws cli or console (something like: `s3://understand-backend-dev-rocketsitebucket-492voir2vir2vi`)
6. Pass this to `ci/deploy.sh` or copy site dist to bucket directly
7. Site should be accessible from CloudFront domain, see generated domain name from console. If you added your own domain, make an alias record from Route53 to CloudFront distibution.