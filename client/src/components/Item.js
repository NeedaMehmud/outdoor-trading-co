import categoryImg from "../assets/images/category.png";
import "../style/Item.css";

function Results() {
    return (
        <section class="container p-3">
            <div class="row">
                <div class="col-lg-5 p-3">
                    <img src="client\src\assets\images\category.png" class="img-fluid" alt="Product image">
                </div>
                <div class="col-lg-7 p-3">
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title text-center">Product Name</h5>
                    <p class="card-text">Product Description.</p>
                </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Condition:</b></li>
                <li class="list-group-item"><b>Distance:</b></li>
              </ul>
              <div class="card-body">
                <a href="#" class="btn btn-primary">Request</a>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
    
export default Item;