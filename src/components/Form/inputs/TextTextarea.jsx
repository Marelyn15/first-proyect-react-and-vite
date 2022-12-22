import React from "react";

/**
 * @param {string} label 
 * @param {React.InputHTMLAttributes<InputHTMLElement=>} props
 * @return {JSX.Element}
 * @constructor
 */

export function TextArea({...props }){
    return(
        <>
        <label>
            {props.title}:
            <textarea style={{width: "100%"}} {...props} />
        </label>
        <br />
        </>
    )
}