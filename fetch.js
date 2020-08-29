class Github {
  constructor() {
    this.client_id = 'c3cb375332b5383553e1'
    this.client_secret = '783bbbff7bc6e540f31f5ccdb66a78f5fe4d4d01'
  }
  getUserData = async function (username) {
    const url = `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    const res = await fetch(url);
    const response = await res.json();
    return response
  }
  
  getUserRepos = async function (username) {
    const url = `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
    const res = await fetch(url);
    const response = await res.json();
    return response
  }
}

