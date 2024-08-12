import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-lvh flex flex-col justify-center items-center gap-12">
            <div>
                <div className="text-center text-8xl font-black text-[#949494]">404</div>
                <div className="text-center text-xl text-[#949494]">
                    요청하신 페이지를 찾을 수 없습니다.
                </div>
            </div>
            <Link
                href="/"
                className="py-4 px-9 bg-[#FFC554] rounded-2xl text-2xl font-bold text-[#141414] transition-all duration-100 hover:brightness-95 active:scale-[0.99]"
            >
                홈으로
            </Link>
        </div>
    );
}
