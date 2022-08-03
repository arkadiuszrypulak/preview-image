import { useEffect, useState, useRef, createContext, useMemo } from "react";
import ListItem from "../ListItem/ListItem";
import { AddImage, Wrapper } from "./UploadImage.styles";

export const ImageContext = createContext();

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const providerValue = useMemo(
    () => ({
      preview,
      setPreview,
    }),
    [preview]
  );

  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          localStorage.setItem(`${image.name}`, reader.result);
          setPreview(reader.result);
        }
      };

      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image, setPreview]);

  const FormComponent = () => {
    return (
      <>
        <form>
          {localStorage.length > 0 ? <ListItem /> : null}
          <AddImage
            onClick={(event) => {
              event.preventDefault();

              fileInputRef.current.click();
            }}
          >
            + Upload New Image
          </AddImage>

          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];

              if (file) {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
        </form>
      </>
    );
  };

  return (
    <ImageContext.Provider value={providerValue}>
      <Wrapper>
        <FormComponent />
      </Wrapper>
    </ImageContext.Provider>
  );
};
export default UploadImage;
