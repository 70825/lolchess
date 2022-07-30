import styled from "styled-components";
import SelectHeroPortrait from "./SelectHeroPortrait";
import SynergyList from "./Synergy/SynergyList";

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

  return (
    <AllContainer>
      <Container>
        {props.items.map((item, index) => (
          <SelectHeroPortrait
            key={index}
            src={item !== "" ? "/HeroIcon/" + item + ".png" : "/HeroIcon/blank.png"}
            style={{ cursor: "pointer" }}
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
