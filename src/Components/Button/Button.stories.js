import Button from ".";
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
