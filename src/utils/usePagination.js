import { useEffect, useState } from 'react';

const config = {
  width: {
    WIDTH_XL_SIZE: 1280,
    WIDTH_LG_SIZE: 960,
    WIDTH_MD_SIZE: 768,
    WIDTH_ES_SIZE: 320,
  },
  render: {
    AMOUNT_MOVIES_XL_RENDER: 12,
    AMOUNT_MOVIES_LG_RENDER: 8,
    AMOUNT_MOVIES_MD_RENDER: 8,
    AMOUNT_MOVIES_ES_RENDER: 5,
  },
  add: {
    AMOUNT_MOVIES_ADD_XL: 3,
    AMOUNT_MOVIES_ADD_LG: 2,
    AMOUNT_MOVIES_ADD_MD: 2,
  },
};

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
    if (widthSize >= config.width.WIDTH_XL_SIZE) {
      setAmountMoviesRender(config.render.AMOUNT_MOVIES_XL_RENDER);
      setAmountMoviesAdd(config.add.AMOUNT_MOVIES_ADD_XL);
    } else if (widthSize < config.width.WIDTH_XL_SIZE && widthSize >= config.width.WIDTH_LG_SIZE) {
      setAmountMoviesRender(config.render.AMOUNT_MOVIES_LG_RENDER);
      setAmountMoviesAdd(config.add.AMOUNT_MOVIES_ADD_LG);
    } else if (widthSize < config.width.WIDTH_LG_SIZE && widthSize >= config.width.WIDTH_MD_SIZE) {
      setAmountMoviesRender(config.render.AMOUNT_MOVIES_MD_RENDER);
      setAmountMoviesAdd(config.add.AMOUNT_MOVIES_ADD_MD);
    } else if (widthSize < config.width.WIDTH_MD_SIZE && widthSize >= config.width.WIDTH_ES_SIZE) {
      setAmountMoviesRender(config.render.AMOUNT_MOVIES_ES_RENDER);
      setAmountMoviesAdd(config.add.AMOUNT_MOVIES_ADD_MD);
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
