import { useState } from "react";

const Header = () => {
  const head = ["Home", "Product", "Support", "Sign in"];
  const [selectItems, setSelectItems] = useState(-1);

  return (
    <>
      <ul>
        {head.map((el, idx) => (
          <li
            onClick={() => setSelectItems(idx)}
            className={selectItems === idx ? "items active" : "items "}
            key={idx}
          >
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Header;
