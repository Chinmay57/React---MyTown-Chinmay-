import emailTickIcon from './assets/Frame.png'
function EmailNotReg(){
  return(
    <div>
    <div className="page-container">
    <div className="Message_Card">
      <div className="Inside_Box">
        <img src={emailTickIcon} alt="EmailTick" className="icon" />
        <h4>Email Not Registered</h4>
        <h5>Please Sign Up</h5>
        <button className="SignUp-btn">Sign Up</button>
      </div>
    </div>
    </div>
    </div>
  )
};
export default EmailNotReg