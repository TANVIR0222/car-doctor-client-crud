import { useEffect, useState } from "react";

const useServices = () => {
    const [service, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return service
};

export default useServices;