import React, { useState } from "react";

export default function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.itemName}</li>
    </div>
  );
}
