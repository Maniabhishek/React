import { useEffect } from "react"

const User = () => {
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            console.log('user component')
        }, 1000)

        return ()=> {
            clearInterval(intervalID)
        }
    })

    return <div className="user-card">
        <h3>Name: ABC</h3>
        <h3>Location: Pacific Ocean</h3>
        <h3>Mobile: 903383939</h3>
    </div>
}

export default User
