import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' 
import AppFrame from './../components/AppFrame'
import CustomersActions from './../components/CustomersActions'


class HomeContainer extends Component { 
    handleOnClick = () => {
        console.log("handleOnClick")
        this.props.history.push("/customers")
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header="Home"
                    body={
                        <div>
                            <img src={'/home.jpg'} alt="Client's List"/>
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Client's List</button> 
                            </CustomersActions>
                        </div>
                    }
                >
                </AppFrame> 
            </div>
        )
    }
}

export default withRouter(HomeContainer)