const baseUrl =
  'https://tags-3-dm-default-rtdb.europe-west1.firebasedatabase.app'

class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl
  }

  async createPost(post) {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: 'post',
        body: JSON.stringify(post),
      })

      const response = await fetch(request)
      return await response.json()
    } catch {
      console.error(error)
    }
  }

  async fetchPosts() {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: 'get',
      })

      const response = await fetch(request)
      return await response.json()
    } catch {
      console.error(error)
    }
  }
  async fetchPostById(id) {
    try {
      const request = new Request(`${this.url}/posts/${id}.json`, {
        method: 'get',
      })

      const response = await fetch(request)
      return await response.json()
    } catch {
      console.error(error)
    }
  }
}

export const apiService = new ApiService(baseUrl)
