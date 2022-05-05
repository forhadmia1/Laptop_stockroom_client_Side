import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {

        const getToken = async () => {
            const email = user?.user?.email;
            const { data } = await axios.post('https://protected-atoll-86406.herokuapp.com/login', { email })
            setToken(data.token)
            localStorage.setItem('accessToken', data.token)
        }
        getToken()

    }, [user])
    return [token]
};

export default useToken;