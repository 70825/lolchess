import styled from "styled-components";
import SynergyIcon from "./SynergyIcon";
import SynergyBackgroundIcon from "./SynergyBackgroundIcon";
import HeroSynergyInfo from "../Info/HeroSynergyInfo";
import SynergyInfo from "../Info/SynergyInfo";

const SynergyList = (props) => {

    const newSynergyList = [];
    const applySynergyList = [];

    props.items.map((heroName) => {
        HeroSynergyInfo[heroName].map((synergyName) => {
            newSynergyList.push(synergyName);
        })
    });

    newSynergyList.map((synergyName) => {
        let flag = false;
        for(let i = 0; i < applySynergyList.length; i++) {
            if(synergyName === applySynergyList[i][2]){
                flag = true;
                applySynergyList[i][0] += 1;
            }
        }
        if(!flag) applySynergyList.push([1, "darken", synergyName]); 
    })

    for(let i = 0; i < applySynergyList.length; i++) {
        console.log(applySynergyList[i]);
        console.log(SynergyInfo[applySynergyList[i][2]]);
        for(let j = 0; j < SynergyInfo[applySynergyList[i][2]].length; j++) {
            if (applySynergyList[i][0] >= SynergyInfo[applySynergyList[i][2]][j][0]){
                applySynergyList[i][1] = SynergyInfo[applySynergyList[i][2]][j][1];
            }
        }
    }
    

    return (
        <Container>
            {applySynergyList.map((heroList, index) => (
                <SynergyIconContainter key={index}>
                    <SynergyIcon trait={heroList[2]}/>
                    <SynergyBackgroundIcon item={heroList[1]}/>
                </SynergyIconContainter>
            ))}
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 55px;
    width: 100%;
    padding-left: 70px;
`;

const SynergyIconContainter = styled.div`
    position: relative;
    height: 55px;
    opacity: 80%;
`;


export default SynergyList;