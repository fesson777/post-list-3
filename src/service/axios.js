function defineErrorMessage(response) {
  return `Request failed! Server responded with ${response.status}: ${response.statusText}`;
}

export default class Axios {
  constructor(params) {
    this.baseURL = params.baseURL;
  }

  async get(path) {
    return fetch(this.baseURL + path)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(defineErrorMessage(response));
        }
      })
      .then(data => ({ data }));
  }

  async post(path, payload) {
    return fetch(this.baseURL + path, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(defineErrorMessage(response));
        }
      })
      .then(data => ({ data }));
  }

  async delete(path, payload) {
    return fetch(this.baseURL + path, {
      method: 'DELETE',
      body: payload ? JSON.stringify(payload) : undefined,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(defineErrorMessage(response));
        }
      })
      .then(data => ({ data }));
  }
}
