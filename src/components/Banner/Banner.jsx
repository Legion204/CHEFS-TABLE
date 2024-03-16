const Banner = () => {
  return (
    <div className="m-2">
      <div
        className="hero min-h-screen rounded-3xl"
        style={{
          backgroundImage: "url(banner-img.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-5xl text-white font-bold mb-5">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-white">
              Discover the art of cooking with our engaging classes! Explore
              various cuisines, learn essential techniques, and craft delectable
              dishes under the guidance of experienced chefs. Whether you are a
              novice or a seasoned enthusiast, our classes cater to all skill
              levels. Join us to ignite your culinary passion and embark on a
              flavorful journey!
            </p>
            <button className="btn bg-[#0BE58A] rounded-full border-none mr-4">
              Explore Now
            </button>
            <button className="btn bg-inherit text-white rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
