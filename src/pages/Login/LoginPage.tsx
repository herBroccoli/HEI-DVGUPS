import axios from "axios";
import { useEffect, useState } from "react";

const LoginNext = () => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then(res => setData(res.data))
        .catch(err => console.error('Ошибка при получении данных:', err))
    }, [])

    return (
        <>
        {JSON.stringify(data)}
        </>
    )
}

export default LoginNext;