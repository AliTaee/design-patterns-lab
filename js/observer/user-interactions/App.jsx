import React from "react";
import { Button, Switch, FormControlLabel } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import observable from "../observable";

function handleClick() {
  observable.notify("User clicked button!");
}

function handleToggle() {
  observable.notify("User toggled switch!");
}

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data, {
    closeButton: true,
    autoClose: 3000
  });
}

observable.subscribe(logger);
observable.subscribe(toastify);

// Example by 
// @link https://www.patterns.dev/vanilla/observer-pattern
export default function App() {
  return (
    <>
      <Button variant="contained" onClick={handleClick} style={{ marginRight: '1em' }}>
        Click me!
      </Button>
      <FormControlLabel
        control={<Switch name="" onChange={handleToggle} />}
        label="Toggle me!"
      />
      <ToastContainer />
    </>
  );
}
