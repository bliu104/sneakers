import React from "react"
import PopUp from "./PopUp"

export default {
  title: 'Popup',
  component: PopUp,
}

const button = () => {
  return <button>Click Me</button>;
};

const onClick = () => {
  console.log("butts")
}
const onClick1 = () => {
  console.log("butts1")
}

const stuff = [{
  onClick: onClick,
  item: "butts"
},
{
  onClick: onClick1,
  item: "poop"
}]

export const PopUpComp = () => {


  return (
    <PopUp component={button()} >
      {stuff}
    </PopUp >
  )
}