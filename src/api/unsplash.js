import axios from "axios"

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Y6f29zh13xkYogu076FUDRhQctueO7Xm1WV8iwt8XKk'
    }
})