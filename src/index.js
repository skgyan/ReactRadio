import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [platformValue, plaftormInputProps] = useRadioButtons("platform");
  const [genderValue, genderInputProps] = useRadioButtons("gender");
  return (
    <div>
      <form>
        <fieldset>
          Windows
          <input
            value="windows"
            checked={platformValue === "windows"}
            {...plaftormInputProps}
          />
          Mac
          <input
            value="mac"
            checked={platformValue === "mac"}
            {...plaftormInputProps}
          />
          Linux
          <input
            value="linux"
            checked={platformValue === "linux"}
            {...plaftormInputProps}
          />
        </fieldset>
        <fieldset>
          Male
          <input
            value="male"
            checked={genderValue === "male"}
            {...genderInputProps}
          />
          Female
          <input
            value="female"
            checked={genderValue === "female"}
            {...genderInputProps}
          />
        </fieldset>
      </form>
    </div>
  );
}

function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange
  };

  return [value, inputProps];
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
