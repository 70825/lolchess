import styled from "styled-components";
import SelectHeroPortrait from "./SelectHeroPortrait";
import SynergyList from "./Synergy/SynergyList";
import HeroStageInfo from "./Info/HeroStageInfo";


const SynergyContainer = (props) => {
  const onClickRemoveHero = (name) => {
    const newHeroList = [];
    props.items.forEach((heroName) => {
      if (name === heroName) newHeroList.push("");
      else {
        newHeroList.push(heroName);
      }
    });
    props.onChangeHeroList(newHeroList);
  };

  const borderColor = ["gray", "rgb(49, 152, 76)", "rgb(43, 85, 134)", "rgb(171, 76, 180)", "rgb(198, 168, 96)"];

  const filterHeroBorder = (heroName) => {
    return "solid 3px " + borderColor[HeroStageInfo[heroName]-1];
  }

  return (
    <AllContainer>
      <Container>
        {props.items.map((item, index) => (
          <SelectHeroPortrait
            key={index}
            src={item !== "" ? "/HeroIcon/" + item + ".png" : "/HeroIcon/blank.png"}
            style={{ cursor: "pointer", border: filterHeroBorder(item)}}
            onClick={() => onClickRemoveHero(item)}
          />
        ))}
      </Container>
      <SynergyList items={props.items}/>
    </AllContainer>
  );
};

const AllContainer = styled.div`
    width: 50%;
    height: 100%;
`


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(3, 30%);
  row-gap: 10px;
  column-gap: 10px;
  
  padding: 0 40px 0 50px;

  @media screen and (min-width: 1537px) {
    padding-left: 70px;
    column-gap: 0px;
  }
`;

export default SynergyContainer;
