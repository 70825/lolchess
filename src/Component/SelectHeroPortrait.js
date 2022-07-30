import styled from "styled-components";

const SelectHeroPortrait = styled.img`
    width: 150px;
    height: 150px;
    border: solid 2px rgb(57, 67, 57);
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
    object-fit:cover;

    @media screen and (min-width: 1537px){
        width: 190px;
        height: 190px;
      }
`

export default SelectHeroPortrait;