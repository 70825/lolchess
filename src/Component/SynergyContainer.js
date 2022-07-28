import styled from "styled-components";
import SelectHeroPortrait from "./SelectHeroPortrait";

const SynergyContainer = (props) => {
  const setRemoveHero = (name) => {
    const newHeroList = [];
    props.items.forEach((heroName) => {
      if (name === heroName) newHeroList.push("");
      else newHeroList.push(heroName);
    });
    props.onChangeHeroList(newHeroList);
  };

  return (
    <Container>
      {props.items.map((item, index) => (
        <SelectHeroPortrait
          key={index}
          src={item !== "" ? "/Icon/" + item + ".png" : "/Icon/blank.png"}
          style={{ cursor: "pointer" }}
          onClick={() => setRemoveHero(item)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  padding: 0 40px 0 50px;

  @media screen and (min-width: 1537px) {
  }
`;

export default SynergyContainer;
