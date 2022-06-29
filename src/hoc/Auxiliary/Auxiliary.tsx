import React from "react";

export interface Props {
    children: React.ReactNode;
}
const Aux: React.FC<Props> = (props) => {
    return <>{props.children}</>
};

export default Aux;