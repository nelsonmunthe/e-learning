import Image from "next/image";
import CustomButton from "../components/CustomButton";
import { FaPlay } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaFileInvoice } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid gap-y-10">
      <div className="px-20 bg-[#49BBBD] grid grid-cols-7 py-4 gap-x-10 rounded-bl-[100px] rounded-br-[100px]">
        <div className="col-span-3 flex flex-col gap-4 justify-center items-center py-10">
          <h1 className="text-[#F48C06] font-bold text-4xl text-wrap">Studying <span className="text-white">Online is now much easier</span></h1>
          <p className="text-white text-wrap">TOTC is an interesting platform that will teach you in more an interactive way</p>
          <div className="w-full flex justify-start gap-4">
            <CustomButton 
              description="Join for free"
              style="text-black font-bold bg-white"
            />
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-white p-3 rounded-3xl flex justify-center items-center">
                <FaPlay className="text-[#23BDEE] hover:cursor-pointer"/>
              </div>
              <span className="text-sm text-black">Watch how it works</span>
            </div>
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-center relative">
          <Image
              className="dark:invert col-span-1 absolute"
              src="/images1.png"
              alt="Next.js logo"
              width={250}
              height={250}
              priority
          />
          <div className="absolute top-12 left-20 bg-white opacity-75 p-1 rounded-lg shadow-md flex items-center space-x-4">
            <div className="bg-[#23BDEE] p-2 rounded-lg">
              <SlCalender className="text-white" />
            </div>
            <div>
              <p className="text-[#595959] font-semibold text-sm">250k</p>
              <p className="text-sm text-[#595959]">Assisted Students</p>
            </div>
          </div>

          <div className="absolute top-25 right-10 bg-white opacity-75 p-1 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-orange-100 p-2 rounded-full">
            <svg className="h-6 w-6 text-orange-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 8h-3V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 0h-4V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2zM4 10h16v10H4V10z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Congratulations</p>
            <p className="text-sm text-gray-500">Your admission completed</p>
          </div>
        </div>

        <div className="absolute bottom-6 left-20 bg-white opacity-75 p-1 rounded-lg shadow-md flex-col justify-center text-sm gap-2 items-center space-x-4">
         <div className="flex gap-1">
          <Image
              src="/images3.png" // Replace with the actual image path
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
          />
          <div>
            <p className="text-gray-600 font-semibold">User Experience Class</p>
            <p className="text-sm text-gray-500">Today at 12.00 PM</p>
          </div>
         </div>
         <div className="flex justify-center items-center">
          <button className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm shadow-md">Join Now</button>
         </div>
        </div>
        </div>
      </div>
      <div className="grid gap-4 px-20 py-8">
        <div className="flex-col gap-2 justify-center items-center">
          <h2 className="font-bold text-center text-2xl">Our Success</h2>
          <p className="text-wrap text-center">Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec </p>
          <p className="text-wrap text-center"> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
        </div>
        <div className="grid grid-cols-10 px-40">
          <div className="col-span-2 flex flex-col justify-center items-center">
            <span className="text-[#49BBBD] text-4xl">15K+</span>
            <span>Students</span>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <span className="text-[#49BBBD] text-4xl">75%</span>
            <span>Total Success</span>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <span className="text-[#49BBBD] text-4xl">35</span>
            <span>Main Questions</span>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <span className="text-[#49BBBD] text-4xl">26</span>
            <span>Chief Experts</span>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <span className="text-[#49BBBD] text-4xl">16</span>
            <span>Years Experiences</span>
          </div>

        </div>
      </div>
      <div className="grid gap-4 px-20 py-8">
        <h2 className="font-bold text-center text-2xl text-[#2F327D]">All-In-One <span className="text-[#00CBB8]">Cloud Software.</span></h2>
        <div className="flex  flex-col justify-center items-center">
          <p>TOTC is one powerful online software suite that combines all the tools</p>
          <p>needed to run a successful school or office.</p>
        </div>
        <div className="grid grid-cols-9 gap-10 px-40 mt-8">
          <div className="col-span-3 flex  flex-col justify-center items-center shadow-md  relative border  p-2 rounded-lg">
            <h3 className="text-[#2F327D] pt-10 pb-4 text-wrap">Online Billing, Invoicing, & Contracts</h3>
            <p className="text-center text-wrap text-sm">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
            <div className="absolute p-3 bg-[#5B72EE] rounded-full top-[-20] left-[45%]">
              <FaFileInvoice className="text-white"/>
            </div>
          </div>
          <div className="col-span-3 flex  flex-col justify-center items-center shadow-md  relative border  p-2 rounded-lg">
            <h3 className="text-[#2F327D] pt-10 pb-4 text-wrap">Easy Scheduling & Attendance Tracking</h3>
            <p className="text-center text-wrap text-sm">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
            <div className="absolute p-3 bg-[#5B72EE] rounded-full top-[-20] left-[45%]">
              <SlCalender className="text-white"/>
            </div>
          </div>
          <div className="col-span-3 flex  flex-col justify-center items-center shadow-md  relative border  p-2 rounded-lg">
            <h3 className="text-[#2F327D] pt-10 pb-4 text-wrap">Customer Tracking</h3>
            <p className="text-center text-wrap text-sm">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
            <div className="absolute p-3 bg-[#5B72EE] rounded-full top-[-20] left-[45%]">
              <FaPeopleGroup className="text-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
