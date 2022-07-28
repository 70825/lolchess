import CoinHeroContainer from "./CoinHeroContainer";
import CoinHeroPortrait from "./CoinHeroPortrait";
import CoinHeroTopBar from "./CoinHeroTopBar";

const FiveCoinHero = () => {
    const pictureURL = "/Icon/";

    const oneCoinIcon = ["AoShin", "AurelionSol", "Bard", "Pyke", "Shyvana", "Yasuo", "Zoe"];

    return (
        <CoinHeroContainer>
            <CoinHeroTopBar onTitle={"5단계"} onGold={"5"}/>
            <div>
                {
                    oneCoinIcon.map((hero) => (
                        <CoinHeroPortrait src={pictureURL + hero + ".png"}/>
                    ))
                }
            </div>
        </CoinHeroContainer>
    )
}

export default FiveCoinHero;