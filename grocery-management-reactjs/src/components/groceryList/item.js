import styled from "styled-components";
import { GoTrash } from "react-icons/go";

const ItemContainer = styled.div`
  width: 890px;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 40px;
  vertical-align: middle;
  border: 2px solid red;
  border-radius: 10px;
`;

const ItemName = styled.div`
  margin-top: 5px;
  font-size: 14px;
  position: absolute;
`;

const ItemType = styled.div`
  margin-top: 5px;
  margin-left: 268px;
  position: absolute;
`;

const ItemExpirationDate = styled.div`
  margin-top: 5px;
  margin-left: 528px;
  position: absolute;
`;

const Item = (props) => {
  return (
    <ItemContainer>
      <ItemName>{props.name}</ItemName>
      <ItemType>{props.type}</ItemType>
      <ItemExpirationDate>{props.expirationDate}</ItemExpirationDate>
      <GoTrash
        style={{ position: "absolute", marginLeft: "800px", marginTop: "5px" }}
      />
    </ItemContainer>
  );
};

export default Item;
