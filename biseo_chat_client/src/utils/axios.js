const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://moby.sparcs.org:44431/api',
    withCredentials: true
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('biseo-jwt')
    // const token = "sparcs_biseo" // TODO: DELETE IT
    if (token)
      config.headers = {
        'X-Access-Token': `Bearer ${token}`
      }
    return config
  });

export default instance;