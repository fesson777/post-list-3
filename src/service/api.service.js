import Axios from './axios';
import { baseUrl } from './config';

const axios = new Axios({ baseURL: baseUrl });

export class ApiService {
  static async createPost(post) {
    try {
      const response = await axios.post('/posts.json', post);
      console.debug('ApiService ~ createPost ~ response.data', response.data);
      return response.data;
    } catch (error) {
      console.error('ApiService ~ createPost ~', error);
    }
  }

  static async fetchPosts() {
    try {
      const response = await axios.get('/posts.json');
      console.debug('ApiService ~ fetchPosts ~ response.data', response.data);
      return response.data;
    } catch (error) {
      console.error('ApiService ~ fetchPosts ~', error);
    }
  }
  static async fetchPostById(id) {
    try {
      const response = await axios.get(`/posts/${id}.json`);
      console.debug('ApiService ~ fetchPostById ~ response.data', response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  static async delPostById(id) {
    try {
      const response = await axios.delete(`/posts/${id}.json`);
      console.debug('ApiService ~ delPostById ~ response', response);
    } catch (error) {
      console.error('ApiService ~ delPostById ~', error);
    }
  }
}
