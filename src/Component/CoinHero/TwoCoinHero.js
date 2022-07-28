import CoinHeroContainer from "./CoinHeroContainer";
import CoinHeroPortrait from "./CoinHeroPortrait";
import CoinHeroTopBar from "./CoinHeroTopBar";

const TwoCoinHero = () => {
    const pictureURL = "/Icon/";

    const oneCoinIcon = ["Ashe", "Braum", "Gnar", "Jinx", "Kayn", "Lillia", 
                        "Nami", "Qiyana", "Shen", "Thresh", "Tristana", "Twitch", "Yone"];

    return (
        <CoinHeroContainer>
            <CoinHeroTopBar onTitle={"2단계"} onGold={"2"}/>
            <div>
                {
                    oneCoinIcon.map((hero, index) => (
                        <CoinHeroPortrait key={index} src={pictureURL + hero + ".png"}/>
                    ))
                }
            </div>
        </CoinHeroContainer>
    )
}

export default TwoCoinHero;