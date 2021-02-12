const API_KEY = "7677704d72de68dc39913f40f57d718e";
const requests = {
  fetchPopulair: `/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images&api_key=${API_KEY}`,
  sQP1: `/search/movie?api_key=${API_KEY}&&query=`,
  sQP2: `&language=fr&include_adult=false`,
};
export default requests;
