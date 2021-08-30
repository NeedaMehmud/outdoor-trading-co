import campImg from "../assets/images/camping.png";
import climbImg from "../assets/images/climbing.png";
import hikeImg from "../assets/images/hiking.png";
import snowImg from "../assets/images/snow.png";
import waterImg from "../assets/images/water.png";
import miscImg from "../assets/images/tent-and-equipment.png";
import "../style/Main.css";

function Main() {
  return (
    <main>
      <section className="container">
        {/*<!-- Row 1. -->*/}
        <div className="row">
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={campImg} className="cat-image" />
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={climbImg} className="cat-image" />
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={hikeImg} className="cat-image" />
            </a>
          </div>
        </div>
        {/*<!-- Row 2. -->*/}
        <div className="row">
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={snowImg} className="cat-image" />
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={waterImg} className="cat-image" />
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={miscImg} className="cat-image" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
