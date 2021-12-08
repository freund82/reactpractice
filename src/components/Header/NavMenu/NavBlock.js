import styled from 'styled-components'


const NavMenu=styled.span`
    width:100%;
    max-width:1265px;
    margin:0 auto;
    display:flex;
`;

function NavBlock(){
    return(
        <>
        <div style={{width:"140px", display:"inline-flex"}}>
        <NavMenu>SHOP</NavMenu>
        <NavMenu>ABOUT</NavMenu>
        </div>
        <NavMenu style={{ fontSize:'30px', justifyContent:"center"}}>Neuro</NavMenu>
        </>
    )
}

export default NavBlock