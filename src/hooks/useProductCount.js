import axios from "axios";
import { useEffect, useState } from "react";

const useProductCount = () => {
    const [productCount, setProductCount] = useState('')

    useEffect(() => {
        const count = async () => {
            const { data } = await axios.get('http://localhost:5000/count')
            setProductCount(data.count)
        }
        count()

    }, [])

    return [productCount];
};

export default useProductCount;