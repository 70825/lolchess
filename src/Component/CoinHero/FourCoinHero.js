import CoinHeroContainer from "./CoinHeroContainer";
import CoinHeroPortrait from "./CoinHeroPortrait";
import CoinHeroTopBar from "./CoinHeroTopBar";

const FourCoinHero = () => {
    const pictureURL = "/Icon/";

    const oneCoinIcon = ["Corki", "Daeja", "Hecarim", "Idas", "Neeko", "Ornn", 
                        "ShiOhYu", "Sona", "Syfen", "Talon", "Xayah"];

    return (
        <CoinHeroContainer>
            <CoinHeroTopBar onTitle={"4단계"} onGold={"4"}/>
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

export default FourCoinHero;