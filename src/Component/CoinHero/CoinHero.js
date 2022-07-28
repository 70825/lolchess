import CoinHeroContainer from "./CoinHeroContainer";
import CoinHeroPortrait from "./CoinHeroPortrait";
import CoinHeroTopBar from "./CoinHeroTopBar";

const CoinHero = (props) => {

    return (
        <CoinHeroContainer>
            <CoinHeroTopBar onTitle={props.number.toString() + "단계"} onGold={props.number.toString()}/>
            <div>
                {
                    props.heroes.map((hero, index) => (
                        <CoinHeroPortrait key={index} src={"/Icon/" + hero + ".png"}/>
                    ))
                }
            </div>
        </CoinHeroContainer>
    )
}

export default CoinHero;