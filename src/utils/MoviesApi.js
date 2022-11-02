import {useEffect, useState} from "react";

const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';

export function useMoviesData () {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setData(data);
      })

  }, [])
  return {data, isLoading}
}
