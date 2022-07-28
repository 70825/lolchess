import CoinHeroContainer from "./CoinHeroContainer";
import CoinHeroPortrait from "./CoinHeroPortrait";
import CoinHeroTopBar from "./CoinHeroTopBar";

const ThreeCoinHero = () => {
    const pictureURL = "/Icon/";

    const oneCoinIcon = ["Anivia", "Diana", "Elise", "Illaoi", "LeeSin", "Lulu",
                        "Nunu", "Olaf", "Ryze", "Swain", "Sylas", "Varus","Volibear"];

    return (
        <CoinHeroContainer>
            <CoinHeroTopBar onTitle={"3단계"} onGold={"3"}/>
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

export default ThreeCoinHero;