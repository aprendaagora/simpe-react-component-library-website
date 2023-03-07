import {
  Collapsible,
  Table,
  Heading,
} from "@aprendaagora/simple-react-component-library";
import ComponentExample from "../../../components/ComponentExample";
import { headers1, table1 } from "../organisms/TablePage";

const code1 = `<Collapsible
  heading="Collapsible with Table component"
  Content={<Table data={table1} headers={headers1} />}
/>`;

const CollapsiblePage = () => {
  return (
    <div className="w-full">
      <Heading level={3} text="Collapsible" tailwind="mb-5" />

      <ComponentExample
        heading="Collapsible with Table inside"
        Component={
          <Collapsible
            heading="Collapsible with Table component"
            Content={<Table data={table1} headers={headers1} />}
          />
        }
        code={code1}
      />
    </div>
  );
};

export default CollapsiblePage;
