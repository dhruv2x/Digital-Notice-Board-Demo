import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
          <a className="navbar-brand" href="#">
            My Digital Notice Board
          </a>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>

          <ul className="nav nav-pills">
            <nav class="navbar bg-body-tertiary">
              <form class="container-fluid justify-content-start">
                <button class="btn btn-outline-success me-2" type="button">
                  Login
                </button>
                <button class="btn btn-outline-success me-2" type="button">
                  How It works?
                </button>
                <button class="btn btn-outline-success me-2" type="button">
                  Contact Us
                </button>
                <button class="btn btn-outline-success me-2" type="button">
                  Support Us
                </button>
              </form>
            </nav>
          </ul>
        </nav>
        {/*Notice sample 1*/}
        <div className="row">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card" style={{ width: "20rem" }}>
              <img
                src="https://www.ncpamumbai.com/wp-content/uploads/2020/05/NCPA-Music-Library-Cropped-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Library Book Return Notice</h5>
                <p className="card-text">
                  All students of IT department are Informed to return Library
                  Books on Time.
                </p>
                <a href="#" className="btn btn-primary">
                  Read Full Notice
                </a>
              </div>
            </div>
          </div>

          {/*Notice sample 2*/}
          <div class="col-sm-3">
            <div className="card" style={{ width: "20rem" }}>
              <img
                src="https://research.collegeboard.org/media/2022-02/iStock_000021255451_Large-780x585.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Collage Fee Notice</h5>
                <p className="card-text">
                  Notice Regard Collage fees.
                </p>
                <a href="#" className="btn btn-primary">
                  Read Full Notice
                </a>
              </div>
            </div>
          </div>

          {/*Notice sample 3*/}
          <div class="col-sm-3">
            <div className="card" style={{ width: "20rem" }}>
              <img
                src="https://cache.careers360.mobi/media/presets/900X600/article_images/2021/5/21/shutterstock_1664708983.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Exam Fees Notice</h5>
                <p className="card-text">
                  Notice Regard Sem 5 exam fees.Pay Your end sem exam fees on
                  Time without fail.
                </p>
                <a href="#" className="btn btn-primary">
                  Read Full Notice
                </a>
              </div>
            </div>
          </div>

          {/*Notice sample 4*/}
          <div class="col-sm-2">
            <div className="card" style={{ width: "20rem" }}>
              <img
                src="https://i.pinimg.com/736x/9f/6a/e1/9f6ae149e085ad6cd08b5aab0f2c1847--school-s-middle-school.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Regarding seminar Notice</h5>
                <p className="card-text">
                  All Students are informed to attend seminar on moral values on 21st Feb conducted by professionals.
                </p>
                <a href="#" className="btn btn-primary">
                  Read Full Notice
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
