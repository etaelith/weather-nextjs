"use client";

import type {ChangeEvent, FormEvent} from "react";

interface FormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function Form({handleSubmit, handleChange}: FormProps) {
  return (
    <form className="flex gap-4 border-red-500 border-2 rounded-lg p-4" onSubmit={handleSubmit}>
      <input
        className="text-black rounded-lg"
        name="city"
        placeholder="City"
        type="text"
        onChange={handleChange}
      />
      <button className="border-red-500 rounded-lg border-2 p-1" type="submit">
        Search
      </button>
    </form>
  );
}

export default Form;
