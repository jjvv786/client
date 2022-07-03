import './msg.css'

const Msg=(props)=>{
  return(
    <>
      <div className="mess">
        <div className='mess-name'>
          {props.name}
        </div>
        <div>
          {props.mes}
        </div>
      </div>
    </>
  )
}

export default Msg