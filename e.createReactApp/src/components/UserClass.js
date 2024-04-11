import React from 'react';
import UserContext from '../utils.js/userContext';

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log('child constructor', this.props.name)
        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        console.log(this.props.name, ' child componentDidMount');
        // this.timer = setInterval(()=>{
        //     console.log(this.props.name," this is componentDidMount");
        // },1000)
    }

    componentDidUpdate(prevProps, prevState){

    }

    componentWillUnmount(){
        // clearInterval(this.timer)
    }

    render(){
        console.log(this.props.name,' user render called')
        const {name, location, mobile} = this.props
        return <div className='user-card'>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Mobile: {mobile}</h3>
            <h3>{this.state.count}</h3>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1
                })
            }}>Increment</button>
            {/* <UserContext.Consumer>
                {(data)=>{console.log('')}}
            </UserContext.Consumer> */}
        </div>
    }
}

export default UserClass
