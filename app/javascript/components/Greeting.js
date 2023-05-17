import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchRandomGreeting } from "../redux/greeting";

function Greeting(){
    const greet = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchRandomGreeting());
    },[dispatch]);
    
    return(
        <div className="greeting-container">
            <h1>Random Greetings </h1>
            <h2>{greet}</h2>
        </div>
    );
};
export default Greeting;