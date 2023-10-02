"use client";
import GoogleMaps from "./GoogleMaps";

const Location = () => {
  return (
    <div className="flex justify-center pt-20">
      <main className="w-[1200px] container px-4 md:px-0">
        <div className="w-full h-96 bg-green-50 mb-6 rounded-lg">
          {" "}
          <GoogleMaps />
        </div>
        <div className=" flex justify-center">
          <p className="w-full md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            cumque laudantium obcaecati quidem dolor quod sunt neque cupiditate?
            Porro aliquam modi, vel nisi cupiditate ab harum facere corrupti
            illo a!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Location;
