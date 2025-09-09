"use client"
import Link from "next/link";
import Image from "next/image";
import { Search, User } from "lucide-react";

export default function Header (){
    return (
        <>
            <header className="sticky">
                <div className="m-3 flex items-center justify-around ">
                    <div>
                        <Image src= "/spiderman-header-img.jpg" alt="Spiderman-header-image" width={60} height={30} />
                        <Link href= "#"></Link>
                    </div>
                    <div className="flex justify-between w-xl">
                        <div className="flex flex-col items-center">
                            <Image src= "/header-home.jpg" alt="Spiderman-header-image" width={30} height={10} className="rounded-full" />
                            <Link href="#" className="ml-1">Home</Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src= "/header-movies.jpg" alt="Spiderman-header-image" width={30} height={10} className="rounded-full" />
                            <Link href="#" className="ml-1">Movies</Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src= "/header-characters.jpg" alt="Spiderman-header-image" width={30} height={10} className="rounded-full" />
                            <Link href="#" className="ml-1">Characters</Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src= "/header-timeline.jpg" alt="Spiderman-header-image" width={30} height={10} className="rounded-full" />
                            <Link href="#" className="ml-1">Timeline</Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src= "/header-about.jpg" alt="Spiderman-header-image" width={30} height={10} className="rounded-full" />
                            <Link href="#" className="ml-1">About</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify border-2 p-2 rounded-2xl">
                        <div className="pr-3 pl-3 "><input type="text" placeholder="Seach you favourite movie or Characters" className="w-72 whitespace-normal border-none focus:outline-none focus:ring-0"/></div>
                        <div className=" p-1 "><Search /></div>
                    </div>
                    <div className="border-3 border-slate-950 p-2 rounded-full"><User /></div>
                </div>
            </header>
        </>
    );
}