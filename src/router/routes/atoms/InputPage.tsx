import { Heading, Input } from "@aprendaagora/simple-react-component-library";
import React, { useState } from "react";

const InputPage = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Heading level={3} text="Input Component" />
      <p>{value}</p>
      <Input value={value} setValue={setValue} />
    </div>
  );
};

export default InputPage;
