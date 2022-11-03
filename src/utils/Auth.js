const BASE_URL = 'https://api.igor.yakovlev.nomoredomains.icu';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({name, email, password}),
  })
    .then(response => {
      try {
        if (response.status === 201) {
          return response.json()
        }
      } catch (e) {
        return e;
      }
    })
    .then(data => {
      return data
    })
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({email, password}),
  })
    .then(response => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .then(data => {
      return data;
    })
}

export const authorize = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
    .then(response => {
      try {
        if(response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .then(data => {
      return data
    })
    .catch(e => {
      console.log(e)
    })
}
