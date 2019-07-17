import React, { Component } from 'react'

export class Default extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                        <div className="alert alert-danger my-5"> Page Not Found! </div>
                        </div>
                    </div>                    
                </div>               
            </div>
        )
    }
}

export default Default
