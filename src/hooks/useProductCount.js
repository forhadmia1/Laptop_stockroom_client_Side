import axios from "axios";
import { useEffect, useState } from "react";

const useProductCount = () => {
    const [productCount, setProductCount] = useState('')

    useEffect(() => {
        const count = async () => {
            const { data } = await axios.get('https://protected-atoll-86406.herokuapp.com/count')
            setProductCount(data.count)
        }
        count()

    }, [])

    return [productCount];
};

export default useProductCount;