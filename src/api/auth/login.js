import firebase from 'api/firebase'

export async function email(email, password) {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

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
    default:
      return '알 수 없는 오류'
  }
}
