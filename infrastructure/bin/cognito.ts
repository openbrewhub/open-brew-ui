import { Construct, Stack } from "@aws-cdk/core";
import { UserPool, VerificationEmailStyle, AccountRecovery } from "@aws-cdk/aws-cognito";

export class CognitoConstruct extends Construct {

    constructor(stack: Stack) {
        super(stack, "cognito");

        const pool = new UserPool(stack, 'openbrew-userpool', {

            accountRecovery: AccountRecovery.EMAIL_ONLY,
            selfSignUpEnabled: false,
            userVerification: {
                emailSubject: 'Verify your email for our awesome app!',
                emailBody: 'Thanks for signing up to our awesome app! Your verification code is {####}',
                emailStyle: VerificationEmailStyle.CODE,
                smsMessage: 'Thanks for signing up to our awesome app! Your verification code is {####}',
            }
        });

        const client = pool.addClient('ng-brew-ui');
    }
}