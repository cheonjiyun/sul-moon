import React from "react";
import { IoMdLock } from "react-icons/io";

interface RegularInputProps {
    validation: boolean;
    label: string;
    icon?: string;
}

export default function RegularInputBox({ validation, label, icon }: RegularInputProps) {
    return (
        <div className="relative">
            {/* 아이콘 유무 */}
            {icon && <IoMdLock className="absolute top-1/2 left-4 translate-y-[-50%]	" size={16} />}

            <input
                type="text"
                className={`peer box-border pt-5 pb-1.5  text-base border-[#BCBCBC] border-[1px] rounded-md 
                    enabled:focus:outline-[#FFA800]                     
                    ${validation || "border-[#F40E0E]"}
                    ${icon ? "pl-11 pr-4" : "px-4"}
                    `}
                required
            />
            <label
                className={`absolute text-base top-1/2 translate-y-[-50%]  
                    peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs  peer-focus:text-[#FFA800] transition-all
                    peer-valid:top-1.5 peer-valid:translate-y-0 peer-valid:text-xs
                    ${validation ? "text-[#BCBCBC]" : "text-[#F40E0E]"}
                    ${icon ? "left-11" : "left-4"}
                    
                    `}
            >
                {label}
            </label>
        </div>
    );
}
