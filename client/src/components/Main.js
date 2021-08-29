import campImg from "../assets/images/camping.png";
import climbImg from "../assets/images/climbing.png";
import hikeImg from "../assets/images/hiking.png";
import snowImg from "../assets/images/snow.png";
import waterImg from "../assets/images/water.png";
import miscImg from "../assets/images/tent-and-equipment.png";

function Main() {
  return (
    <main>
      <section className="container">
        {/*<!-- Row 1. -->*/}
        <div className="row">
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={campImg} width="100%" height="350" />
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={climbImg} width="100%" height="350" />
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={hikeImg} width="100%" height="350" />
            </a>
          </div>
        </div>
        {/*<!-- Row 2. -->*/}
        <div className="row">
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={snowImg} width="100%" height="350" />
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={waterImg} width="100%" height="350" />
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={miscImg} width="100%" height="350" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
