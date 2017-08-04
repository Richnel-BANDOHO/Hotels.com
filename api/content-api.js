import axios from 'axios';

export { getContent };

function getContent() {
  const url = '/api/content';

  return axios.get(url).then(res => res.data);
}