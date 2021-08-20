import React from "react";
import { MdSend } from "react-icons/md";
const Form = () => {
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
            placeholder="e.g. rent"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="$200"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Submit
        <MdSend className="btn-icon" />
      </button>
    </from>
  );
};

export default Form;
