import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="main-container">
        <div className="hero-l">
          <div className="wrapper">
            <div className="welcome">
              welcome to CodeWithAasim 
            </div>
            <div className="bio">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque non voluptatum recusandae reprehenderit facere quisquam totam dolorem quae iure nam praesentium magni ex aspernatur cumque omnis, corrupti quasi deserunt iusto?
            </div>
            <div className="callToAction">
              <a href="" className="cta-btn">Join Now</a>
              <a href="" className="cta-btn">Explore Blogs</a>
            </div>
          </div>

        </div>
        <div className="hero-r">right side</div>
      </div>
    </>
  );
}

export default Hero;
