import CoinHeroContainer from "./CoinHeroContainer";
import CoinHeroPortrait from "./CoinHeroPortrait";
import CoinHeroTopBar from "./CoinHeroTopBar";

const OneCoinHero = () => {
    const pictureURL = "/Icon/";

    const oneCoinIcon = ["Sejuani", "Ezreal", "TahmKench", "Nidalee", "Senna", "Heimerdinger", 
                        "Sett", "Aatrox", "Skarner", "Karma", "Leona", "Taric", "Vladimir"];

    return (
        <CoinHeroContainer>
            <CoinHeroTopBar onTitle={"1단계"} onGold={"1"}/>
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

export default OneCoinHero;