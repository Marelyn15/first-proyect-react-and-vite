//Hooks
import { useRef } from "react";
//Inputs
import { TextInput } from "./inputs/TextInput";
import { TextArea } from "./inputs/TextTextarea";


export function UserForm({onSubmit}){
    const formRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);
      onSubmit(data)
    };
    return (
      <diV>
        <form ref={formRef} onSubmit={handleSubmit}>
          <TextInput title={"Name"} name={"name"} required />
          <TextInput title={"Age"} name={"age"} type={"number"} required />
          <TextArea title={"Address"} name={"address"} required />
          <button type={"submit"}>Enviar</button>
        </form>
      </diV>
      );
}