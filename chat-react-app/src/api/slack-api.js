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
        localStorage.setItem("data", JSON.stringify(headerData.data["data"]));
        // localStorage.setItem("access-token", headerData.headers["access-token"]);
        // localStorage.setItem("client", headerData.headers["client"]);
        // localStorage.setItem("uid", headerData.headers["uid"]);
        // localStorage.setItem("expiry", headerData.headers["expiry"]);
        localStorage.setItem("headers", JSON.stringify({"access-token":headerData.headers["access-token"], "client":headerData.headers["client"], "uid":headerData.headers["uid"], "expiry":headerData.headers["expiry"]}));
        console.log(({"access-token":headerData.headers["access-token"], "client":headerData.headers["client"], "uid":headerData.headers["uid"], "expiry":headerData.headers["expiry"]}));
    }
  }


export const login = async (email, password) => {
  let errors = []
  const response = await axios
    .post(`${API_URL}/auth/sign_in`, 
    {
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
export const listUsers = async (header) => {
  let errors = []
  const response = await axios
    .get(`${API_URL}/users`, 
    { headers: header 
    })
    .then((listUsersData) => localStorage.setItem("userList", JSON.stringify(listUsersData.data.data)))
    .catch((error) => {
      errors = error.response.data.errors
    })

  return [response, errors]
}

// list of channels function
export const listChannels = async (header) => {
  let errors = []
  const response = await axios
    .get(`${API_URL}/channels`, 
    { headers: header 
    })
    .then((listChannelsData) => localStorage.setItem("channelsList", JSON.stringify(listChannelsData.data)))
    .catch((error) => {
      errors = error.response.data.errors
    })

  return [response, errors]
}

//send Message
export const sendMessage = async (header, receiver_id, receiver_class, body) => {
  let errors = []
  const response = await axios
    .post(`${API_URL}/messages`, 
    {
        receiver_id: parseInt(receiver_id),
        receiver_class: receiver_class,
        body: body
    }, 
    {headers: header,}
    )
    .then((sendData) => console.log(sendData.data))
    .catch((error) => {
      errors = error.response.data.errors
    })

  return [response, errors]
}

export const receiveMessage = async (header, receiver_id, receiver_class) => {
  let errors = []
  const response = await axios
    .get(`${API_URL}/messages?receiver_id=${receiver_id}&receiver_class=${receiver_class}`, 
      {headers: header,}
    )
    .then((receiveData) => localStorage.setItem("receivedMessages", JSON.stringify(receiveData.data.data)))
    .catch((error) => {
      errors = error.response.data.errors
    })

  return [response, errors]
}