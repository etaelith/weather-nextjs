import LogicContainer from "./container/LogicContainer";

export default function Home() {
  return (
    <div className="w-full h-full">
      <header className="flex flex-col justify-center items-center py-8">
        <h1>Weather App</h1>
      </header>
      <main className="flex flex-col justify-between items-center p-4 gap-4">
        <LogicContainer />
      </main>
    </div>
  );
}
