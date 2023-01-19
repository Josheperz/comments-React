import '../scss/Button.scss';


export const Button = ({onClickBtn,value,theme}) => {
  return (
    <button className={"btn"+theme} onClick={onClickBtn}>{value}</button>
  )
}

 