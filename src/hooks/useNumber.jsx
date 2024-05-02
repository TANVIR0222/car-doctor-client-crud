import axios from "axios";
import { useEffect, useState } from "react";

const useNumber = () => {
    const [number, setnumber] = useState(0);
    useEffect(() => {
        axios.get()
        .then(res => {
            setnumber(res.data);
        })
    }, []);
    return number;

};

export default useNumber;