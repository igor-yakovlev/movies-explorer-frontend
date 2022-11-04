import {useEffect, useState} from "react";

// export function usePagination(array, pageSize) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [elementCount, setElementCount] = useState(0);
//   const [hasNextPage, setHasNextPage] = useState(false);
//   const [totalPage, setTotalPage] = useState(0);
//
//   useEffect(() => {
//     const tableSize = array.length;
//     setElementCount(pageSize)
//     setTotalPage(Math.floor(tableSize / pageSize))
//     if (currentPage <= totalPage) {
//       setHasNextPage(true);
//     }
//   }, [array])
//
//   const handleChangePage = () => {
//     if (currentPage <= totalPage) {
//       setCurrentPage(prevState => prevState + 1);
//       setElementCount(pageSize * currentPage)
//     } else {
//       setHasNextPage(false);
//     }
//   }
//
//   return {elementCount, handleChangePage, hasNextPage, totalPage, currentPage}
//
// }

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
