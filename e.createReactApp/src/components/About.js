import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils.js/userContext'


class About extends React.Component{
    constructor(props){
        super(props)
        console.log('parent contructor')
        this.state = {
            username: "abhishek",
            company:"",
            location:""
        }
    }

    async componentDidMount(){
        console.log('parent componentDidMount');
        const data = await fetch("https://api.github.com/users/maniabhishek")
        const res = await data.json()
        this.setState({
            username: res.login,
            location: res.location
        })
    }
    debugger;
    render(){
        console.log('parent render')
        return <div>
                <UserContext.Consumer>
                    {(data)=><div>{`here is the new user: ${data.loggedInUser}`}</div>}
                </UserContext.Consumer>
                <h1>About</h1>
                <h1>This is about page</h1>
                <User />
                <UserClass name={this.state.username} mobile={'788993738'} location={this.state.location}/>
                <UserClass name={'mani'} mobile={'788993738'} location={this.state.location}/>
            </div>
    }
}

// const About = () => {
//   return (
//     <div>
//         <h1>About</h1>
//         <h1>This is about page</h1>
//         <User />
//         <UserClass name={'abc'} mobile={'788993738'} location={'arabian sea'}/>
//     </div>
//   )
// }

export default About