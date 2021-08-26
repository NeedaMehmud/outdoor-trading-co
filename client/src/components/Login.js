function Login() {
    return (
        <div class="login">
            <div class="login-triangle"></div>
            <form class="login-container">
                <div class="m-1">
                    <label for="exampleFormControlInput1" class="form-label">
                        <b class="text-black">Username</b>
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="m-1">
                    <label for="exampleFormControlInput2" class="form-label">
                        <b class="text-black">Password</b>
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Password" />
                </div>
                <div class="m-1">
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;