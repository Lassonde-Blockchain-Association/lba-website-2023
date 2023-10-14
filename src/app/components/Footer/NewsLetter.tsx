import React from "react";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="flex w-full border-solid border-white border-t-8 h-1/3 items-center justify-center">
      <a
        href="https://lba-blog.vercel.app/"
        className="z-50 h-full flex items-center justify-center w-1/2 "
      >
        <h1 className="text-7xl tracking-widest hover:text-orange-500 uppercase font-semibold  p-2 ">
          LBA-Blog
        </h1>
      </a>

      <div className="h-full w-1/2 flex items-center justify-center">
        <div className="w-1/2">
          <label className="w-full text-2xl ">Contribute to our blog</label>
          <div className="w-full flex py-2">
            <input
              className="w-full rounded-full placeholder:text-gray-500 pl-3 border-4 border-grap-100 text-black"
              type="email"
              maxLength={256}
              placeholder="Add you email"
              required
            ></input>
            <button type="submit" className="text-5xl pl-2">
              <BsFillArrowUpLeftCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
