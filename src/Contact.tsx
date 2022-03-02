import styled from "styled-components";
import { motion } from "framer-motion";

const Title = styled.h1`
  font-family: "Montserrat";
  text-align: center;
  color: white;
  font-size: 45px;
`;

const Page3 = styled.h2`
  font-family: "Montserrat";
  text-align: center;
  color: white;
  font-size: 28px;
`;

const Wrapper = styled.div`
  //height: 100vh;
  //width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 120px;
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
  //padding-top: px;
  margin-left: 12px;
  margin-right: 12px;
`;

function Contact() {
  return (
    <>
      <Title>Contact Me!</Title>
      <Wrapper>
        <Round whileHover={{ scale: 1.08 }}>
          <Page3>✉Email kknyapple@gmail.com</Page3>
        </Round>
        <Round whileHover={{ scale: 1.08 }}>
          <Page3>
            📌
            <a href="https://github.com/">Github</a>
          </Page3>
        </Round>
        <Round whileHover={{ scale: 1.08 }}>
          <Page3>📄blog</Page3>
        </Round>
      </Wrapper>
    </>
  );
}

export default Contact;
