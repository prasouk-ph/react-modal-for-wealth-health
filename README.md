# react-modal-for-wealth-health

A simple modal to display a message with green buttons.

## Installation

To install it, you need to use npm in your project :
`npm install react-modal-for-wealth-health`

## Example

To use it, you need to import the component and react useState, after that set the required props:

-   isActive:
    You have to put a function that will set modalIsActive true

-   onClose:
    You have to put a function that will set modalIsActive false

-   message:
    You have to put a function or a string that will be display in the modal

There are optionals props to customize the style:

-   contentClassName
-   textClassName
-   buttonsClassName
-   footerClassName

For example, in your component :

```
import React, { useState } from "react";
import Modal from 'react-modal-for-wealth-health'

function App() {

const [IsActive, setIsActive] = useState(false);
const modalMessage = "Your message !"

function openModal() {
    setIsActive(true);
  }

function closeModal() {
  setIsActive(false);
}

  return (
    <div>
      <button onClick={openModal}>Show modal</button>
      <Modal isActive={IsActive} onClose={closeModal} message={modalMessage} textClassName="foo" />
    </div>
  );
}
export default App;
```

## Authors

-   Prasouk
