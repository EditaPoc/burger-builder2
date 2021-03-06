import React, { Component, MouseEventHandler } from "react";
import './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

interface Props {
    show?: boolean  | undefined | null;
    children: React.ReactNode;
    modalClosed: MouseEventHandler;
}

class Modal extends Component<Props> {

    shouldComponentUpdate(nextProps: Props, nextState: Props) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children; 
    }

    componentDidUpdate () {
        console.log('[Modal] WillUpdate');
    }
    render() {
        return(
            <Aux>
    <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    <div className="Modal"
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        }}>
        {this.props.children}
    </div>
    </Aux>
        )
    }
}


export default Modal;