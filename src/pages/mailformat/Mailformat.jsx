import React from 'react'

const Mailformat = () => {
  return (
   <div>
     <div style={{boxShadow:"1px 1px 2px 2px #0e46a139", margin:"20px", padding:"30px", borderRadius:"5px", position:""}}>
        <h5 style={{borderBottom:"1px solid gray"}}>Payment Notification</h5>
        <h6 style={{fontSize:"18px"}}>This user, <span style={{color:"green", fontSize:"20px"}}>Jawad</span> make a payment of <br /> <span style={{color:"green", fontSize:"22px"}}>₦ 100</span> <br /> This user is now a eligble member with grade C</h6>
        <button style={{border:"none", backgroundColor:"#0E47A1", color:"white", borderRadius:"5px", padding:"10px"}}>View payment</button>
    </div>

    <div style={{boxShadow:"1px 1px 2px 2px #0e46a139", margin:"20px", padding:"30px", borderRadius:"5px", position:""}}>
        <h5 style={{borderBottom:"1px solid gray"}}>Booking Notification</h5>
        <h6 style={{fontSize:"18px"}}>This user, <span style={{color:"green", fontSize:"20px"}}>Jawad</span> books <br /> <span style={{color:"green", fontSize:"22px"}}>3 cars</span> <br />They are waiting to get response from you, go and give them a time</h6>
        <button style={{border:"none", backgroundColor:"#0E47A1", color:"white", borderRadius:"5px", padding:"10px"}}>Give them response</button>
    </div>
   </div>
  )
}

export default Mailformat