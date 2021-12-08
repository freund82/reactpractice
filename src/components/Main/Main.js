import styled from 'styled-components'
import ImgSrc from '../../assets/images/backgroundMain.png'


const HeaderInner=styled.section`
    height:100vh;
    background-image: url(${ImgSrc});
    background-size:cover;

`;


function Main(){
    return(
        <HeaderInner>
           
        </HeaderInner>
    )
}

export default Main