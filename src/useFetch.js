import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //Can cause an infinite loop so be careful, second arg is optional for events that fire the hook
    //[] signals only at the beginning, any args are tracked for changes
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url])

    //Want to return the properties of the hook to use in other places
    return { data, isPending, error, setData }
}

export default useFetch;