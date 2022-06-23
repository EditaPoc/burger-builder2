import React from "react";
import './Modal.css';

interface Props {
    children: React.ReactNode;
}

const Modal = (props: Props) => (
    <div className="Modal">
        {props.children}
    </div>

);


export default Modal;