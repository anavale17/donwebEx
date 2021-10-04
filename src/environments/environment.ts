// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  localStorageItemName: 'GeoBarrioLsItemNameDev',
  api: {
    auth: 'http://c1300044.ferozo.com',
    baseUrl: 'http://c1300044.ferozo.com',
  },
  google: {
    firebase: {
      apiKey: 'AIzaSyCJ799E7L1m33Ca-nYI3cHUInIKM1XjTT8',
      authDomain: 'ng-base-web.firebaseapp.com',
      databaseURL: 'https://ng-base-web.firebaseio.com',
      projectId: 'ng-base-web',
      storageBucket: 'ng-base-web.appspot.com',
      messagingSenderId: '32064675814',
      appId: '1:32064675814:web:6e81daa0cd86ca4599c027',
      measurementId: 'G-Q3TT3Y3308',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
