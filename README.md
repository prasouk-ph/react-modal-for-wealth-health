# react-modal-for-wealth-health

A simple modal to display a message with green buttons.

## Installation

To install it, you need to use npm in your project :
`npm install react-modal-for-wealth-health`

## Example

To use it, you need to import the component and react useState, after that set the following attributes :
isActive
onClose
message

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
      <Modal isActive={IsActive} onClose={closeModal} message={modalMessage} />
    </div>
  );
}
export default App;
```

## Authors

-   Prasouk
