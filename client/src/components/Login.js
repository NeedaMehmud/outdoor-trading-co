import Modal from "react-bootstrap/Modal";
import "../style/SignIn.css";
import React from "react";



function Login() {
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {

        setIsOpen(true);

    };
    const hideModal = () => {

        setIsOpen(false);

    };
    return (
        <Modal.Body>
            <div class="login">
                <div class="login-triangle"></div>
                <form class="login-container">
                    <div class="m-1">
                        <label for="exampleFormControlInput1" class="form-label">
                            <b class="text-white">Username</b>
                        </label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="m-1">
                        <label for="exampleFormControlInput2" class="form-label">
                            <b class="text-white">Password</b>
                        </label>
                        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Password" />
                    </div>
                    <Modal.Footer>
                        <button onClick={showModal} type="submit" class="text-center rounded signin-button">Sign In</button>
                        <Modal show={isOpen} onHide={hideModal} />
                        <button class="text-center rounded signin-button" onClick={hideModal}>Cancel</button>
                    </Modal.Footer>
                </form>
            </div>
        </Modal.Body>
    );
};

export default Login;