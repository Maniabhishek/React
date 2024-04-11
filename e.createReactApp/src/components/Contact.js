import {useEffect} from 'react'
import ChildContact from './ChildContact'

const Contact = () => {
    useEffect(()=>{
        console.log("parent contact useEffect");
    },[])
    useEffect(()=> {
        console.log('2. parent useEffect')
    },[])
    console.log("1.rendering parent");
    return <div>
        <ChildContact />
        <ChildContact />
        {/* <ChildContact /> */}
    </div>
}
export default Contact;


/**
 * rendering parent
 * 
 */
