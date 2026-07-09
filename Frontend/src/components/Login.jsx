import { useEffect, useState } from "react"

function Login(){
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("");
    return(
        <>
        <form action="Submit">
            <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} />
            <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} />
            <button type="submit">submit</button>
        </form>
        </>
    )
}
export default Login