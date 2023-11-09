import { useEffect, useState } from "react"
import apiClient from "../services/api-client";




const useData = () => {
    const [data, setData] = useState<string[]>([]);
    const [error, setError] = useState('')

    useEffect(() =>{
       
        const controller = new AbortController();

        apiClient
        .get('/words.json',  { signal: controller.signal})
        .then(response => setData(response.data))
        .catch(error => setError(error.message))

        return () => controller.abort();

    }, []);

    return {data, error}

};

export default useData;