import axios from "axios";

const useApi=()=>{
    const  BASE_URL="https://fakestoreapi.com";

    const getProducts=async()=>{
        const response =await axios.get(`${BASE_URL}/products`);
        return response.data;
    }

    return{
        getProducts,
    }
}

export default useApi;