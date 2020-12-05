import firebase from 'api/firebase'

export async function email(email, password) {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}
