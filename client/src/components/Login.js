import Modal from "react-bootstrap/Modal";
import "../style/Login.css";
import React from "react";

const Login = () => {
    return (
        // <form>
        //     <div className="form-group">
        //         <label>Email address</label>
        //         <input type="email" className="form-control" placeholder="Enter email" />
        //     </div>

        //     <div className="form-group">
        //         <label>Password</label>
        //         <input type="password" className="form-control" placeholder="Enter password" />
        //     </div>

        //     <div className="form-group">
        //         <div className="custom-control custom-checkbox">
        //             <input type="checkbox" className="custom-control-input" id="customCheck1" />
        //             <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        //         </div>
        //     </div>
        //     <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        //         <button className="btn btn-secondary" type="submit">Submit</button>
        //         <p className="forgot-password text-right">
        //             Forgot <a href="#">password?</a>
        //         </p>
        //     </div>
        // </form>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-secondary" >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Login;
