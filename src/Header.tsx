import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = styled(motion.div)`
  position: fixed;
  height: 50px;
  display: block;
  width: 100%;
  background: #d3d3d39b;
  //z-index: 9;
  text-align: center;
  //padding: 5px 0px 0px 0px;
  top: 0px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.div)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 30px;
  color: white;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
`;

function Header() {
  return (
    <Nav>
      <Col>
        <Logo>❤</Logo>
        <Items>
          <Item>
            <a href="#sectionOne">Home </a>
          </Item>
          <Item>
            <a href="#sectionTwo">Projects </a>
          </Item>
          <Item>
            <a href="#sectionThree">Contact </a>
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}

export default Header;
