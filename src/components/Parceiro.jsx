export default function paceiro(props){
  return(
    <div className="parceiro">
      <img src={props.picture} alt="foto do parceiro" className="parceiro__picture"/>
      <p className="parceiro__name">{props.username}</p>
    </div>
  )

}
