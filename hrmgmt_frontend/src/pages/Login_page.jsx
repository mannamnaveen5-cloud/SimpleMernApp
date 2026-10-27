import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login_page() {
    let[email,setemail] = useState("")
    let[password,setPassword] = useState("")
    let navigate = useNavigate()
    let handleLogin_page = async (event)=>{
        event.preventDefault()
        if(email=="admin@gmail.com" && password == "admin"){
            navigate("/AdminHome")
        }
        else{
            let req=await fetch ("http://localhost:3000/api/emp/login",
                {
                method:"POST",
                body:JSON.stringify({email:email,password:password})
                })
        }
        let data=req.json()
        conosole.log(data)
    }
    return(<div>
        <form onSubmit={handleLogin_page}>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/><br></br>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" /><br></br>
            <button type = "Submit"> Login </button>
        </form>
    </div>)
}
export default Login_page