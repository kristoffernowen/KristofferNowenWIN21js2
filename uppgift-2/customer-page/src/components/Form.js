import React from "react";


function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
    function validateThis(e) {
        if (e.target.value.length < 2) console.log('kort')
        else
        console.log('lång')
    }
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
        <input type="text" id="thisInput"onChange={validateThis} />
      </form>
    );
  }

  export default Form