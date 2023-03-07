import { Badge, Heading } from "@aprendaagora/simple-react-component-library";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ComponentExample from "../../../components/ComponentExample";

const badgeCode1 = `<Badge
  text="Regular badge"
  bgColor="blue"
  clickFunction={() => alert("Hello")}
  tailwind="mb-5"
/>`;

const badgeCode2 = `<Badge
  text="Badge with 1 digit count"
  count={1}
  bgColor="gray"
  clickFunction={() => alert("Hello")}
  tailwind="mb-5"
/>`;

const badgeCode3 = `<Badge
  text="Badge with count"
  count={50}
  bgColor="gray"
  clickFunction={() => alert("Hello")}
/>`;

const badgeCode4 = `<Badge
  text="Badge with count over 99"
  count={100}
  bgColor="gray"
  clickFunction={() => alert("You clicked a button")}
  tailwind="mb-5"
/>`;

const BadgePage = () => {
  return (
    <div className="flex flex-col">
      <Heading level={3} text="Badge" tailwind="mb-5" />

      <ComponentExample
        heading="Regular badge"
        Component={
          <Badge
            text="Regular badge"
            bgColor="blue"
            clickFunction={() => alert("Hello")}
            tailwind="inline-block"
          />
        }
        code={badgeCode1}
      />

      <ComponentExample
        heading="Badge with 1 digit count"
        Component={
          <Badge
            text="Badge with 1 digit count"
            count={1}
            bgColor="gray"
            clickFunction={() => alert("Hello")}
            tailwind="mb-5"
          />
        }
        code={badgeCode2}
      />

      <ComponentExample
        heading="Badge with 1 digit count"
        Component={
          <Badge
            text="Badge with count"
            count={50}
            bgColor="gray"
            clickFunction={() => alert("Hello")}
          />
        }
        code={badgeCode2}
      />

      <ComponentExample
        heading="Badge with count"
        Component={
          <Badge
            text="Badge with count"
            count={50}
            bgColor="gray"
            clickFunction={() => alert("Hello")}
          />
        }
        code={badgeCode3}
      />

      <ComponentExample
        heading="Badge with count over 99"
        Component={
          <Badge
            text="Badge with count over 99"
            count={100}
            bgColor="gray"
            clickFunction={() => alert("You clicked a button")}
          />
        }
        code={badgeCode4}
      />
    </div>
  );
};

export default BadgePage;
