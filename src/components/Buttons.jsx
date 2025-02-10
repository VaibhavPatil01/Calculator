function Buttons({onClickHandler}){

    let buttons = ['0','1','2','+','3','4','5','-','6','7','8','*','9','.','=','/','C','AC']

    return <div className="buttons-container">
    {buttons.map(btn => <button className="btn" onClick={()=>onClickHandler(btn)}>{btn}</button>)}
  </div>
}

export default Buttons; 