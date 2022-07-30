import CoinHeroContainer from "./CoinHeroContainer";
import CoinHeroPortrait from "./CoinHeroPortrait";
import CoinHeroTopBar from "./CoinHeroTopBar";

const CoinHero = (props) => {
  const duplicateHero = (name) => {
    if (props.items.includes(name)) return "grayscale(100%)";
    else return "";
  };

  return (
    <CoinHeroContainer>
      <CoinHeroTopBar
        onTitle={props.number.toString() + "단계"}
        onGold={props.number.toString()}
      />
      <div>
        {props.heroes.map((hero, index) => (
          <CoinHeroPortrait
            key={index}
            src={"/Icon/" + hero + ".png"}
            style={{filter: duplicateHero(hero)}}
            onClick={() => props.onClickAddHero(hero)}
          />
        ))}
      </div>
    </CoinHeroContainer>
  );
};

export default CoinHero;
