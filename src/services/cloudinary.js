const FETCH_URL = 'http://res.cloudinary.com/omnom/image/fetch';

export const getUrl = (url, options = '') => {
  return `${FETCH_URL}/${options}/${encodeURIComponent(url)}`;
};