"use client";
import CardMain from "./components/CardMain";
import Form from "./components/Form";
import useForm from "./hooks/useForm";

export default function Home() {
  const {results, handleSubmit, setState} = useForm();

  return (
    <div className="w-full h-full">
      <header className="flex flex-col justify-center items-center py-8">
        <h1>Weather App</h1>
      </header>
      <main className="flex flex-col justify-between items-center p-4 gap-4">
        <Form handleSubmit={handleSubmit} setState={setState} />
        {results ? <CardMain results={results} /> : null}
        <footer className="extra days">
          <div />
        </footer>
      </main>
    </div>
  );
}
