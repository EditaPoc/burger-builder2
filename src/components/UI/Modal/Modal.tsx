import React, { MouseEventHandler } from "react";
import './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

interface Props {
    show: boolean;
    children: React.ReactNode;
    modalClosed: MouseEventHandler;
}

const Modal = (props: Props) => (
    <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className="Modal"
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
    </Aux>
);


export default Modal;