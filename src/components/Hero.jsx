import React from "react";
import Heroimg from "../assets/my image.jpg";
import HeroImg from "../assets/my.jpg";

const Hero = () => {
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1ANsiFYYuQOcFFfTiCUwrHmaP_mqXwf3z/view?usp=sharing";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Suyash_Kerkar_Resume.pdf";

    // Trigger the download
    link.click();

    // Clean up the temporary link
    link.remove();
  };

  return (
    <div className="bg-black text-white text-center py-16" id="home">
      <img
        src={HeroImg}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Suyash Kerkar,&nbsp;
        </span>
        Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      {/* Button Container */}
      <div className="mt-8 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect With Me
        </button>
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
