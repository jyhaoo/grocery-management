import styled from "styled-components";
import { GoGear } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const Nav = styled.div`
  width: 306px;
  height: 100vh;
  position: absolute;
`;

const HeaderContainer = styled.div`
  margin: 36px 0 0 28px;
  width: 195px;
  height: 39px;
  font-size: 26px;
  font-weight: 500;
  display: flex;
`;

const Header = styled.div`
  margin-left: 8px;
`;

const MenuItemContainer = styled.div`
  width: 231px;
  height: 296px;
  margin: 64px 0 0 39px;
`;

const MenuItem = styled.div`
  width: 231px;
  height: 24px;
  margin-bottom: 29px;
  color: ${({ theme }) => theme.menuItem};
`;

const Navbar = () => {
  return (
    <Nav>
      <HeaderContainer>
        <GoGear style={{ position: "relative", marginTop: "4px" }} />
        <Header>Dashboard</Header>
      </HeaderContainer>
      <MenuItemContainer>
        <MenuItem>
          Add Item
          <IoIosArrowForward
            style={{
              position: "absolute",
              left: "254px",
            }}
          />
        </MenuItem>
        <MenuItem>
          Protein
          <IoIosArrowForward
            style={{
              position: "absolute",
              left: "254px",
            }}
          />
        </MenuItem>
        <MenuItem>
          Vegetable
          <IoIosArrowForward
            style={{
              position: "absolute",
              left: "254px",
            }}
          />
        </MenuItem>
        <MenuItem>
          Miscellaneous
          <IoIosArrowForward
            style={{
              position: "absolute",
              left: "254px",
            }}
          />
        </MenuItem>
      </MenuItemContainer>
    </Nav>
  );
};

export default Navbar;
