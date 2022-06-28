import React, {Component} from "react";
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

interface Props {
    children: React.ReactNode;
    showSideDrawer: boolean;
    drawerToggleClicked: () => void;
}

class Layout extends React.Component<Props> {
    state= {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(( prevState) => { 
            return {showSideDrawer: !this.state.showSideDrawer}
        });
    }
        render() {
            return (
                <Aux>
                <Toolbar  drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
                </Aux>
        )
    }
} 

export default Layout;