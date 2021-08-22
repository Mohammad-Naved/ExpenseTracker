import React from "react";
import { MdSend } from "react-icons/md";
const Form = (props) => {
  return (
    <from>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g rent"
            value={props.charge}
            onChange={props.handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="$200"
            value={props.amount}
            onChange={props.handleAmount}
          />
        </div>
      </div>
      <button type="submit" onClick={props.handleSubmit} className="btn">
        {props.edit === true ? "Edit" : "Submit"}
        <MdSend className="btn-icon" />
      </button>
    </from>
  );
};

export default Form;
