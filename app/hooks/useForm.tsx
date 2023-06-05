"use client";
import type {CityResult} from "../interfaces/CityResult";

import {useState} from "react";

const variable = process.env.API_KEY;

async function getData(city: string) {
  console.log(variable);
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${variable}&q=${city}&days=10`,
  );

  console.log(res);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const useForm = () => {
  const [state, setState] = useState<string>("");
  const [results, setResults] = useState<CityResult | null>();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result: CityResult = await getData(state);

    setResults(result);
  };

  return {results, handleSubmit, state, setState};
};

export default useForm;
