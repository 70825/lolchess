import styled from "styled-components";
import FiveCoinHero from "./CoinHero/FiveCoinHero";
import FourCoinHero from "./CoinHero/FourCoinHero";
import OneCoinHero from "./CoinHero/OneCoinHero";
import ThreeCoinHero from "./CoinHero/ThreeCoinHero";
import TwoCoinHero from "./CoinHero/TwoCoinHero";

const HeroContainer = () => {

    return (
        <Container>
            <OneCoinHero/>
            <TwoCoinHero/>
            <ThreeCoinHero/>
            <FourCoinHero/>
            <FiveCoinHero/>
        </Container>
    );
}; 

const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    padding-left: 40px;
    padding-right: 20px;
    width: 50%;
    height: 500px;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    & {
        -ms-overflow-style: none;
    }
`;

export default HeroContainer;