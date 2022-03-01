import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Page2 = styled(motion.h1)`
  font-family: "Montserrat";
  text-align: center;

  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 25px;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(165, 165, 165, 0.5);
  border-radius: 10px;
  height: 160px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const clickedBox = styled(motion.div)`
  width: 500px;
  height: 500px;
  color: white;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function Project() {
  const [id, setId] = useState<number | null>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <>
      <Wrapper>
        <Grid>
          <Box
            whileHover={{ scale: 1.08 }}
            onClick={() => setId(1)}
            key={1}
            layoutId="1"
          >
            <Page2>
              포트폴리오 사이트
              <br></br>#react-fullpage
            </Page2>
          </Box>
          <Box
            whileHover={{ scale: 1.08 }}
            onClick={() => setId(2)}
            key={2}
            layoutId="2"
          >
            <Page2>
              포켓몬 도감
              <br></br>#포켓몬api
            </Page2>
          </Box>
          <Box
            whileHover={{ scale: 1.08 }}
            onClick={() => setId(3)}
            key={3}
            layoutId="3"
          >
            <Page2>Project3</Page2>
          </Box>
          <Box
            whileHover={{ scale: 1.08 }}
            onClick={() => setId(4)}
            key={4}
            layoutId="4"
          >
            <Page2>Project4</Page2>
          </Box>
        </Grid>

        <AnimatePresence>
          {id ? (
            <Overlay
              variants={overlay}
              onClick={() => setId(null)}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {id === 1 ? (
                <Box
                  layoutId="1"
                  style={{
                    width: 700,
                    height: 500,
                    backgroundColor: "white",
                  }}
                >
                  <div>
                    포트폴리오 사이트
                    <br></br>
                    <img src="img/1.jpg" style={{ width: 600 }} />
                    <br></br>
                    <a href="https://github.com/">Github</a>
                  </div>
                </Box>
              ) : id === 2 ? (
                <Box
                  layoutId="2"
                  style={{
                    width: 700,
                    height: 500,
                    backgroundColor: "white",
                  }}
                />
              ) : id === 3 ? (
                <Box
                  layoutId="3"
                  style={{
                    width: 700,
                    height: 500,
                    backgroundColor: "white",
                  }}
                ></Box>
              ) : id === 4 ? (
                <Box
                  layoutId="4"
                  style={{
                    width: 700,
                    height: 500,
                    backgroundColor: "white",
                  }}
                ></Box>
              ) : null}
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default Project;
