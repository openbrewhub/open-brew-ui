#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Bucket, } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment'
import { CloudFrontWebDistribution, GeoRestriction, PriceClass, } from '@aws-cdk/aws-cloudfront';
import { InfrastructureStack, } from '../lib/infrastructure-stack';

const app = new cdk.App();
const stack = new InfrastructureStack(app, 'InfrastructureStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: { account: '387314862676', region: 'eu-central-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});

const uiBucket = new Bucket(stack, 'open-brew-ui', {
  websiteIndexDocument: 'index.html',
  publicReadAccess: true,
});

const distribution = new CloudFrontWebDistribution(stack, 'open-brew-ui-dist', {
  originConfigs: [{
    s3OriginSource: {
      s3BucketSource: uiBucket,
    },
    behaviors: [{
      isDefaultBehavior: true,
    }],
  }],
  priceClass: PriceClass.PRICE_CLASS_100,
  geoRestriction: GeoRestriction.allowlist("DE"),
  errorConfigurations: [{
    errorCode: 403,
    responsePagePath: '/index.html',
    responseCode: 200
  },
  {
    errorCode: 404,
    responsePagePath: '/index.html',
    responseCode: 200
  }],
});

const deployment = new BucketDeployment(stack, 'ui-deployment', {
  sources: [
    Source.asset('./../dist/open-brew-ui'),
  ],
  distribution,
  destinationBucket: uiBucket,
  distributionPaths: [
    '/*'
  ],
  prune: true,
  retainOnDelete: false,
});