import { useEffect, useState } from 'react';
import { configBreakingPoints } from '../constants/constants';

function getTotal(array, initialRender, amountAdd) {
  if (array.length - initialRender < 0) {
    return 1;
  }
  return Math.ceil((array.length - initialRender) / amountAdd);
}

export default function usePagination(array) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNewPage, setHasNewPage] = useState(true);
  const [widthSize, setWidthSize] = useState('');
  const [amountMoviesRender, setAmountMoviesRender] = useState(0);
  const [amountMoviesAdd, setAmountMoviesAdd] = useState(0);

  const handleResize = () => {
    const { clientWidth } = document.documentElement;
    setWidthSize(clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(handleResize, 1000);
    });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getMoviesRender = () => {
    if (widthSize >= configBreakingPoints.width.WIDTH_XL_SIZE) {
      setAmountMoviesRender(configBreakingPoints.render.AMOUNT_MOVIES_XL_RENDER);
      setAmountMoviesAdd(configBreakingPoints.add.AMOUNT_MOVIES_ADD_XL);
    } else if (widthSize < configBreakingPoints.width.WIDTH_XL_SIZE && widthSize >= configBreakingPoints.width.WIDTH_LG_SIZE) {
      setAmountMoviesRender(configBreakingPoints.render.AMOUNT_MOVIES_LG_RENDER);
      setAmountMoviesAdd(configBreakingPoints.add.AMOUNT_MOVIES_ADD_LG);
    } else if (widthSize < configBreakingPoints.width.WIDTH_LG_SIZE && widthSize >= configBreakingPoints.width.WIDTH_MD_SIZE) {
      setAmountMoviesRender(configBreakingPoints.render.AMOUNT_MOVIES_MD_RENDER);
      setAmountMoviesAdd(configBreakingPoints.add.AMOUNT_MOVIES_ADD_MD);
    } else if (widthSize < configBreakingPoints.width.WIDTH_MD_SIZE && widthSize >= configBreakingPoints.width.WIDTH_ES_SIZE) {
      setAmountMoviesRender(configBreakingPoints.render.AMOUNT_MOVIES_ES_RENDER);
      setAmountMoviesAdd(configBreakingPoints.add.AMOUNT_MOVIES_ADD_MD);
    }
  };

  useEffect(() => {
    getMoviesRender();
    handleResize();
  }, [widthSize]);

  useEffect(() => {
    const total = getTotal(array, amountMoviesRender, amountMoviesAdd);
    setTotalPages(total);
    if (page === total || total <= 1) {
      setHasNewPage(false);
    } else {
      setHasNewPage(true);
    }
  }, [page, array, amountMoviesAdd]);

  const handleSetPage = () => {
    setPage((currentPage) => currentPage + 1);
    if (page === totalPages) setHasNewPage(false);
  };

  const startIndex = (page - 1) * amountMoviesAdd;
  const selectedMovies = array.slice(0, startIndex + amountMoviesRender);

  return {
    handleSetPage, selectedMovies, hasNewPage, totalPages,
  };
}
