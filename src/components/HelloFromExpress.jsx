import { useEffect, useState } from "react";
import { RotatingLines } from 'react-loader-spinner'
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
        <h1>{fetchMessage ? fetchMessage : <RotatingLines
            visible={true}
            height="40"
            width="40"
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />}</h1>
     );
}

export default HelloFromExpress;