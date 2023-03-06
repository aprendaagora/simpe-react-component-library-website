import React from "react";
import { Link } from "react-router-dom";
import List from "./List";

interface NavbarProps {
  Logo: React.ReactNode;
  routes?: {
    route: string;
    text: string;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ Logo, routes }) => {
  return (
    <div className="flex items-center p-3 bg-gray-500 h-[50px]">
      <div className="mr-2">{Logo}</div>

      {routes && (
        <List
          items={routes}
          listStyle={{ display: "flex", color: "white" }}
          renderItem={(item) => (
            <Link className="mr-2 hover:underline" to={item.route}>
              {item.text}
            </Link>
          )}
        />
      )}
    </div>
  );
};

export default Navbar;
