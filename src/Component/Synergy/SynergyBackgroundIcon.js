import styled from "styled-components";

const synergyBackgroundIcon = (props) => {
    return (
        <SynergyBackgroundIcon src={"/SynergyIcon/" + props.item + ".svg"} alt="background"/>
    );
}

const SynergyBackgroundIcon = styled.img`
    width: 55px;
`;

export default synergyBackgroundIcon;