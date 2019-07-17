import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className="row justify-content-center">
            <div className="col-md-5 col-md-offset-3">
              <div className="card my-3">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="">User Name</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Help text</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor=""> Password</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Help text</small>
                    </div>
                    <button className='btn btn-primary btn-sm' type='submit'>Login</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Login
