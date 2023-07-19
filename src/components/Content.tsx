import { useState } from "react";

const Content = () => {
  const [valid, setValid] = useState(true);

  return valid ? (
    <div className="content">
      <h1>SIMPLICITY</h1>
      <h1>PRACTICE</h1>
      <p>What you really need may not be as much as you think</p>
      <button onClick={() => setValid(!valid)}>LEARN MORE</button>
    </div>
  ) : (
    <div className="content">
      <p> East or west Shawarma is the best ..</p>
      <button onClick={() => setValid(!valid)}>Go back</button>
    </div>
  );
};
export default Content;
