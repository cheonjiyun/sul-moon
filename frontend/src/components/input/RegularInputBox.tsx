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
            {icon && (
                <IoMdLock
                    className={`absolute top-1/2 left-4 translate-y-[-50%] enabled:focus:text-primary-450                      
                        ${validation || "text-red-600"}`}
                    size={16}
                    color="inherit"
                />
            )}

            <input
                type="text"
                className={`w-full peer box-border pt-5 pb-1.5  text-base border-gray-500 border-[1px] rounded-md 
                    enabled:focus:outline-primary-450                     
                    ${validation || "border-red-600"}
                    ${icon ? "pl-11 pr-4" : "px-4"}
                    `}
                required
            />
            <label
                className={`absolute text-base top-1/2 translate-y-[-50%]  
                    peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs  peer-focus:text-primary-450 transition-all
                    peer-valid:top-1.5 peer-valid:translate-y-0 peer-valid:text-xs
                    ${validation ? "text-gray-500" : "text-red-600"}
                    ${icon ? "left-11" : "left-4"}
                    
                    `}
            >
                {label}
            </label>
        </div>
    );
}
