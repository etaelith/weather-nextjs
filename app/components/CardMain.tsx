import type {CityResult} from "../interfaces/CityResult";

import Image from "next/image";
interface WeatherProps {
  results: CityResult;
}
function CardMain({results}: WeatherProps) {
  return (
    <div className="flex flex-col w-full h-auto border-red-500 border-2 rounded-md p-2">
      <h3>Monday, June 5, 2023</h3>

      <div className="flex justify-between p-2">
        <div className="flex flex-col justify-around">
          <h5 className="text-sm">
            {results.location.name}, {results.location.region}
          </h5>
          <h1>{results.current.temp_c} °C</h1>
        </div>
        <div>
          <Image
            alt={results.current.condition.text}
            height={64}
            src={results.current.condition.icon}
            width={64}
          />
          <h6 className="text-xs text-center">{results.current.condition.text}</h6>
        </div>
      </div>
      <div className="flex justify-evenly border-t-2 mt-2 p-2">
        <div className="flex flex-col justify-center items-center">
          <h5 className="">{results.forecast.forecastday[0].date}</h5>
          <Image
            alt={results.forecast.forecastday[0].day.condition.text}
            height={64}
            src={results.forecast.forecastday[0].day.condition.icon}
            width={64}
          />
          <h4>{results.forecast.forecastday[0].day.avgtemp_c} °C</h4>
          <h5 className="text-xs">{results.forecast.forecastday[0].day.condition.text}</h5>
        </div>
        <div className="border-r-2" />
        <div className="flex flex-col justify-center items-center">
          <h5>{results.forecast.forecastday[1].date}</h5>
          <Image
            alt={results.forecast.forecastday[1].day.condition.text}
            height={64}
            src={results.forecast.forecastday[1].day.condition.icon}
            width={64}
          />
          <h4>{results.forecast.forecastday[1].day.avgtemp_c}°C</h4>
          <h5 className="text-xs">{results.forecast.forecastday[1].day.condition.text}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardMain;
