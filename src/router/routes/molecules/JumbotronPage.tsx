import {
  Jumbotron,
  Table,
  Heading,
} from "@aprendaagora/simple-react-component-library";
import ComponentExample from "../../../components/ComponentExample";
import { headers1, table1 } from "../organisms/TablePage";

const JumbotronPage = () => {
  const code1 = `<Jumbotron
  heading="Jumbotron with Table inside"
  description="This is the description for the jumbotron"
  Content={<Table data={table1} headers={headers1} />}
/>`;

  return (
    <div className="w-full">
      <Heading level={3} text="Jumbotron" tailwind="mb-5" />

      <ComponentExample
        heading="Jumbotron with Table inside"
        Component={
          <Jumbotron
            heading="Jumbotron with Table inside"
            description="This is the description for the jumbotron"
            Content={<Table data={table1} headers={headers1} />}
          />
        }
        code={code1}
      />
    </div>
  );
};

export default JumbotronPage;
