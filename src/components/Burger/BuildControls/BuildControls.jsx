import React from "react";
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

export default function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => {
        return <BuildControl label={ctrl.label} key={ctrl.label} />;
      }) }
    </div>
  )
}