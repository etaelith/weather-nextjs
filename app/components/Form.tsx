"use client";

interface FormProps {
  handleSubmit: () => void;
  setState: (string: string) => void;
}
function Form({handleSubmit, setState}: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-black "
        name="city"
        placeholder="City"
        type="text"
        onChange={(e) => setState(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default Form;
