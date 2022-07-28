import styled from "styled-components";
import SelectHeroPortrait from "./SelectHeroPortrait";


const SynergyContainer = () => {
    const selectHero = ["", "", "", "", "", "", "", "", ""];

    return (
        <Container>
            {
                selectHero.map((items) => (
                    <SelectHeroPortrait>
                        {items}
                    </SelectHeroPortrait>
                ))
            }
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding: 0 40px 0 50px;
`;

export default SynergyContainer;