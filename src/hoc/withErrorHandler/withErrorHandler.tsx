
import { AxiosInstance } from "axios";
import React, {Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";


const withErrorHandler = (WrappedComponent: React.ElementType, axios: AxiosInstance) => {
    return class extends Component {
        state = {
            error: null,
            message: ''    
        }
    
       
            reqInterceptor!: number;
            resInterceptor!: number;
     
        componentDidMount () {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        
        render () {
            return (
                <Aux>
                    <Modal show={this.state.error}
                           modalClosed={this.errorConfirmedHandler}>
                             Error! Error! something went wrong!!!
                        {/* {this.state.error ? this.state.error.message : null } */}
                       
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
                
            );
        }
    }
}   

//https://www.tutorialsteacher.com/typescript/typescript-never

export default withErrorHandler;