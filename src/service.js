import axios from 'axios';

const getData = () => axios.get('https://jsonplaceholder.typicode.com/posts');

export default getData;