import categoryImg from "../assets/images/category.png";

function Main() {
  return (
    <main>
      <section class="container">
        {/*<!-- Row 1. -->*/}
        <div class="row">
          <div class="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
          <div class="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
          <div class="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
        </div>
        {/*<!-- Row 2. -->*/}
        <div class="row">
          <div class="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
          <div class="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
          <div class="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
