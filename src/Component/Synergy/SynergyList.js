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
        if(!flag) applySynergyList.push([1, "darken", synergyName, SynergyInfo[synergyName][0][0]]); 
    })

    for(let i = 0; i < applySynergyList.length; i++) {
        for(let j = 0; j < SynergyInfo[applySynergyList[i][2]].length; j++) {
            if (applySynergyList[i][0] >= SynergyInfo[applySynergyList[i][2]][j][0]){
                applySynergyList[i][1] = SynergyInfo[applySynergyList[i][2]][j][1];
                if(SynergyInfo[applySynergyList[i][2]].length - 1 >= j + 1) applySynergyList[i][3] = SynergyInfo[applySynergyList[i][2]][j+1][0];
                if(applySynergyList[i][2] === "Dragons") applySynergyList[i][3] = 1;
            }
        }
    }

    const sortValue = {
        "darken": 1,
        "bronze": 2,
        "silver": 3,
        "gold": 4,
        "chromatic": 5
    }
    applySynergyList.sort(function(a, b) {
        if (sortValue[a[1]] >= sortValue[b[1]]) return -1;
        else return 1;
    })

    return (
        <Container>
            {applySynergyList.map((heroList, index) => (
                <SynergyIconContainter key={index}>
                    <SynergyIcon trait={heroList[2]}/>
                    <SynergyBackgroundIcon item={heroList[1]}/>
                    <div style={{color: "white", textAlign: "center"}}> {heroList[0]} / {heroList[3]}</div>
                </SynergyIconContainter>
            ))}
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 83%;
    height: 80px;
    margin-left: 50px;
    overflow: hidden;

    @media screen and (min-width: 1537px) {
        height: 90px;
        width: 75.5%;
        margin-left: 75px;
    }
`;

const SynergyIconContainter = styled.div`
    position: relative;
    height: 55px;
    opacity: 80%;
`;


export default SynergyList;