import 'firebase';
import * as admin from 'firebase-admin';
import {environment} from '../../environments/environment';

var _first = admin.initializeApp(
  {
    credential: admin.credential.cert(environment.fireAdmin),
    databaseURL: "https://bookstore-ll-2018.firebaseio.com"
  }, 
  'first' // this name will be used to retrieve firebase instance. E.g. first.database();
);

export const first = _first;
