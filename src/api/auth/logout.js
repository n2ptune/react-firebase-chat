import firebase from 'api/firebase'

export async function logout() {
  try {
    await firebase.auth().signOut()
  } catch (error) {
    throw error
  }
}
