import styled from "styled-components";

const CoinHeroTopBar = (props) => {
    return (
        <Container>
            <div>{props.onTitle}</div>
            <div>💰 {props.onGold}</div>          
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 0 10px 10px 10px;
    padding-right: 7px;
    color: gray;
    font-size: 20px;
    font-weight: 600;
`;

export default CoinHeroTopBar;