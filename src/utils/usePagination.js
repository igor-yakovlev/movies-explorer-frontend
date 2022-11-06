import {useEffect, useState} from "react";

const USER_PER_PAGE = 3;
export function usePagination(array) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNewPage, setHasNewPage] = useState(true);
  useEffect(() => {
    let total = Math.ceil(array.length / USER_PER_PAGE)
    setTotalPages(total);
    if (page === total || total <= 0) {
      setHasNewPage(false)
    } else {
      setHasNewPage(true)
    }
  }, [page, array ])


  const handleSetPage = () => {
    setPage(page => page + 1);
    if (page === totalPages) setHasNewPage(false);
  }

  const startIndex = (page - 1) * USER_PER_PAGE
  const selectedMovies = array.slice(0, startIndex + USER_PER_PAGE);

  return {handleSetPage, selectedMovies, hasNewPage, totalPages}

}
