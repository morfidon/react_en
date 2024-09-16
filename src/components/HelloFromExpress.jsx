import { useEffect, useState } from "react";

function HelloFromExpress() {

    const [fetchMessage, setFetchMessage] = useState('')
    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch('/api/hello');
            const text = await response.text();

            setFetchMessage(text);


        };

        fetchMessage();
    }, [])

    return ( 
        <h1>{fetchMessage}</h1>
     );
}

export default HelloFromExpress;