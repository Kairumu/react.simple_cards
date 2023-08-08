import React, { useState, useEffect, } from "react";
import react from "react";
import { useSelector, useDispatch } from 'react-redux'

import Home    from './Home';
import Loading from './Components/Loading';

const App = (props) => {

    const dispatch = useDispatch();
    const session  = useSelector((state) => state.session);

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
