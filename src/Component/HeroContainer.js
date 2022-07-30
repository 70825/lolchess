import styled from "styled-components";
import CoinHero from "./CoinHero/CoinHero";

const HeroContainer = (props) => {
  const coinHeroList = [
    [
      "Sejuani",
      "Ezreal",
      "TahmKench",
      "Nidalee",
      "Senna",
      "Heimerdinger",
      "Sett",
      "Aatrox",
      "Skarner",
      "Karma",
      "Leona",
      "Taric",
      "Vladimir",
    ],
    [
      "Ashe",
      "Braum",
      "Gnar",
      "Jinx",
      "Kayn",
      "Lillia",
      "Nami",
      "Qiyana",
      "Shen",
      "Thresh",
      "Tristana",
      "Twitch",
      "Yone",
    ],
    [
      "Anivia",
      "Diana",
      "Elise",
      "Illaoi",
      "LeeSin",
      "Lulu",
      "Nunu",
      "Olaf",
      "Ryze",
      "Swain",
      "Sylas",
      "Varus",
      "Volibear",
    ],
    [
      "Corki",
      "Daeja",
      "Hecarim",
      "Idas",
      "Neeko",
      "Ornn",
      "ShiOhYu",
      "Sona",
      "Syfen",
      "Talon",
      "Xayah",
    ],
    ["AoShin", "AurelionSol", "Bard", "Pyke", "Shyvana", "Yasuo", "Zoe"],
  ];

  const clickAddHeroHandler = (name) => {
    const newHeroList = [];
    var flag = false;

    if (props.items.includes(name)) flag = true;

    for(var i = 0; i < 9; i++){
        if (props.items[i] === "" && flag === false) {
            newHeroList.push(name);
            flag = true;
          } else newHeroList.push(props.items[i]);
    }
    props.onChangeHeroList(newHeroList);
  };

  return (
    <Container>
      {coinHeroList.map((heroList, index) => (
        <CoinHero
          key={index}
          number={index + 1}
          heroes={heroList}
          onClickAddHero={clickAddHeroHandler}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 40px;
  padding-right: 20px;
  width: 50%;
  height: 500px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
  }
`;

export default HeroContainer;
