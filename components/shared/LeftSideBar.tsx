'use client'
//module imports
import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import { SignOutButton, SignedIn } from "@clerk/nextjs";

//custom imports
import { sidebarLinks } from "@/constants";
import { useGlobalContext } from "@/app/context/context";

function LeftSideBar() {
    const router = useRouter();
    const pathname = usePathname();
    const {setLoading} = useGlobalContext();

    const handleLinkClick = () => {
        setLoading(true);
    };

    useEffect(() => {
        console.log("changed");
        setLoading(false);
      }, [pathname]);

    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1 || pathname === link.route)
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
                            onClick={handleLinkClick}
                        >
                            <Image src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className="text-light-1 max-lg:hidden">{link.label}</p>
                        </Link>
                    )
                })}
            </div>

            <div className="mt-10 px-6">
                <SignedIn>
                    <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
                        <div className="flex cursor-pointer gap-4 p-4">
                        <Image src="/assets/logout.svg"
                            width={24}
                            height={24} alt="log-out"
                        />
                        <p className="text-light-2 max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    )
}

export default LeftSideBar;