import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

// const firebaseApp = firebase.initializeApp({
//   apiKey: 'AIzaSyCe-AgS6huR3tqHYQ-hXUejrMSQDiC44vE',
//   authDomain: 'resume-data.firebaseapp.com',
//   databaseURL: 'https://resume-data.firebaseio.com',
//   projectId: 'resume-data',
// });
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBFMzaucx4Bz26SafXnR-P3IU13cKUOvSA',
  authDomain: 'resume-template-db588.firebaseio.com',
  databaseURL: 'https://resume-template-db588.firebaseio.com',
  projectId: 'resume-template-db588',
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;