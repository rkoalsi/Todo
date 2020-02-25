import React from "react";
import { Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const List = props => (
  <ul>
    {props.items.map((item, index) => (
      <li style={{ color: "white" }}>
        <Checkbox onChange={onChange} key={index}>
          {item}{" "}
        </Checkbox>
      </li>
    ))}
  </ul>
);

export default List;
