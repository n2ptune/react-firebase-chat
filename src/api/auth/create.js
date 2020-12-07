import firebase from 'api/firebase'

export async function email(email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    return true
  } catch (error) {
    throw createErrorHandler(error.code)
  }
}

export function createErrorHandler(errorCode) {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return '이미 존재하는 이메일입니다.'
    case 'auth/invalid-email':
      return '유효하지 않은 이메일입니다.'
    case 'auth/operation-not-allowed':
      // 해당 오류가 일어날 수 없음
      return ''
    case 'auth/weak-password':
      return '너무 쉬운 비밀번호로 가입할 수 없습니다.'
    default:
      return '알 수 없는 오류'
  }
}
