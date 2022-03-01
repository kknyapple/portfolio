import styled from "styled-components";
import { motion } from "framer-motion";

const Page3 = styled.h1`
  font-family: "Montserrat";
  text-align: center;
  color: white;
`;

const Wrapper = styled.div`
  //height: 100vh;
  //width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Round = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 202, 202);
  border-radius: 30px;
  height: 120px;
  width: 355px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 5px;
`;

function Contact() {
  return (
    <>
      <Wrapper>
        <Round>
          <Page3>✉Email kknyapple@gmail.com</Page3>
        </Round>
        <Round>
          <Page3>
            📌
            <a href="https://github.com/">Github</a>
          </Page3>
        </Round>
        <Round>
          <Page3>📄blog</Page3>
        </Round>
      </Wrapper>
    </>
  );
}

export default Contact;
