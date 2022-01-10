import axios from 'axios'

const API_URL = 'https://slackapi.avionschool.com/api/v1'

export const register = async (email, password, passwordConfirmation) => {
  let errors = []
  const response = await axios
    .post(`${API_URL}/auth`, {
      email,
      password,
      password_confirmation: passwordConfirmation,
    })
    .catch((error) => {
      errors = error.response.data.errors.full_messages
    })

  return [response, errors]
}


  const handleHeader = (headerData) => {
    if (headerData.data) {
        localStorage.setItem("access-token", headerData.headers["access-token"]);
        localStorage.setItem("client", headerData.headers["client"]);
        localStorage.setItem("uid", headerData.headers["uid"]);
        localStorage.setItem("expiry", headerData.headers["expiry"]);
        localStorage.setItem("headers", JSON.stringify({"access-token":headerData.headers["access-token"], "client":headerData.headers["client"], "uid":headerData.headers["uid"], "expiry":headerData.headers["expiry"]}))
    }
  }

export const login = async (email, password) => {
  let errors = []
  const response = await axios
    .post(`${API_URL}/auth/sign_in`, {
      email,
      password,
    })
    .then((headerData) => handleHeader(headerData))
    .catch((error) => {
      errors = error.response.data.errors
    })

  return [response, errors]
}


// list of users function
export const listUsers = (header) => {
  const url = API_URL + 'users';
  console.log(axios.get(url, { headers: header }).data);
}