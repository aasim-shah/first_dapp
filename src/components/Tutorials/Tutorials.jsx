import "./Tutorials.css";
import download from "../../assets/download.jpg";
import aaa from "../../assets/aaa.png";

function Tutorials() {
  return (
    <>
      <div className="heading">
        <p className="heading-text">Top Free Tutorials</p>
      </div>
      <div className="card-container">

        <div className="card-inner-tut">
          <img src={download} alt="" className="card-img" />
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




        <div className="card-inner-tut">
          <img src={download} alt="" className="card-img" />
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


        <div className="card-inner-tut">
          <img src={download} alt="" className="card-img" />
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

export default Tutorials;
