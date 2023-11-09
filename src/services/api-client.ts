import axios from "axios";

// Passing in our main url through axios
export default axios.create({
    baseURL:'/src/data'
})