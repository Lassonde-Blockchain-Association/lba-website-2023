import React from "react";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="flex flex-col sm:flex-row md:py-0 py-2 w-full border-solid border-white border-t-8 h-1/3 items-center justify-center">
      <a
        href="https://lba-blog.vercel.app/"
        className="z-50 h-full flex items-center justify-center sm:w-1/2"
      >
        <h1 className="text-5xl sm:text-7xl tracking-widest hover:text-orange-300 uppercase font-semibold lg:mt-0 mt-2 transform duration-150">
          LBA-Blog
        </h1>
      </a>

      <div className="h-full w-full sm:w-1/2 flex items-center justify-center">
        <div className="w-full sm:w-3/4 flex flex-col items-center">
          <label className="text-lg sm:text-xl text-center">
            Contribute to our blog
          </label>
          <div className="w-full flex py-2 justify-center lg:mb-0 mb-2">
            <input
              className="w-3/4 sm:w-full rounded-full placeholder:text-gray-500 pl-3 border-4 border-gray-100 text-black text-base "
              type="email"
              maxLength={256}
              placeholder="Add your email"
              required
            />
            <button type="submit" className="text-4xl sm:text-5xl pl-2">
              <BsFillArrowUpLeftCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
