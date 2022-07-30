import styled from "styled-components";

const SynergyIcon = (props) => {

    return (
        <SynergyImage src={"/SynergyIcon/" + props.trait + ".svg"} alt="hero"/>
    )
}

const SynergyImage = styled.img`
    position: absolute;
    width: 33px;
    padding-top: 11px;
    margin-left: 11px;
`

export default SynergyIcon;