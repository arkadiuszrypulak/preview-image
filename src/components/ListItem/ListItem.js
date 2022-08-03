import React, { useContext } from "react";
import Item from "../Item/Item";
import { UlItems } from "./ListItem.styles";
import { PrevImage } from "../UploadImage/UploadImage.styles";
import { ImageContext } from "../UploadImage/UploadImage";

const ListItem = () => {
  const { preview, setPreview } = useContext(ImageContext);

  let values = [];
  let keys;
  let actualName;
  const handleClick = (e) => {
    actualName = e.target.outerText;
    setPreview(localStorage.getItem(actualName));
  };

  function allStorage() {
    let i;
    keys = Object.keys(localStorage);
    i = keys.length;

    if (keys.length > 5) {
      localStorage.removeItem(keys[0]);
    }
    console.log(keys);
    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    return values;
  }
  allStorage();

  const ListOfImages = () => (
    <>
      {keys.map((el) => (
        <Item key={el} handleClick={handleClick}>
          {el}
        </Item>
      ))}
      {preview ? <PrevImage src={preview} /> : null}
    </>
  );

  return (
    <UlItems>
      <ListOfImages />
    </UlItems>
  );
};

export default ListItem;
