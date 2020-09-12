import React from "react";
import "./Form.css";
import { TextField } from "@material-ui/core";

function form() {
  return (
    <div className="body">
      <div className="card">
        <div className="content__container">
          <h3>Sign In</h3>

          <div className="field__container">
            <TextField
              className="textField"
              required
              id="outlined-required"
              label="Username"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default form;
