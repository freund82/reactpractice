import BigBookYellow from '../../assets/images/BigBookYellow.png'
import SmallBookYellow from '../../assets/images/SmallBookYellow.png'
import Shadow from '../../assets/images/Shadow.png'


function Calm(){
    return (
        <>
        <section className="Calm" style={{width:"100%", height:"1051px", background:"#FED9BF", display:"flex", alignItems:"center", marginTop:"-5px"}}>
            <div style={{marginLeft:"172px", width:"100%", maxWidth:"406px", color:"#C47B59"}}>
                <h1 style={{fontSize:"55px"}}>Calm <br/> & Clarity</h1>
                <p style={{lineHeight:"30px"}}>Expertly developed with GABA, vitamin D3, and L-theanine to optimize composure and clarity of mind.*</p>
                <div style={{display:"flex"}}>
                    <span style={{display:"block", width:"20px", height:"20px", background:"#C47B59", border:"1px solid #FFFFFF"}}></span>
                    <span style={{display:"block", marginLeft:"20px", width:"20px", height:"20px", background:"#EF9632", border:"1px solid #FFFFFF"}}></span>
                    <span style={{marginLeft:"20px"}}>Ginger Chai</span>
                </div>
                <button style={{display:"block", width:"260px", height:"52px", marginTop:"39px", border:"2px solid #C47B59", borderRadius:"2px", background:"none", cursor:"pointer"}}><a href="#" style={{color:"#C47B59", fontFamily:"'Roboto', sans-serif", fontSize:"14px"}}>SHOP</a></button>
            </div>
            <div style={{paddingTop:"134px"}}>
                <img src={BigBookYellow} style={{position:"absolute", zIndex:"600", right:"10%"}}></img>
                <img src={SmallBookYellow} style={{position:"absolute", right:"5.5%", zIndex:"500"}}></img>
                <img src={Shadow}></img>
            </div>
        </section>
        </>
    )
}

export default Calm