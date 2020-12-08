import firebase from 'api/firebase'
class NotVerifiedEmailException {
  constructor() {
    this.message = '이메일을 사용하기 전 활성화시켜야 합니다.'
    this.code = 'custom/auth/email-not-verified'
  }

  toString() {
    return this.message
  }
}

export async function google() {
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  try {
    const userCredential = await firebase.auth().signInWithPopup(googleProvider)
    return userCredential.user
  } catch (error) {
    throw authErrorHandler(error.code)
  }
}

export async function email(email, password) {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    if (!userCredential.user.emailVerified) {
      throw new NotVerifiedEmailException()
    }
    return userCredential
  } catch (error) {
    throw authErrorHandler(error.code)
  }
}

export function authErrorHandler(errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return '유효하지 않은 이메일입니다.'
    case 'auth/user-disabled':
      return '활성화되지 않은 계정입니다.'
    case 'auth/user-not-found':
      return '계정을 찾을 수 없습니다.'
    case 'auth/wrong-password':
      return '이메일 혹은 비밀번호가 틀렸습니다.'
    case 'custom/auth/email-not-verified':
      return '이메일이 확인되지 않았습니다. 메일을 확인해주세요.'
    default:
      return '알 수 없는 오류'
  }
}
