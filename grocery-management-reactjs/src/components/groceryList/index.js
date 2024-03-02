import styled from "styled-components";
import Item from "./item";

const GroceryContainer = styled.div`
  background-color: #ffffff;
  width: 968px;
  height: 450px;
  margin-top: 210px;
  margin-left: 71px;
  margin-right: 95px;
  border-radius: 25px;
`;

const Title = styled.div`
  background-color: lightgreen;
  width: 155px;
  height: 33px;
  margin-left: 38px;
  padding-top: 30px;
  font-size: 22px;
  font-weight: 500;
  position: relative;
`;

const ColumnTab = styled.div`
  background-color: lightblue;
  width: 863px;
  height: 21px;
  margin-top: 20px;
  margin-left: 38px;
  margin-right: 78px;
  display: flex;
`;

const ColumnName = styled.text`
  margin-right: 230px;
  color: #b5b7c0;
`;

const Line = styled.hr`
  color: #eeeeee;
  height: 0px;
  width: 880px;
  margin-right: 48px;
`;

const GroceryList = () => {
  return (
    <GroceryContainer>
      <Title>All Grocery</Title>
      <ColumnTab>
        <ColumnName>Name</ColumnName>
        <ColumnName>Type</ColumnName>
        <ColumnName>Expiration Date</ColumnName>
      </ColumnTab>
      <Line />
      <Item name="Apples" type="Fruit" expirationDate="12-1-25" />
      <Line />
      <Item name="Orange" type="Fruit" expirationDate="12-3-25" />
      <Line />
    </GroceryContainer>
  );
};

export default GroceryList;
