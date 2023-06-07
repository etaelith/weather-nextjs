import type {Forecastday} from "../interfaces/CityResult";

import TestCard from "./TestCard";
interface Days {
  days: Forecastday[];
}
function TenDays({days}: Days) {
  const filterDays = days.slice(2);

  return (
    <>
      {filterDays.map((day) => (
        <TestCard key={day.date} day={day} />
      ))}
    </>
  );
}

export default TenDays;
