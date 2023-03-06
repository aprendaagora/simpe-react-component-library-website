import React from "react";
import { Heading, List } from "@aprendaagora/simple-react-component-library";
import { Link } from "react-router-dom";
import atomicdesign from "../../static/images/atomicdesign.png";

const HomePage = () => {
  const items = ["atoms", "molecules", "organisms"];
  return (
    <div>
      <Heading level={4} text="Simple React Component Library" />

      <img src={atomicdesign} alt="Atomic Design Illustration" />

      <List
        items={items}
        listStyle={{ marginTop: "20px" }}
        itemStyle={{ color: "blue" }}
        renderItem={(item) => (
          <Link className="hover:underline" to={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        )}
      />
    </div>
  );
};

export default HomePage;
