import { useState } from "react";

const CountryList = () => {
  const [selctCountry, setSelctCountry] = useState("");
  const country = ["palestine", "UK", "USA", "Egypt"];

  return (
    <>
      <h1>the country select :{selctCountry}</h1>
      <ul>
        {country.map((el, index) => (
          <li key={index} onClick={() => setSelctCountry(el)}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};
export default CountryList;
