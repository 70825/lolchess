import TopContainer from "./Component/TopContainer";
import HeroContainer from "./Component/HeroContainer";
import SynergyContainer from "./Component/SynergyContainer";

import styled from "styled-components";
import { useState } from "react";

const App = () => {
  const [selectHeroList, setSelectHeroList] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const setClearHandler = () => {
    setSelectHeroList(() => {
      return ["", "", "", "", "", "", "", "", ""];
    });
  };

  const heroChangeHandler = (newHeroList) => {
    setSelectHeroList(newHeroList);
  };

  return (
    <ChessContainer>
      <BorderContainer>
        <TopContainer onClear={setClearHandler} />
        <Content>
          <HeroContainer
            items={selectHeroList}
            onChangeHeroList={heroChangeHandler}
          />
          <SynergyContainer
            items={selectHeroList}
            onChangeHeroList={heroChangeHandler}
          />
        </Content>
      </BorderContainer>
    </ChessContainer>
  );
};

const ChessContainer = styled.div`
  position: absolute;
  width: 1216px;
  height: 770px;
  margin: 0.3% 5% 0% 10%;
  background-color: rgb(5, 13, 16);
  border: solid 3px rgb(127, 88, 37);

  @media screen and (min-width: 1537px) {
    width: 1600px;
    height: 880px;
  }
`;

const BorderContainer = styled.div`
  margin: 5px 3px 5px 3px;
  border: solid 3px rgb(65, 68, 67);
  height: 98.7%;

  @media screen and (min-width: 1537px) {
    width: 1600px;
    height: 865px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export default App;
