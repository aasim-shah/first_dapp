import "./Courses.css";
import download from "../../assets/download.jpg";
import aaa from "../../assets/aaa.png";

function Courses() {
  return (
    <>
      <div className="heading">
        <p className="heading-text">Top Free Courses</p>
      </div>
      <div className="card-container">
        <div className="card-inner">
          <img src={aaa} alt="" className="card-img" />
          <small className="free-courses">Free Courses</small>
          <div className="card-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            magni! Exercitationem, laborum.
          </div>
          <div className="cta">
            <a href="#" className="cta-btn">
              Join Now
            </a>
          </div>
        </div>


        <div className="card-inner">
          <img src={aaa} alt="" className="card-img" />
          <small className="free-courses">Free Courses</small>
          <div className="card-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            magni! Exercitationem, laborum.
          </div>
          <div className="cta">
            <a href="#" className="cta-btn">
              Join Now
            </a>
          </div>
        </div>


        <div className="card-inner">
          <img src={aaa} alt="" className="card-img" />
          <small className="free-courses">Free Courses</small>
          <div className="card-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            magni! Exercitationem, laborum.
          </div>
          <div className="cta">
            <a href="#" className="cta-btn">
              Join Now
            </a>
          </div>
        </div>


        <div className="card-inner">
          <img src={aaa} alt="" className="card-img" />
          <small className="free-courses">Free Courses</small>
          <div className="card-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            magni! Exercitationem, laborum.
          </div>
          <div className="cta">
            <a href="#" className="cta-btn">
              Join Now
            </a>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Courses;
