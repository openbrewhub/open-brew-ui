import * as cdk from '@aws-cdk/core';
import { Bucket, } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment'
import { CloudFrontWebDistribution, GeoRestriction, PriceClass, } from '@aws-cdk/aws-cloudfront';

export class InfrastructureStack extends cdk.Stack {

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const uiBucket = new Bucket(this, 'open-brew-ui', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    });
    
    const distribution = new CloudFrontWebDistribution(this, 'open-brew-ui-dist', {
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
    
    const deployment = new BucketDeployment(this, 'ui-deployment', {
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
  }
}