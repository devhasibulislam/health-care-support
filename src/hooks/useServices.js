import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(request => request.json())
        .then(response => setServices(response))
    }, []);

    return [services, setServices];
};

export default useServices;