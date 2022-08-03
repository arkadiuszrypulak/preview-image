import React from "react";
import { ItemList } from "./Item.styles";

const Item = (props) => {
  return <ItemList onClick={props.handleClick}>{props.children}</ItemList>;
};

export default Item;
