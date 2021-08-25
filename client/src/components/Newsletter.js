import "../style/Newsletter.css";

function Newsletter() {
  return (
    <section class="container-fluid">
      <div class="row">
        <div class="col form-img"></div>
        <div class="col-lg-4 p-5 form">
          <h3 class="text-center">Sign up for our newsletter</h3>
          <p class="text-center">
            Get the latest updates from our team and the latest products from
            our partners.
          </p>
          <div class="m-1">
            <label for="exampleFormControlInput1" class="form-label">
              <b>Name</b>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Bear Grylls"
            />
          </div>
          <div class="m-1">
            <label for="exampleFormControlInput2" class="form-label">
              <b>Email address</b>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>
          <div class="m-1">
            <button type="submit" class="btn btn-tertiary">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
