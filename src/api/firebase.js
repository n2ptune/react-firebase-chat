let app = null
let db = null
let auth = null

function init() {
  if (process.env.NODE_ENV === 'production') {
    app = window.firebase.app()
    db = app.firestore()
    auth = app.auth()
  } else {
    const firebase = require('firebase').default
    require('firebase/auth')
    require('firebase/firestore')
    require('firebase/analytics')

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      appId: process.env.REACT_APP_ID
    }

    if (firebase.apps.length) {
      app = firebase.apps[0]
    } else {
      app = firebase.initializeApp(firebaseConfig)
    }

    db = app.firestore()
    auth = app.auth()
  }
}

export { db, auth, init }
export default app
