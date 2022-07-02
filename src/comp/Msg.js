import './msg.css'

const Msg=(props)=>{
  return(
    <>
      <div className="mess">
        he {props.name} {props.mes}
      </div>
    </>
  )
}

export default Msg