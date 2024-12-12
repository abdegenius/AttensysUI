import React from "react"

import videoHero from "../../assets/video.svg"
import CarouselComp from "./Carousel"
import Image from "next/image"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck"
import { GiBackwardTime } from "@react-icons/all-files/gi/GiBackwardTime"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond"
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown"
import { useRouter } from "next/navigation"
import { handleCourse } from "@/utils/helpers"
import { skills, subLectures } from "@/constants/data"

const Explore = () => {
  const router = useRouter()

  return (
    <div>
      {/* Hero component */}
      <div>
        <div
          className={`bg-[url('/hero_asset.png')] text-white h-24 px-28 py-20 from-orange-400 via-red-500 to-pink-500 h-64 min-h-full sm:min-h-0 md:min-h-full lg:min-h-0 xl:min-h-full `}
        >
          {/* Hero lettering */}
          <h1 className="w-5/12 font-bold text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
            Continuous learning is the key to success - upskill with us
          </h1>
          <p className="w-1/2">
            With Attensys, all you need is your address to prove your
            certification. Welcome to the future{" "}
          </p>
        </div>
      </div>

      {/* skills  */}
      <div className="mx-12 my-16 flex flex-row justify-center">
        {skills.map((item, index) => (
          <p className="bg-[#2D3A4B] p-6 text-white" key={index}>
            {item}
          </p>
        ))}
      </div>

      {/* what to learn next */}
      <div className="mx-28">
        <div className="">
          {/* upper */}
          <div className="my-4">
            {/* wording */}
            <h3 className="text-2xl font-bold">What to learn next</h3>
            <p className="font-thin text-xl">
              Because you viewed{" "}
              <span className="text-[#5801A9] font-bold">
                “Introduction to Web Dev Starknet”
              </span>
            </p>
          </div>

          {/* cards  */}
          <CarouselComp />
        </div>

        {/* below */}
        <div className="flex justify-start my-24">
          {/* left */}
          <div className="flex justify-top">
            <div className="mr-10">
              <Image src={videoHero} alt="video" className="object-cover" />
            </div>
            <div>
              <div>
                <div
                  onClick={(e) =>
                    handleCourse(e, e.currentTarget.textContent, router)
                  }
                >
                  <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    Get this course
                  </button>
                  <h2 className="font-bold text-4xl text-[#2D3A4B] w-4/6 tracking-wide my-4 cursor-pointer">
                    Introduction to Web Development
                  </h2>
                </div>
                <p className="text-white items-center inline gap-2 text-sm bg-[#5801A9] rounded p-1">
                  Tech Innovators Academy
                </p>
                {/* rating and num of students */}
                <div className="flex  items-center my-2">
                  <div className="flex items-center">
                    <IoIosStar color="#F6A61C" />
                    <IoIosStar color="#F6A61C" />
                    <IoIosStar color="#F6A61C" />
                    <IoIosStar color="#F6A61C" />
                    <IoIosStar />
                    <p className="font-bold">(281)</p>
                  </div>

                  <div className="flex items-center mx-8">
                    <HiBadgeCheck color="#2D3A4B" />
                    <p className="ml-5 font-bold">291 certification</p>
                  </div>
                </div>

                {/* creator and last update */}
                <div className="flex text-center my-3">
                  <div>
                    <p className="">
                      Created by{" "}
                      <span className="underline">Akinbola Kehinde</span>
                    </p>
                  </div>

                  <div className="flex ml-5 items-center ">
                    <GiBackwardTime />
                    <p className="ml-3">Last updated 10|10|24</p>
                  </div>
                </div>

                {/* video prop */}
                <div className="flex ">
                  <div className="flex my-1 items-center">
                    <FaPlay />
                    <p>Total play time: 2 hrs 35 mins</p>
                  </div>
                  <div className="flex ml-5  items-center">
                    <GrDiamond color="#2D3A4B" />
                    <p>Difficulty level: Elementary</p>
                  </div>
                </div>

                <div className="flex  items-center">
                  <div>
                    <HiBadgeCheck color="#2D3A4B" />
                  </div>
                  <p>Certificate of Completion</p>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex-1">
            <div className="flex justify-between border-b-2 pb-3">
              <h4>Lectures (4)</h4>
              <IoMdArrowDropdown />
            </div>

            <div>
              {subLectures.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-center content-center text-sm my-3 cursor-pointer"
                  onClick={(e) =>
                    handleCourse(e, e.currentTarget.textContent, router)
                  }
                >
                  <div>
                    <Image
                      src={item.img}
                      alt="another course"
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h6 className="font-bold">
                      {item.title}
                      <span className="text-[#5801A9]">({item.time})</span>
                    </h6>
                    <p className="font-light mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* recommended for you based on rating */}
      <div>
        <div className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 p-8 my-4">
          <p className="text-white font-bold ml-24">
            Recommended to you based on rating
          </p>
          {/* background: linear-gradient(90deg, #9B51E0 0%, #4A90E2 100%); */}
        </div>
        <div className="mx-28">
          <CarouselComp />

          <div className="mt-24">
            <div className="my-4">
              {/* wording */}
              <h3 className="text-2xl font-bold">You will love this</h3>
              <p className="font-thin text-xl">
                Because you viewed{" "}
                <span className="text-[#5801A9] font-bold">
                  “Introduction to Web Dev Starknet”
                </span>
              </p>
            </div>

            {/* cards  */}
            <CarouselComp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
