
import Rectangle from '../../assets/images/Rectangle.png'



function Main(){
    return(
        <>
        <section style={{height:"238px", background:"#F0FAF7"}}></section>
        <section>
            <div style={{height:"607px", display:"flex", alignItems:"center"}}>
            <div style={{width:"100%", maxWidth:"633px", margin:"0 auto"}}>
            <div style={{textAlign:"center", fontSize:"40px", fontWeight:"bold"}}>We get the mental game</div>
            <p style={{fontSize:"20px", lineHeight:"31px", textAlign:"center"}}>That’s why we create products to help shift your mindset with ease and flow. Our functional gum and mints are shortcuts to the ideal state of mind, delivering just the right amount of what you need to energize, calm and focus your mind in the moment.</p>
            <img src={Rectangle} style={{width:"100%"}}></img>
            <div style={{fontSize:"40px", fontWeight:"bold", textAlign:"center"}}>Shop by function</div>
            <p style={{textAlign:"center", fontSize:"16px"}}>Find the right products for any situation.</p>
            </div>
            </div>
            <div style={{width:"100%", maxWidth:"918px", display:"flex", flexWrap:"wrap", justifyContent:"space-between", margin:"0 auto"}}>
                <div style={{width:"100%", maxWidth:"290px", height:"250px", background:"#005466"}}>
                <i className="fas fa-spinner" style={{display:"block", color:"#fff", marginTop:"40px", marginLeft:"auto", textAlign:"center", fontSize:"30px"}}></i>
                <div style={{marginTop:"37px", color:"#fff", textAlign:"center"}}>ENERGY & FOCUS</div>
                <button className="btnSmall" type="button">SHOP NOW</button>
                </div>
            <div style={{width:"100%", maxWidth:"290px", height:"250px", background:"#F7D8BF"}}>
                <i className="fas fa-rainbow" style={{display:"block", color:"#C47B59", marginTop:"40px", marginLeft:"auto", textAlign:"center", fontSize:"30px"}}></i>
                <div style={{marginTop:"37px", color:"#C47B59", textAlign:"center"}}>CALM & CLARITY</div>
                <button className="btnSmall" type="button">SHOP NOW</button>
            </div>
                <div style={{width:"100%", maxWidth:"290px", height:"250px", background:"#F1FAF6"}}>
                    <div style={{textAlign:"center"}}>
                    <i className="fas fa-spinner" style={{display:"inline-block", color:"#64BAA1", marginTop:"40px", marginRight:"10px", textAlign:"center", fontSize:"30px", }}></i>
                    <i className="fas fa-rainbow" style={{display:"inline-block", color:"#64BAA1", marginTop:"40px", marginLeft:"auto", textAlign:"center", fontSize:"30px"}}></i>
                    </div>
                <div style={{marginTop:"37px", color:"#64BAA1", textAlign:"center"}}>CALM & CLARITY</div>
                <button className="btnSmall" type="button">SHOP NOW</button>
            </div>
            </div>
        </section>
        </>
    )
}

export default Main