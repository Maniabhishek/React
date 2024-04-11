import React, {useEffect} from 'react'

const ChildContact = () => {
    useEffect(()=>{
        console.log("child useEffect from ChildContact");
    },[])
    console.log("2.3.rendering child ");
  return (
    <div>ChildContact</div>
  )
}

export default ChildContact;