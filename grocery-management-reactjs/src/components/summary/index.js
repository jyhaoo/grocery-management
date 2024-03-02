import styled from "styled-components";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { MdSaveAlt } from "react-icons/md";

const SummaryContainer = styled.div`
  background-color: ${({ theme }) => theme.summaryBackground};
  width: 968px;
  height: 130px;
  margin-top: 40px;
  margin-left: 71px;
  border-radius: 25px;
  position: absolute;
`;

const SubContainer = styled.div`
  width: 830px;
  height: 87px;
  margin-top: 31px;
  margin-left: 50px;
  margin-right: 88px;
  margin-bot: 33px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const SummaryItemContainer = styled.div`
  width: 218px;
  height: 84px;
`;

const SummaryItemTitle = styled.div`
  width: 114px;
  height: 21px;
  position: relative;
  margin-left: 90px;
  color: ${({ theme }) => theme.menuItem};
`;

const SummaryItemNumber = styled.div`
  width: 87px;
  height: 32px;
  margin-left: 90px;
  font-size: 28px;
  font-weight: 600;
  color: #333333;
  letter-spacing: 2px;
`;

const SummaryRateNumber = styled.div`
  width: 112px;
  height: 20px;
  margin-left: 90px;
  font-size: 12px;
`;

const Line = styled.div`
  border-left: 3px solid #f7f4ff;
  height: 90px;
`;

const Summary = () => {
  return (
    <SummaryContainer>
      <SubContainer>
        <SummaryItemContainer>
          <MdOutlineLocalGroceryStore
            style={{
              color: "#00ac4f",
              width: "60px",
              height: "60px",
              position: "absolute",
            }}
          />
          <SummaryItemTitle>Total Items</SummaryItemTitle>
          <SummaryItemNumber>5,432</SummaryItemNumber>
          <SummaryRateNumber>18% this month</SummaryRateNumber>
        </SummaryItemContainer>
        <Line />
        <SummaryItemContainer>
          <BsFillExclamationTriangleFill
            style={{
              color: "#DF0404",
              width: "60px",
              height: "60px",
              position: "absolute",
            }}
          />
          <SummaryItemTitle>Expire this week</SummaryItemTitle>
          <SummaryItemNumber>5,432</SummaryItemNumber>
          <SummaryRateNumber>18% this week</SummaryRateNumber>
        </SummaryItemContainer>
        <Line />
        <SummaryItemContainer>
          <MdSaveAlt
            style={{
              color: "#00ac4f",
              width: "60px",
              height: "60px",
              position: "absolute",
            }}
          />
          <SummaryItemTitle>Total Saved</SummaryItemTitle>
          <SummaryItemNumber>5,432</SummaryItemNumber>
          <SummaryRateNumber>18% better than others</SummaryRateNumber>
        </SummaryItemContainer>
      </SubContainer>
    </SummaryContainer>
  );
};

export default Summary;
