import React from "react";
import './index.css';

const useSSNFields = () => {
  const [ssnValues, setValue] = React.useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
    ssn4: ""
  });

  return {
    handleChange: e => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      
      if (value.length >= maxLength) {
        
        if (parseInt(fieldIndex, 10) < 4) {
          
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
          );

          
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value
      });
    }
  };
};

const SSNField = () => {
  const { handleChange } = useSSNFields();

  return (
    <>
    <div className="body">
        <form className = "form">
<h1 className="cardName">Card-No :</h1>
<div className="container">
      <input
        type="text"
        name="ssn-1"
        maxLength={4}
        onChange={handleChange} />
      <input
        type="text"
        name="ssn-2"
        maxLength={4}
        onChange={handleChange} />
      <input
        type="text"
        name="ssn-3"
        maxLength={4}
        onChange={handleChange} />
         <input
        type="text"
        name="ssn-4"
        maxLength={4}
        onChange={handleChange} />
         </div>
</form>
<div className="btn">
<button 
type = 'submit'
className="button">
    confirm
</button>
</div>

        </div>
    </>
  );
};
export default SSNField;