// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url1:string = "https://shop-woo.cloudns.cl/wp-json/wc/v3"
const authUrl1:string = "https://shop-woo.cloudns.cl/wp-json/jwt-auth/v1/token"
const tokenVerifyUrll1: string = "https://shop-woo.cloudns.cl/wp-json/jwt-auth/v1/token/validate"

export const environment = {
  production: false,
  backend_api_url : url1,
  auth_url: authUrl1,
  token_verify_url: tokenVerifyUrll1,
  readOnlyKeys:{
    consumer_key : 'ck_650ea26345a453b4d0ee884c52e3e92ef7f362f3',
    consumer_secret : 'cs_ad5830abdaddcb069279c56aeecb68e18f954bb6',
  },
  writeOnlyKeys:{
    consumer_key : 'ck_68505a2a1aeb03dc37acdac89fecd2c64a3503e3',
    consumer_secret : 'cs_eb875cecb3f6a1b4cd3d682d0476a828aa2ab49f'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
