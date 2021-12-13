import styled from 'styled-components'



const HeaderBlock=styled.div`
position:absolute;
width:100%;
height:84px;
color:#000;
background: #87ADB6;
display:flex;
align-items:center;
justify-content:space-between;
`;

const NavMenu=styled.div`
    width:100%;
    max-width:1265px;
    margin: 0 auto;
`;

const NavFirst=styled.div`
    width:140px;
    display:flex;
    justify-content:space-between
`;
const Logo=styled.div`
      font-size:30px;
`;
const NavSecond=styled.div`
    width:251px;
    display:flex;
    justify-content:space-between
`;

function Header(){
    return(
        <HeaderBlock className="Header">
                <NavMenu className="Header-inner-menu" style={{display:"flex", alignItems:"center", paddingLeft:"10px", paddingRight:"10px"}}>
                    <NavFirst className="NavMenu-first">
                   <a href="#">SHOP</a>
                   <a href="#">ABOUT</a> 
                   </NavFirst>
                   <Logo style={{margin:"0 auto"}}>Neuro<sup><i className="far fa-copyright" style={{fontSize:"10px"}}></i></sup></Logo>
                   <NavSecond>
                   <a href="#">SUBSCRIPTION</a>
                   <a href="#">SIGN IN</a>
                   <a href="#"><i className="fas fa-shopping-bag"></i></a>
                   </NavSecond>
                </NavMenu>
        </HeaderBlock>
    )
}

export default Header