import { useState } from 'react';
import './send.css'

const Send = ()=>{

  const sendData=()=>{
    fetch('https://formx.herokuapp.com/message'
    ,{
      method:'POST',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body:{
        name:'new',
        mes:'new'
       }
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

  return(
    <>
      <div className="send-body">
        <input type="text" />
        <button onClick={sendData}>Send</button>
      </div>
    </>
  )
}

export default Send