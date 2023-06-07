import type {Forecastday} from "../interfaces/CityResult";

import Image from "next/image";
import React from "react";

interface Day {
  day: Forecastday;
}
function TestCard({day}: Day) {
  return (
    <div className="flex flex-col w-full border-red-500 border-2 rounded-lg p-2">
      <div className="flex justify-between">
        <div>
          <div>{day.date}</div>
          <h5 className="text-sm">Min Temp: {day.day.mintemp_c} °C</h5>
          <h5 className="text-sm">Max Temp: {day.day.maxtemp_c}</h5>
          <h5 className="text-sm">Average Humidity: {day.day.avghumidity}%</h5>
        </div>
        <div className="h-full">
          <Image alt={day.day.condition.text} height={64} src={day.day.condition.icon} width={64} />
          <h6 className="text-xs text-center">{day.day.condition.text}</h6>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
