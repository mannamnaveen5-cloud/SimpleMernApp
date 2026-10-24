import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login_page() {
    let[emailid,setEmailId] = useState("")
    let[password,setPassword] = useState("")
    let navigate = useNavigate()
    let handleLogin_page = (event)=>{
        event.preventDefault()
        if(emailid=="admin@gmail.com" && password == "admin"){
            navigate("/userHome")
        }
        else{
            console.log("Login Failed")
        }
    }
    return(<div>
        <form onSubmit={handleLogin_page}>
            <input type="text" value={emailid} onChange={(e)=>setEmailId(e.target.value)} placeholder="Enter EmailId"/><br></br>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" /><br></br>
            <button type = "Submit"> Login </button>
        </form>
    </div>)
}
export default Login_page