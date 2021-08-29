
import Modal from "react-bootstrap/Modal";
import "../style/Login.css";
import React from "react";

const Login = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <Modal.Body>
            <div className="login">
                <div className="login-triangle"></div>
                <form className="login-container">
                    <div className="m-1">
                        <label for="exampleFormControlInput1" className="form-label">
                            <b className="text-white">Username</b>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="m-1">
                        <label for="exampleFormControlInput2" className="form-label">
                            <b className="text-white">Password</b>
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                        />
                    </div>
                    <Modal.Footer>
                        <button
                            onClick={showModal}
                            type="submit"
                            className="text-center rounded signin-button"
                        >
                            Sign In
            </button>
                        <Modal show={isOpen} onHide={hideModal} />
                        <button
                            className="text-center rounded signin-button"
                            onClick={hideModal}
                        >
                            Cancel
            </button>
                    </Modal.Footer>
                </form>
            </div>
        </Modal.Body>
    );
};

export default Login;