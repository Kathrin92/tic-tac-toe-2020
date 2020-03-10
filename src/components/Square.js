import React from "react";

export default function Square(props) {
  // const [value, setValue] = React.useState(null);
  // arey destructure. Konstante hate zwei werte. setValue= funktion welche meinen wert (value) ändert
  return (
    <button className="square" onClick={props.onChlick}>
      {props.value}
    </button>
    // '=>' nicht vergessen
  );
}
