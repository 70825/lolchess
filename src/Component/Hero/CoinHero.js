import CoinHeroPortrait from "./CoinHeroPortrait";
import CoinHeroTopBar from "./CoinHeroTopBar";
import styled from "styled-components";

const CoinHero = (props) => {
  const selectedHero = (name) => {
    if (props.items.includes(name)) return "grayscale(100%)";
    else return "";
  };

  return (
    <Container>
      <CoinHeroTopBar
        onTitle={props.number.toString() + "단계"}
        onGold={props.number.toString()}
      />
      <div>
        {props.heroes.map((hero, index) => (
          <CoinHeroPortrait
            key={index}
            src={"/HeroIcon/" + hero + ".png"}
            style={{filter: selectedHero(hero)}}
            onClick={() => props.onClickAddHero(hero)}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    padding: 5px 5px 5px 15px;
`;

export default CoinHero;
