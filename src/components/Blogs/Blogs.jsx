import "./Blogs.css";
import download from "../../assets/download.jpg";
function Blogs() {
  return (
    <>
      <div className="heading">
        <p className="heading-text">Recent Blogs</p>
      </div>
      <div className="blog-container">

        <div className="blog-inner">
          <div className="img">
            <img src={download} alt="" />
          </div>
          <div className="title">
            <p className="title-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              Soluta rerum,
            </p>
            <p className="title-decs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              optio atque earum veritatis excepturi dolorum dignissimos animi
              voluptates cupiditate ducimus. Recusandae sequi itaque possimus
              facere, accusamus doloribus quae corporis quibusdam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo libero nam
              error ipsam ut laborum cumque reprehenderit magnam ratione.
              Repellat!
            </p>
            <div className="blog-cta">
              <a href="" className="">
                Read More
              </a>
            </div>
          </div>
        </div>



        <div className="blog-inner">
          <div className="img">
            <img src={download} alt="" />
          </div>
          <div className="title">
            <p className="title-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              Soluta rerum,
            </p>
            <p className="title-decs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              optio atque earum veritatis excepturi dolorum dignissimos animi
              voluptates cupiditate ducimus. Recusandae sequi itaque possimus
              facere, accusamus doloribus quae corporis quibusdam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo libero nam
              error ipsam ut laborum cumque reprehenderit magnam ratione.
              Repellat!
            </p>
            <div className="blog-cta">
              <a href="" className="">
                Read More
              </a>
            </div>
          </div>
        </div>



        <div className="blog-inner">
          <div className="img">
            <img src={download} alt="" />
          </div>
          <div className="title">
            <p className="title-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              Soluta rerum,
            </p>
            <p className="title-decs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              optio atque earum veritatis excepturi dolorum dignissimos animi
              voluptates cupiditate ducimus. Recusandae sequi itaque possimus
              facere, accusamus doloribus quae corporis quibusdam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo libero nam
              error ipsam ut laborum cumque reprehenderit magnam ratione.
              Repellat!
            </p>
            <div className="blog-cta">
              <a href="" className="">
                Read More
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Blogs;
