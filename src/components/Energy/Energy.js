import WaveTop from '../../assets/images/WaveTop.jpg'
import WaveDown from '../../assets/images/WaveDown.jpg'
import BookBlue from '../../assets/images/BookBlue.png'
import BookRed from '../../assets/images/BookRed.png'
import Shadow from '../../assets/images/Shadow.png'


function Energy(){
    return (
        <>
        <img src={WaveTop} style={{width:"100%", marginTop:"82px", marginBottom:"-5px"}}></img>
        <section className="Energy" style={{width:"100%", height:"1051px", background:"#005466", display:"flex", alignItems:"center"}}>
            <div style={{paddingTop:"134px"}}>
            <img src={BookBlue} style={{position:"absolute", zIndex:"600", left:"1%"}}></img>
            <img src={BookRed} style={{position:"absolute", left:"2%", zIndex:"500"}}></img>
            <img src={Shadow}></img>
            </div>
            <div style={{marginLeft:"172px", width:"100%", maxWidth:"406px", color:"#fff"}}>
                <h1 style={{fontSize:"55px"}}>Energy <br/> & Focus</h1>
                <p style={{lineHeight:"30px"}}>Specially formulated with natural caffeine, L-theanine and B-vitamins to sustain the mental endurance necessary to maintain your focus.*</p>
                <div style={{display:"flex"}}>
                    <span style={{display:"block", width:"20px", height:"20px", background:"#13C0D7", border:"1px solid #FFFFFF"}}></span>
                    <span style={{display:"block", marginLeft:"20px", width:"20px", height:"20px", background:"#D53F23", border:"1px solid #FFFFFF"}}></span>
                    <span style={{marginLeft:"20px"}}>Peppermint</span>
                </div>
                <button style={{display:"block", width:"260px", height:"52px", marginTop:"39px", border:"2px solid #F6F9E5", borderRadius:"2px", background:"none", cursor:"pointer"}}><a href="#" style={{color:"#fff", fontFamily:"'Roboto', sans-serif", fontSize:"14px"}}>SHOP</a></button>
            </div>
        </section>
        <img src={WaveDown} style={{width:"100%", marginTop:"82px", marginTop:"-5px"}}></img>
        </>
    )
}

export default Energy