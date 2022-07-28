import styled from "styled-components";

const CoinHeroPortrait = styled.img`
    border: solid 2px gray;
    width: 16%;
    height: auto;
    margin: 10px 10px 10px 10px;
    padding: 5px 5px 5px 5px;

    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 1537px){
        width: 17%;
        height: auto;
      }
`;

export default CoinHeroPortrait;