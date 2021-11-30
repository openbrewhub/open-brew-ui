#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfrastructureStack, } from '../lib/infrastructure-stack';
import { UiConstruct } from './ui';
import { CognitoConstruct } from './cognito';

const app = new cdk.App();

const stack = new InfrastructureStack(app, 'InfrastructureStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

console.log("DEPLOY ACCOUNT: " + stack.account);

new UiConstruct(stack);
new CognitoConstruct(stack);