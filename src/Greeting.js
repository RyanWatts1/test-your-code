import { useState } from "react";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Welcome to React Tester</h2>
      {!changedText && <p>Is this working?</p>}
      {changedText && <p>Text has changed</p>}
      <button className="button" onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}

export default Greeting;
