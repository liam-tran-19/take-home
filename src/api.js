export const apiGetMovie = (title, type, year) => {
  return `http://www.omdbapi.com/?t=${title}&type=${type}&y=${year}&apikey=2b241a88`;
};
