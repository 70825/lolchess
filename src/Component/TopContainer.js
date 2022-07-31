import styled from "styled-components";

const TopContainer = (props) => {
  return (
    <Container>
        <TeamContainer>팀 구성</TeamContainer>
        <ClearContainer>
            <ClearButton type="button" onClick={props.onClear}>모두 지우기</ClearButton>
        </ClearContainer>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20%;
    width: 100%;
`

const TeamContainer = styled.div`
    width: 50%;
    padding-top: 2.5rem;
    padding-left: 5rem;
    font-size: 32px;
    font-weight: 500;
    color: rgb(240, 230, 211);
`;

const ClearContainer = styled.div`
    padding-top: 1rem;
    margin: auto;

    @media screen and (min-width: 1537px) {
        padding-right: 3rem;
    }
`;

const ClearButton = styled.button`
    padding: 10px 30px 10px 30px;
    background-color: rgb(5, 13, 26);
    border: solid 4px rgb(127, 88, 37);
    border-radius: 50px;
    color: rgb(240, 230, 211);
    font-size: 24px;
    font-weight: 300;

    &:hover {
        background-color: rgb(32, 35, 40);
        cursor: pointer;
    }
`;

export default TopContainer;
