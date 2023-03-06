import { Heading } from "@aprendaagora/simple-react-component-library";
import React from "react";
import { Link } from "react-router-dom";
import List from "./List";

interface SidemenuProps {
  menuSections: {
    heading?: string;
    routes?: {
      route: string;
      text: string;
    }[];
  }[];
}

const Sidemenu: React.FC<SidemenuProps> = ({ menuSections }) => {
  return (
    <div className="min-h-[calc(100vh-50px)] bg-slate-100 w-[300px] border-r-2 p-3">
      {menuSections.map((section) => (
        <>
          {section.heading && <Heading level={6} text={section.heading} />}
          {section.routes && (
            <List
              items={section.routes}
              listStyle={{ marginTop: "20px" }}
              itemStyle={{ marginBottom: "10px" }}
              renderItem={(item) => (
                <Link className="hover:underline block" to={item.route}>
                  {item.text}
                </Link>
              )}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Sidemenu;
