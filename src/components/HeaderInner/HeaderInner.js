import Image from '../pictures/backgroundMain'

const Background=styled.div`
    background-image:url("../pictures/backgroundMain.png") no-repeat, cover;

`;


function Main(){
    return (
        <Background></Background>
    )
}

export default Main