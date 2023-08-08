import React, { useState, useEffect, } from "react";

import Home    from './Home';
import Loading from './Components/Loading';

const App = (props) => {

    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        }, 3000)
    }, []);
    
    if (loading) return (<Loading />);
    return (<Home />);
}

export default App;
