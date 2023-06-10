"use client";
import type {ChangeEvent, FormEvent} from "react";
import type {CityResult, Forecastday} from "../interfaces/CityResult";

import {useState} from "react";

const variable = "a84e9f0c872946a09ca55108230506";

const useForm = () => {
  const [state, setState] = useState<string>("");
  const [results, setResults] = useState<CityResult | null>();
  const [days, setDays] = useState<Forecastday[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${variable}&q=${state}&days=10&lang=es`,
      );
      const data = (await res.json()) as CityResult;

      setResults(data);
      setDays(data.forecast.forecastday);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return {results, handleSubmit, state, setState, handleChange, loading, days};
};

export default useForm;
