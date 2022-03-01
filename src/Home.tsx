import styled from "styled-components";
import { motion } from "framer-motion";

const Page1 = styled(motion.h1)`
  display: flex;
  font-family: "Montserrat";
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
  font-size: 5em;
  font-weight: 700;
`;

function Home() {
  return (
    <Page1 whileHover={{ scale: 1.2 }}>
      Kim Na Yeon,
      <br></br>
      FRONTEND DEVELOPER
    </Page1>
  );
}

export default Home;
