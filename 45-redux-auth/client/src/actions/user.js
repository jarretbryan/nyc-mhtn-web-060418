export const loginUser = (username, password) => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: { username, password } })
    })
      .then(response => response.json())
      .then(userData => dispatch(setCurrentUser(userData)))
  }
}

export const setCurrentUser = userData => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})
