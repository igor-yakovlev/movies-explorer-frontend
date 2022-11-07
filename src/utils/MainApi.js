const BASE_URL = 'https://api.igor.yakovlev.nomoredomains.icu';
const headers = () => ({ 'Content-type': 'application/json' });

export default function useMainApi() {
  return {
    register: (name, email, password) => fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: headers(),
      credentials: 'include',
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        try {
          if (response.status === 201) {
            return response.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((data) => data),
    login: (email, password) => fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: headers(),
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        try {
          if (response.status === 200) {
            return response.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((data) => data),
    authorize: () => fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: headers(),
      credentials: 'include',
    })
      .then((response) => {
        try {
          if (response.status === 200) {
            return response.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((data) => data)
      .catch((e) => {
        console.log(e);
      }),
    updateUser: (email, name) => fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: headers(),
      credentials: 'include',
      body: JSON.stringify({ email, name }),
    })
      .then((response) => {
        try {
          if (response.ok) {
            return response.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((data) => data)
      .catch((e) => {
        console.log(e);
      }),
    addMovie: (movie) => fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: headers(),
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.id,
      }),
    })
      .then((response) => {
        try {
          if (response.ok) {
            return response.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((data) => data)
      .catch((e) => {
        console.log(e);
      }),
    getSavedMovies: () => fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: headers(),
      credentials: 'include',
    })
      .then((response) => {
        try {
          if (response.status === 200) {
            return response.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((data) => data)
      .catch((e) => {
        console.log(e);
      }),
    deleteSavedMovies: (id) => fetch(`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: headers(),
      credentials: 'include',
    })
      .then((response) => {
        try {
          if (response.ok) {
            return response.json();
          }
        } catch (e) {
          return e;
        }
      })
      .then((data) => data)
      .catch((e) => {
        console.log(e);
      }),
  };
}
