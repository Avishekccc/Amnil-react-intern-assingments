import "../customButton/style.css"

type ButtonPropsType = {
    type: "submit" ;
    variant: string;
  btnText: string;
}

const CustomButton = ({type,variant,btnText}:ButtonPropsType) => {
  return (
      <div>
          <button type={type} className={variant} >{ btnText}</button>
    </div>
  )
}

export default CustomButton