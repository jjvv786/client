import { useState } from 'react';
import './send.css'

const Send = ()=>{

  const[me,setMe]=useState('')
  const[name,setName]=useState('')

  const sendData=(event)=>{
    event.preventDefault();
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
    setMe('')
  }

  const getMe = (e)=>{
    setMe(e.target.value)
    console.log(me)
  }

  const getName = (e)=>{
    setName(e.target.value)
  }

  return(
    <>
      <form className="send-body">
        <input className='input-name' type="text" name='name' value={name} onChange={getName}/>
        <input className='mes-input' type="text" name='mes' value={me} onChange={getMe}/>
        <button onClick={sendData}>Send</button>
      </form>
    </>
  )
}

export default Send