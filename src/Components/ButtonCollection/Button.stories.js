import Button from "./Button/index";
import CustomButton from "./ReflectiveButton"
import React, { useState } from "react";

export default {
  title: "Button",
  component: Button,
};

export const ButtonDefault = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)} text="Click Me" />
      {open && "On"}
    </>
  );
};

export const ButtonCustom = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CustomButton name={"START"} onClick={() => setOpen(!open)} />
      {open && "On"}
    </>
  );
};
