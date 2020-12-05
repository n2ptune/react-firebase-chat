import { auth } from 'api/firebase'

function createAccount(email, password) {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => user)
    .catch(error => error)
}

export { createAccount }
