import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-lvh flex flex-col justify-center items-center gap-16">
            <div>
                <div className="text-center text-9xl font-black text-[#949494]">404</div>
                <div className="text-center text-2xl text-[#949494]">
                    요청하신 페이지를 찾을 수 없습니다.
                </div>
            </div>
            <Link
                href="/"
                className="py-4 px-10 bg-[#61533B] hover:brightness-110 rounded-2xl text-3xl font-bold text-white active:scale-[0.99]"
            >
                홈으로
            </Link>
        </div>
    );
}
