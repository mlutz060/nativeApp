import React from 'react';
import { useState } from 'react';
//UseState is a hook unique to react it allows us
//to trackk state in a function component this means
//there are variables that we need to watch when creating
//use state allows us to keep an eye on them it takes two 
//parameters the current state and the function that will
//be used to update our state and finally we set those equal
//to our initial state which is usually an empty string,list,
//object, etc.


const Timer = () => {

    const [days, setDays] = useState(0);
    const[hours, setHours] = useState(0);
    const[minutes, setMinutes] = useState(0);
    const[seconds, setSeconds] = useState(0);
    const[deadline, setDeadline] = useState("");

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 *24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60)% 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }



    return(
        <div className='timer'>

        </div>
    )
}

export default Timer;