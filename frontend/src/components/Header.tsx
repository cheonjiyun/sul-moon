import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgLogIn } from "react-icons/cg";

export const Header = () => {
    return (
        <header className="h-16 flex justify-between items-center sticky w-full top-0 border-b-[1px] z-10 backdrop-blur">
            <Link href="/">
                <Image
                    src="/img/logo.svg"
                    alt="설문로고"
                    width={160}
                    height={66}
                    className="w-auto"
                    priority
                />
            </Link>
            <Link className="p-5" href="/login">
                <div className="sm lg:hidden">
                    <CgLogIn color="FFB525" size={32} />
                </div>
                <div className="hidden lg:block">로그인</div>
            </Link>
        </header>
    );
};
