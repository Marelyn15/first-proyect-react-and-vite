//Hooks
import { useRef } from "react";

export function Button({ onSubmit }) {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <button style={{ width: "100%" }} type={"submit"}>
          Borrar
        </button>
      </form>
    </div>
  );
}
