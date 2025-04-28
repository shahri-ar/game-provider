export function Cta() {
  return (
    <section className="mb-16 pt-16 bg-[#e30613] mx-4 rounded-lg">
      <div className="flex flex-col-reverse xl:flex-row container mx-auto px-5 2xl:w-[67%] items-center justify-center">
        <div className="sm:px-20 xl:w-1/2">
          <video
            className="h-96"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/asset/siteVideos/cta_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-white text-center xl:w-1/2 xl:text-start lg:mx-28">
            <h1 className="text-4xl sm:text-5xl font-sofiya">Subscribe to Updates</h1>
            <p className="my-10">Welcome to our newsletter hub! Pick what you want to hear about,from product insights to industry trends. Make your inbox yours!</p>
            <input placeholder="Enter Your Email" className="p-3 py-4 text-black border-none text-xs rounded outline-none w-full "/>
        </div>
      </div>
    </section>
  );
}

