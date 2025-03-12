import axios from "axios"; 

const axiosInstance = axios.create({
    // firebaase local
    baseURL: "http://127.0.0.1:5001/project-82dba/us-central1/api"
    // local express API
    // baseURL:"http://localhost:5000"

    // deployed on render.com
    // baseURL: "https://amazonapi-deploy.onrender.com"
})

export {axiosInstance};