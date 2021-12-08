import styled from 'styled-components'
import NavBlock from './NavMenu/NavBlock';


const HeaderBlock=styled.div`
position:absolute;
width:100%;
max-width:1440px;
height:84px;
color:#000;
background: #87ADB6;
display:flex;
align-items:center;
justify-content:space-between;
`;

function Header(){
    return(
        <HeaderBlock>
            <NavBlock></NavBlock>
        </HeaderBlock>
    )
}

export default Header