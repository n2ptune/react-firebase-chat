import firebase from 'api/firebase'

function createAccount(email, password) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => user)
    .catch(error => error)
}

export { createAccount }
