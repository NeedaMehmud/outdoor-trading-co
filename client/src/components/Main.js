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
      <section className="container p-3">
        {/*<!-- Row 1. -->*/}
        <div className="row">
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={campImg} className="cat-image" alt="Two camping chairs beside a lake."/>
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={climbImg} className="cat-image" alt="The silhouette of a person scaling the side of a cliff wall."/>
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={hikeImg} className="cat-image" alt="A couple holding hands and walking towards the shore."/>
            </a>
          </div>
        </div>
        {/*<!-- Row 2. -->*/}
        <div className="row">
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={snowImg} className="cat-image" alt="A happy person skiing in full snow gear."/>
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={waterImg} className="cat-image" alt="A person paddling in water, surrounded by trees and mountains."/>
            </a>
          </div>
          <div className="col-lg-4 p-3">
            <a href="#">
              <img src={miscImg} className="cat-image" alt="A thermos, two book, a coffee mug, and camera."/>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
