const BASE_URL = 'https://api.igor.yakovlev.nomoredomains.icu';
const headers = () => ({"Content-type": "application/json",});


export function useMainApi () {
  return {
    register: (name, email, password) => {
      return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: headers(),
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
    },
    login: (email, password) => {
      return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: headers(),
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
    },
    authorize: () => {
      return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: headers(),
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
    },
    updateUser: (email, name) => {
      return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: headers(),
        credentials: 'include',
        body: JSON.stringify({email, name}),
      })
        .then(response => {
          try {
            if(response.ok) {
              return response.json()
            }
          } catch (e) {
            return e
          }
        })
        .then(data => data)
        .catch(e => {
          console.log(e)
        })
    }
  }
}
