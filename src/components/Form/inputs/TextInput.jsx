import React from "react";

/**
 *
 * @param {React.InputHTMLAttributes<InputHTMLElement=>} props
 * @return {JSX.Element}
 * @constructor
 */

export function TextInput({ ...props }) {
  return (
    <>
      <label>
        {props.title}:
        <input style={{ width: "100%" }} {...props} />
      </label>
      <br />
    </>
  );
}
