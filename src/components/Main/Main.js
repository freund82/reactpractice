import styled from 'styled-components'
import ImgSrc from '../../assets/images/backgroundMain.png'


const HeaderInner=styled.section`
    height:100vh;
    background-image: url(${ImgSrc});
    background-size:cover;

`;

const HeaderInnerText=styled.div`
    width:319px;
    position:relative;
    top:15%;
    left:5%;
    font-size:55px;
    font-weight:bold;
    color:#fff;
`;

const Btn=styled.button`
    width:100%;
    max-width:260px;
    height:52px;
    background:#000;
    border:none;
    border-radius:2px;
    cursor:pointer;
`;

const Cookies=styled.div`
    position:relative;
    top:55%;
    height:72px;
    background:#000;
    color:#fff;
    font-size:16px;
    display:flex;
    align-items:center;
    
`;

function Main(){
    return(
        <HeaderInner>
           <HeaderInnerText>
               <div>
                   Health in
                   your pocket.
                <p style={{fontSize:"20px", fontWeight:"normal", lineHeight:"30px"}}>
                Functional gum and mints to energize, calm and focus you in the moment.
                </p>
                <Btn type="button"><a href="#" style={{color:"#fff", fontFamily:"Roboto", fontSize:"14px", fontWeight:"bold"}}>SHOP</a></Btn>
               </div>
           </HeaderInnerText>
           <Cookies className="Cookies">
                <span style={{paddingLeft:"29px", paddingRight:"20px"}}>We use cookies to enhance your experience on our website. By using our website, you agree to our privacy policy.</span>
                <span><a href="#" style={{color:"#fff"}}>Learn more</a></span>
                <Btn type="button"><a href="#" style={{background:"#fff", width:"167px", height:"40px", color:"#000", fontFamily:"Roboto", fontSize:"14px", fontWeight:"bold"}}>Got it</a></Btn>
            </Cookies>
        </HeaderInner>
    )
}

export default Main