const BASE_URL = 'https://api.nomoreparties.co';
const headers = () => ({"Content-type": "application/json",});

export function useMoviesData () {
  return {
    getMovies: () => {
    return fetch(`${BASE_URL}/beatfilm-movies`, {
      method: 'GET',
      headers: headers(),
    })
      .then(response => {
        try {
          if (response.ok) {
            return response.json()
          }
        } catch (e) {
          return e
        }
      })
      .then(data => {
        return data
      })
  },
}
}
