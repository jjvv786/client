// import './txtarea.css'
import Msg from './Msg'
import { useState,useEffect } from 'react'

const TxtArea=()=>{


  const[data,setData] = useState([])

  const getData=()=>{
    fetch('https://formx.herokuapp.com/message'
    ,{
      method:'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(()=>{
    setTimeout( ()=>{ getData() }, 700);
  },)

  return(
    <>
      <div className="text-area">
        <div className="texts">
          {
            data.map( (a)=>{
              return(
              <Msg name={a.name} mes={a.message}/>
              )
            } )
          }
        </div>
      </div>
    </>
  )
}

export default TxtArea