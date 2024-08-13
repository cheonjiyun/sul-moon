import React from "react";

interface RegularButtonProps {
    text: string;
    disalbed?: boolean;
}

export default function RegularButton({ text, disalbed = false }: RegularButtonProps) {
    return (
        <button
            disabled={disalbed}
            className="py-3 w-full bg-[#FFC554] rounded-md text-lg font-medium text-[#141414] transition-all duration-100 enabled:hover:brightness-95 enabled:active:scale-[0.99] disabled:bg-[#EAEAEA] disabled:text-[#797979]"
        >
            {text}
        </button>
    );
}
