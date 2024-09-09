import React from "react";

interface ButtonRegularProps {
    text: string;
    disalbed?: boolean;
}

export default function ButtonRegular({ text, disalbed = false }: ButtonRegularProps) {
    return (
        <button
            disabled={disalbed}
            className="px-6 py-3 w-full bg-primary-300 rounded-md text-lg font-medium text-primary-900 transition-all duration-100 enabled:hover:brightness-95 enabled:active:scale-[0.99] disabled:bg-gray-200 disabled:text-gray-900"
        >
            {text}
        </button>
    );
}
