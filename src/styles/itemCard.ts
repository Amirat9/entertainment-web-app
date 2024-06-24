const itemCardStyles = {
  bookmark: {
    backgroundCircle:
      'absolute top-2 right-2 bg-dark-blue bg-opacity-50 rounded-full w-8 h-8 hover:bg-white sm:top-4 sm:right-4',
    bookmarkIcon:
      'relative h-full w-full flex items-center justify-center group/hover cursor-pointer',
  },
  description: {
    general: 'p-0 mb-1 text-[11px] font-extralight opacity-75 sm:body-s',
    dot: 'w-[2px] h-[2px] bg-white rounded-full opacity-50 sm:w-[3px] sm:h-[3px]',
    category: 'flex items-center justify-center gap-1',
    rating: '',
    year: '',
  },
  modal:
    'absolute inset-0 bg-black bg-opacity-50 cursor-pointer hidden group-hover/modal:block ',
  playIcon:
    'rounded-[28.5px] bg-white bg-opacity-25 flex items-center z-10 py-2 pr-6 pl-2 gap-4 cursor-pointer',
};

export default itemCardStyles;
