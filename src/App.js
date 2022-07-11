
import './App.css';
import {useState} from "react";

const App = () => {
    const [inputPeso, setInputPeso] = useState("");

    const onInputPesoChange = ({target}) => {
      setInputPeso(target.value);
    }

    const checkInputPeso = (inputPeso) => {
        if (inputPeso > 60) {
           return  `El peso es de ${inputPeso} y por tanto el precio del envío es 10€`;
        }else if (inputPeso <= 60 && inputPeso >= 25) {
            return  `El peso es de ${inputPeso} y por tanto el precio del envío es 6€`;
        }
    }
  return (
    <div className="App">
     <form
         // onSubmit={(event) => onSubmit(event)}
     >
       <input type={"number"} name={"peso"}
              value={inputPeso}
              onChange={  (event) => onInputPesoChange(event)}
       />
     </form>
        <h3>{checkInputPeso(inputPeso)}</h3>
    </div>
  );
}

export default App;
