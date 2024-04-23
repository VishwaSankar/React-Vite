    import React, { useState } from 'react'

    const Title = ({props,u}) => {

    // const[title,settitle]=useState("");
    // useEffect(() => {
    //     if (u) {
    //       settitle(props.toUpperCase());
    //     } else {
    //       settitle(props.toLowerCase());
    //     }
    //   }, [props, u]);


    return (
            
        
            <p>
            {u?props.toUpperCase():props.toLowerCase()} 
            </p>

        
    )
    }

    export default Title