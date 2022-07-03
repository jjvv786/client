import { useState } from 'react';
// import './send.css'

const Send = ()=>{

  const[me,setMe]=useState('')

  const sendData=()=>{
    fetch('https://formx.herokuapp.com/message'
    ,{
      method:'POST',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body:JSON.stringify({
        name:'new',
        mes:me
       })
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }

  const getMe = (e)=>{
    setMe(e.target.value)
    console.log(me)
  }

  return(
    <>
      <div className="send-body">
        <input type="text" name='mes' value={me} onChange={getMe}/>
        <button onClick={sendData}>Send</button>
      </div>
    </>
  )
}

export default Send