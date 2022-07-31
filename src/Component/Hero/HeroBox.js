import styled from "styled-components";
import HeroTopBar from "./HeroTopBar";

const HeroBox = (props) => {
  const selectedHero = (name) => {
    if (props.items.includes(name)) return "grayscale(100%)";
    else return "";
  };

  return (
    <Container>
      <HeroTopBar
        onTitle={props.number.toString() + "단계"}
        onGold={props.number.toString()}
      />
      <div>
        {props.heroes.map((hero, index) => (
          <HeroPortrait
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

const HeroPortrait = styled.img`
    border: solid 2px gray;
    width: 16%;
    height: auto;
    margin: 10px 10px 10px 10px;
    padding: 5px 5px 5px 5px;

    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 1537px){
        width: 17%;
        height: auto;
      }
`;

export default HeroBox;
