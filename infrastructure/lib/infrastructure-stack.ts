import * as path from 'path';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

declare const getBookHandler: lambda.Function;

export class InfrastructureStack extends cdk.Stack {

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigateway.SpecRestApi(this, 'recipes-api', {
      apiDefinition: apigateway.ApiDefinition.fromAsset('./assets/openapi-definition.yml')
    });

    /*
    Ist nicht so geil wie angenommen... müssen das erstmal anlegen und dann exportieren, weil da im swagger aws-spezifische Params stehen müssen.

    z. B.:
            x-amazon-apigateway-integration:
            uri:> -
            arn: aws: apigateway: [secure]: lambda: path/2015-03-31/functions/arn: aws: lambda: [secure]: [secure]: function: ApiLambdaCrudDynamoDBExam-getAllItemsFunction0B7A9-1MLKSKO1RUL3I/invocations
            passthroughBehavior: when_no_match
            httpMethod: POST
            type: aws_proxy

    Also händisch anlegen, exportieren, über nen merge die lambda arns updatend und dann neu ausrollen.... -> https://martinmueller.dev/cdk-swagger-eng/
    */
   
  }
}