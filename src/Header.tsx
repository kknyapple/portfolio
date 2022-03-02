import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = styled(motion.div)`
  position: fixed;
  height: 50px;
  width: 100%;
  background: #d3d3d39b;
  text-align: center;
  top: 0px;
`;

const Col = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.span)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
`;

const Items = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Item = styled(motion.div)`
  margin-right: 30px;
  color: white;
  //transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  bottom: -10px;
  font-family: "Montserrat";
  font-size: 1.2em;
`;

function Header() {
  const [id, setId] = useState(1);
  return (
    <>
      <Nav>
        <Col>
          <Logo></Logo>
          <Items>
            <Item>
              <a href="#sectionOne">Home</a>
            </Item>
            <Item>
              <a href="#sectionTwo">Projects</a>
            </Item>
            <Item>
              <a href="#sectionThree">Contact</a>
            </Item>
          </Items>
        </Col>
      </Nav>
    </>
  );
}

export default Header;
