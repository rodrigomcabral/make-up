//start and reset time once clicked

import { useEffect, useState } from "react";

export default function Timer() {
  const [value, setValue] = useState(0);

  //increment the time every sec - sync the time with value
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((currentValue) => currentValue + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span className="bg-red-200 p-3 font-semibold">{value}</span>;
}
