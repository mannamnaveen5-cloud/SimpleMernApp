import {useState} from "react"

function Contact(){
    let [name,setName]= useState("")
    let [age,setAge]= useState(18)
    let [phno,setPhone]=useState("")

    let RegisternData=(event)=>{
        event.preventData();
        //used to collect all the data from  the form
        console.log(name);
        console.log(age);

    }

 return(
    <div>
        <h1>Contact page </h1>
<form onSubmit={RegisterData}>
<input type = "text" value ={name} onChange={(event)=>setName(event.target.value)} placeholder = "Enter your name"></input><br/>
<input type = "number"value = {age} onChange={(e)=>setAge(e.target.value)}placeholder = "Enter your age"></input><br/>
<input type = "text"  value={phno} onChange={(e)=>setPhone(e.target.value)} placeholder = "Enter your phone no"></input><br/>
<button>Submit</button>
</form>
<h3>{name}</h3>
<h3>{age}</h3>
<h3>{phno}</h3>




    </div>
 )
}
export default Contact
