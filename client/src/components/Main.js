import categoryImg from "../assets/images/category.png";

function Main() {
  return (
    <main>
      <section className="container">
        {/*<!-- Row 1. -->*/}
        <div className="row">
          <div className="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
          <div className="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
          <div className="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
        </div>
        {/*<!-- Row 2. -->*/}
        <div className="row">
          <div className="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
          <div className="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
          <div className="col-lg-4 p-3">
            <img src={categoryImg} width="100%" height="350" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
