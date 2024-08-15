import React from "react";

interface RegularButtonProps {
    text: string;
    disalbed?: boolean;
}

export default function RegularButton({ text, disalbed = false }: RegularButtonProps) {
    return (
        <button
            disabled={disalbed}
            className="py-3 w-full bg-primary-300 rounded-md text-lg font-medium text-primary-900 transition-all duration-100 enabled:hover:brightness-95 enabled:active:scale-[0.99] disabled:bg-gray-200 disabled:text-gray-900"
        >
            {text}
        </button>
    );
}
