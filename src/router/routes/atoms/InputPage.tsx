import { Heading, Input } from "@aprendaagora/simple-react-component-library";
import React, { useState } from "react";
import ComponentExample from "../../../components/ComponentExample";

const code1 = `<Input value={value} setValue={setValue} />`;

const InputPage = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Heading level={3} text="Input" tailwind="mb-5" />

      <ComponentExample
        heading="Input"
        Component={<Input value={value} setValue={setValue} />}
        code={code1}
      />
    </div>
  );
};

export default InputPage;
