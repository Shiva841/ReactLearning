import React from 'react'
import ReactDOM from 'react-dom'
import { FaPlus } from 'react-icons/fa'
import "./App.css"

const text = "Add";
const reactElement = (<button className='addButton cta'><FaPlus />{" "}<span style={{ fontWeight: " bold" }}>{text}</span></button>)
// const reactElement = React.createElement("button", { className: "addButton cta" }, text);
const domElement = document.getElementById("root");

ReactDOM.render(reactElement, domElement)