import "./homecss.css";

export default function Profilecard(){
    return(
        <div class="outercontainer">
            <div class="image-container">
            <img src="https://live.staticflickr.com/3678/8986672784_bbf77b2aeb_b.jpg" width="100%" height="100%" alt=""/>
                <div class="floating-div"><img alt="" src="https://cdn-icons-png.flaticon.com/512/1224/1224008.png" width="70px" height="70px"/></div>
            </div>
            
            <div class="data-container">
                {/* <h1>User_0111...........#0001</h1> */}
                <div class="stat">
                <div class="staticon"></div><div class="statbar"><div class="w3-grey" style={{width: "50%" ,height:"20px",backgroundColor: "brown",borderRight:"3px solid black"}}></div></div>
                </div>

                <div class="stat">
                <div class="staticon"></div><div class="statbar"><div class="w3-grey" style={{width: "62%" ,height:"20px",backgroundColor: "brown",borderRight:"3px solid black"}}></div></div>
                </div>

                <div class="stat"> 
                <div class="staticon"></div><div class="statbar"><div class="w3-grey" style={{width: "40%" ,height:"20px",backgroundColor: "brown",borderRight:"3px solid black"}}></div></div>
                </div>

                <div class="stat">
                    <div class="staticon"></div><div class="statbar"><div class="w3-grey" style={{width: "20%" ,height:"20px",backgroundColor: "brown",borderRight:"3px solid black"}}></div></div>
                </div>
                
            </div>
        </div>
    )
}