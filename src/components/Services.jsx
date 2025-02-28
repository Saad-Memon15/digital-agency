import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-[] py-16 px-6 md:px-12 lg:px-24">
      <h1 data-aos="fade-down" className="text-4xl font-bold text-center text-[#2F2165]">
        Our Services
      </h1>
      <div className="flex justify-center items-center mt-3">
        <div className="bg-[#FF533A] h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-5 mb-12 text-lg max-w-3xl mx-auto">
        Choose from live online courses, classroom training, or self-paced online programs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          onClick={() => navigate("/app-development")} 
          className="cursor-pointer transform hover:scale-105 transition duration-300"
        >
          <Card
            img={<HiOutlineChartPie size={40} className="text-[#FF533A]" />}
            title={"Apps Development"}
            desc={"Build powerful mobile applications with cutting-edge technologies."}
          />
        </div>

        <div 
          onClick={() => navigate("/web-development")} 
          className="cursor-pointer transform hover:scale-105 transition duration-300"
        >
          <Card
            img={<HiOutlineChartPie size={40} className="text-[#00A97F]" />}
            title={"Web Development"}
            desc={"Craft stunning and responsive websites for businesses and individuals."}
          />
        </div>

        <div 
          onClick={() => navigate("/seo-optimization")} 
          className="cursor-pointer transform hover:scale-105 transition duration-300"
        >
          <Card
            img={<HiOutlineChartPie size={40} className="text-[#166FD3]" />}
            title={"SEO Optimization"}
            desc={"Boost your website rankings with our expert SEO strategies."}
          />
        </div>

        <div 
          onClick={() => navigate("/campaign-creation")} 
          className="cursor-pointer transform hover:scale-105 transition duration-300"
        >
          <Card
            img={<HiOutlineChartPie size={40} className="text-[#C8DA2C]" />}
            title={"Campaign Creation"}
            desc={"Design and execute result-driven digital marketing campaigns."}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;