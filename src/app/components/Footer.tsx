import Image from "next/image"
import CustomButton from "./CustomButton"
import Link from "next/link"

const Footer = () => {

    return(
        <footer className="bg-[#252641] flex flex-col gap-x-8 p-4">
            <div className="flex justify-center items-center gap-4 mt-8">
                <Image
                    className="dark:invert col-span-1"
                    src="/logo2.png"
                    alt="Next.js logo"
                    width={50}
                    height={38}
                    priority
                />
                <div className="flex-col gap-1 border-l pl-4">
                    <span className="text-white">Virtual Class</span>
                    <br/>
                    <span className="text-white">for Zoom</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-8">
                <p className="text-[#B2B3CF]">Subscribe to get our Newsletter</p>
                <div className="flex gap-2">
                    <input 
                        type="text"
                        placeholder="Your Email"
                        className="px-2 py-1 rounded-2xl border border-[#83839A] bg-[#252641] text-sm"
                    />
                    <CustomButton 
                        description="Subscribe"
                        style="bg-[#49BBBD] text-white text-sm"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 mt-8">
                <div className="flex justify-between items-center text-[#B2B3CF] gap-2 text-sm">
                    <Link  href='/careers'>Careers</Link>
                    <span>|</span>
                    <Link  href='/privacy-policy'>Privacy Policy</Link>
                    <span>|</span>
                    <Link  href='/terms-conditions'>Terms & Conditions</Link>
                </div>
                <span className="text-[#B2B3CF] text-sm">© 2021 Class Technologies Inc. </span>
            </div>
           
        </footer>
    )
}

export default Footer