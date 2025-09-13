
import Link from "next/link";
import Image from "next/image";
import { Search, User } from "lucide-react";

export default function Header (){
    return (
        <>
            <header >
                <div className="flex justify-between items-center px-8 py-4 ">
                    <div>
                        <Image src= "/spiderman-header-img.jpg" alt="Spiderman-header-image" width={60} height={30} />
                            <Link href= "#"></Link>
                        </div>
                        <div className="flex justify-between items-center w-xl">
                        <div className="group relative flex flex-col items-center">
                            <Image src= "/header-home.jpg" alt="Spiderman-header-image" width={30} height={10} className="absolute top-0 opacity-0 group-hover:opacity-100 transition duration-300 w-12 h-12 rounded-full" />
                            <Link href="#" className="text-lg text-white font-medium group-hover:opacity-0 transition duration-300">Home</Link>
                        </div>
                        <div className="group relative flex flex-col items-center">
                            <Image src= "/header-movies.jpg" alt="Spiderman-header-image" width={30} height={10} className="absolute top-0 opacity-0 group-hover:opacity-100 transition duration-300 w-12 h-12 rounded-full" />
                            <Link href="#" className="text-lg text-white font-medium group-hover:opacity-0 transition duration-300">Movies</Link>
                        </div>
                        <div className="group relative flex flex-col items-center">
                            <Image src= "/header-characters.jpg" alt="Spiderman-header-image" width={30} height={10} className="absolute top-0 opacity-0 group-hover:opacity-100 transition duration-300 w-12 h-12 rounded-full" />
                            <Link href="#" className="text-lg text-white font-medium group-hover:opacity-0 transition duration-300">Characters</Link>
                        </div>
                        <div className="group relative flex flex-col items-center">
                            <Image src= "/header-timeline.jpg" alt="Spiderman-header-image" width={30} height={10} className="absolute top-0 opacity-0 group-hover:opacity-100 transition duration-300 w-12 h-12 rounded-full" />
                            <Link href="#" className="text-lg text-white font-medium group-hover:opacity-0 transition duration-300">Timeline</Link>
                        </div>
                        <div className="group relative flex flex-col items-center">
                             <Image src= "/header-about.jpg" alt="Spiderman-header-image" width={30} height={10} className="absolute top-0 opacity-0 group-hover:opacity-100 transition duration-300 w-12 h-12 rounded-full" />
                            <Link href="#" className="text-lg text-white font-medium group-hover:opacity-0 transition duration-300">About</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify border-2 p-2 rounded-2xl">
                        <div className="pr-3 pl-3 "><input type="text" placeholder="Seach you favourite movie or Characters" className=" placeholder-white text-white w-72 whitespace-normal border-none focus:outline-none focus:ring-0"/></div>
                        <div className="p-1 text-white"><Search /></div>
                    </div>
                    <div className=" text-white border-3 border-slate-950 p-2 rounded-full"><User /></div>
                </div>
            </header>
        </>
    );
}