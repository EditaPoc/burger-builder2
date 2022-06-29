import React, {Component} from "react";
import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

interface State {
    showSideDrawer: boolean;
}
interface Props {
    children: React.ReactNode;
}

class Layout extends Component<Props> {
    state: State = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(( prevState: State) => { 
            return {showSideDrawer: !prevState.showSideDrawer};
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