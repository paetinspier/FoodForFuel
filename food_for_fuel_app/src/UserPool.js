import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_a8Tljec67',
    ClientId: '4bdlbgilcq2m29256venlo4jjp'
  };

  export default new CognitoUserPool(poolData);