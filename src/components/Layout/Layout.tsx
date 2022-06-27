import React from "react";
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

interface Props {
    children: React.ReactNode;
}

const layout = (props: Props) => (
    <Aux>
    <Toolbar children={undefined} />
    <main className="Content">
        {props.children}
    </main>
    </Aux>
);

export default layout;