import styled from "styled-components";

export const AddImage = styled.button`
  cursor: pointer;
  background-color: #0000ff;
  border: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 10px 40px;
  color: #fff;
  font-weight: 550;
  transition: 0.3s;
  font-family: 'Roboto', sans-serif;

  &:hover {
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem;
`;

export const PrevImage = styled.img`
  position: absolute;
  top: 20%;
  right: 30%;
  height: 50%;
  max-width: 50%;
  box-shadow: 2px 2px 10px 0px rgba(255, 255, 255, 1);
`;
