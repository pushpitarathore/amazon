
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="p_header_top"></div>
        <div className="p_header_bottom"></div>
      </header>
      <div className="p_main position-relative">
        <div className="p_main1">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/slider/1.jpg" className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/2.jpg" className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/3.jpg" className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/4.jpg" className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/5.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/6.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/7.jpg" className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/8.jpg" className="d-block" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        <div className="p_main2 w-100 position-absolute"></div>
      </div>
      <footer> </footer>

    </div>
  );
}

export default App;
