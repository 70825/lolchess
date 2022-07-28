import styled from "styled-components";
import SelectHeroPortrait from "./SelectHeroPortrait";


const SynergyContainer = (props) => {

    return (
        <Container>
            {
                props.items.map((item) => (
                    <SelectHeroPortrait src={item !== "" ? "/Icon/" + item + ".png": "/Icon/blank.png"} style={{cursor: "pointer"}}/>
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