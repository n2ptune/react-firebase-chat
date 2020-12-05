import axios from 'axios'

const getFirebaseConfig = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/__/firebase/init.json')
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

export default getFirebaseConfig
