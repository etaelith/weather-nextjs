/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import CardMain from "../components/CardMain";
import Form from "../components/Form";
import TenDays from "../components/TenDays";
import useForm from "../hooks/useForm";

function LogicContainer() {
  const {results, handleSubmit, handleChange, loading, days} = useForm();

  return (
    <>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      {loading ? (
        <div className="lds-dual-ring" />
      ) : results ? (
        <CardMain results={results} />
      ) : null}
      {loading ? null : days ? <TenDays days={days} /> : null}
    </>
  );
}

export default LogicContainer;
