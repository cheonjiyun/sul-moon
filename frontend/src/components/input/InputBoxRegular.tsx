import React, { ForwardedRef, forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputRegularProps {
    attributes: InputHTMLAttributes<HTMLInputElement>;
    validation: boolean;
    label: string;
    iconLeft?: React.JSX.Element;
    iconRight?: React.JSX.Element;
    clickIconRight?: () => void;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default forwardRef(function InputBoxRegular(
    {
        attributes,
        validation,
        label,
        iconLeft,
        iconRight,
        clickIconRight,
        value,
        onChange,
    }: InputRegularProps,
    ref: LegacyRef<HTMLInputElement>
) {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className={`w-full peer box-border pt-5 pb-1.5 text-base border-gray-500 border-[1px] rounded-md 
                    enabled:focus:outline-primary-450                     
                    ${validation || "border-red-600"}
                    ${iconLeft ? "pl-11 pr-4" : "px-4"}
                    ${iconRight && "pr-12"}
                    `}
                required
                value={value}
                onChange={onChange}
                {...attributes}
                ref={ref}
            />
            <label
                className={`absolute text-base top-1/2 translate-y-[-50%]  
                    peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary-450 transition-all
                    peer-valid:top-1.5 peer-valid:translate-y-0 peer-valid:text-xs
                    pointer-events-none		
                    ${validation ? "text-gray-500" : "text-red-600"}
                    ${iconLeft ? "left-11" : "left-4"}         
                    ${iconRight && "pr-11"}           
                    `}
            >
                {label}
            </label>

            {/* 아이콘 유무 */}
            {iconLeft && (
                <div
                    className={`absolute top-1/2 left-4 translate-y-[-50%]
                    peer-focus:text-primary-450 transition-all
                    enabled:focus:text-primary-450
                    peer-valid:text-black
                    ${validation ? "text-gray-500" : "text-red-600"}`}
                >
                    {iconLeft}
                </div>
            )}

            {/* 오른쪽 아이콘 */}
            {iconRight && (
                <div
                    onClick={clickIconRight}
                    className={`p-2 absolute top-1/2 translate-y-[-50%] right-1 hover:cursor-pointer 
                        peer-focus:text-primary-450 transition-all
                        enabled:focus:text-primary-450
                        peer-valid:text-gray-900
                    ${validation ? "text-gray-500" : "text-red-600"}`}
                >
                    {iconRight}
                </div>
            )}
        </div>
    );
});
