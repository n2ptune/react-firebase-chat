import getFirebaseConfig from 'api/config/firebase.config'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

async function init() {
  const config = await getFirebaseConfig()

  firebase.initializeApp(config)
}

export { init }
export default firebase
