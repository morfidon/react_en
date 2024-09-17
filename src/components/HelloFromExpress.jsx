import { useEffect, useState } from "react";

function HelloFromExpress() {

    const [fetchMessage, setFetchMessage] = useState('')
    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch('/api/hello');
            const text = await response.text();

            
            setTimeout(() => {
                setFetchMessage(text);
            }, 1500);


        };
        fetchMessage();
    }, [])

    return ( 
        <h1>{fetchMessage ? fetchMessage : 'Loading...'}</h1>
     );
}

export default HelloFromExpress;