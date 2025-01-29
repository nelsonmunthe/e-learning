import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"

const Navigation = () => {
    return(
        <nav className="w-full px-20 grid grid-cols-5 bg-[#49BBBD] text-white py-2 right-0 left-0 sticky">
            <Image
                className="dark:invert col-span-1"
                src="/logo.png"
                alt="Next.js logo"
                width={50}
                height={38}
                priority
            />
            <div className="flex gap-x-10 items-center justify-end col-span-4 text-sm">
                <Link href="/home">Home</Link>
                <Link href="/course">Course</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about-us">About Us</Link>
                <CustomButton description="Login" style="bg-white text-black text-sm"/>
                <CustomButton description="Sign Up" style="bg-white opacity-50 text-black text-sm"/>
            </div>
        </nav>
    )
}

export default Navigation