"use client";
import { Controller, useForm } from "react-hook-form";
import ButtonRegular from "@/components/button/ButtonRegular";
import InputBoxRegular from "@/components/input/InputBoxRegular";
import React, { useState } from "react";
import UserSvg from "@/icon/UserSvg";
import PhoneSvg from "@/icon/PhoneSvg";
import LockSvg from "@/icon/LockSvg";
import EyeShowSvg from "@/icon/EyeShowSvg";
import EyeCloseSvg from "@/icon/EyeCloseSvg";
import { singUp } from "@/axios/api/user";
import { SignUpType } from "@/type/apiType";

export default function Login() {
    const onSubmit = async (submitData: SignUpType) => {
        const respos = await singUp(submitData);
        console.log(respos);
    };
    const {
        watch,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            id: "",
            password: "",
            confirmPassword: "",
            phone: "",
        },
    });

    // 비밀번호 눈모양
    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [viewConfrimPassword, setViewConfirmPassword] = useState<boolean>(false);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col items-center gap-20"
        >
            <div className="w-full max-w-[478px] flex flex-col items-center gap-6">
                <div className="w-full max-w-[478px] mb-1 text-2xl font-bold">
                    회원가입을 환영합니다 :D
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div>
                        <Controller
                            control={control}
                            name="id"
                            rules={{
                                required: true,
                                maxLength: {
                                    value: 200,
                                    message: "아이디를 200자 이내로 입력해주세요",
                                },
                            }}
                            render={({ field: { onChange, value, ref } }) => (
                                <InputBoxRegular
                                    label="아이디"
                                    iconLeft={<UserSvg />}
                                    attributes={{ type: "text" }}
                                    validation={!errors.id}
                                    value={value}
                                    onChange={onChange}
                                    ref={ref}
                                />
                            )}
                        />

                        {errors.id && (
                            <p className="p-1 text-red-500 text-sm">
                                {errors.id.message?.toString()}
                            </p>
                        )}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: true,
                                minLength: { value: 8, message: "8자 이상 입력해주세요" },
                                maxLength: {
                                    value: 20,
                                    message: "20자 이하로 입력해주세요",
                                },
                                pattern: {
                                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                    message: "숫자, 대문자, 소문자, 특수문자를 포함해주세요",
                                },
                            }}
                            render={({ field: { onChange, value, ref } }) => (
                                <InputBoxRegular
                                    label="비밀번호"
                                    iconLeft={<LockSvg />}
                                    iconRight={viewPassword ? <EyeShowSvg /> : <EyeCloseSvg />}
                                    clickIconRight={() =>
                                        setViewPassword((viewPassword) => !viewPassword)
                                    }
                                    attributes={{ type: viewPassword ? "text" : "password" }}
                                    validation={!errors.password}
                                    value={value}
                                    onChange={onChange}
                                    ref={ref}
                                />
                            )}
                        />

                        {errors.password && (
                            <p className="p-1 text-red-500 text-sm">
                                {errors.password.message?.toString()}
                            </p>
                        )}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="confirmPassword"
                            rules={{
                                required: "비밀번호 확인을 입력해주세요.",
                                validate: () =>
                                    watch("password") == watch("confirmPassword") ||
                                    "비밀번호가 일치하지 않습니다.",
                            }}
                            render={({ field: { onChange, value, ref } }) => (
                                <InputBoxRegular
                                    label="비밀번호확인"
                                    iconLeft={<LockSvg />}
                                    iconRight={
                                        viewConfrimPassword ? <EyeShowSvg /> : <EyeCloseSvg />
                                    }
                                    clickIconRight={() =>
                                        setViewConfirmPassword(
                                            (viewConfrimPassword) => !viewConfrimPassword
                                        )
                                    }
                                    attributes={{ type: viewConfrimPassword ? "text" : "password" }}
                                    validation={!errors.confirmPassword}
                                    value={value}
                                    onChange={onChange}
                                    ref={ref}
                                />
                            )}
                        />
                        {errors.confirmPassword && (
                            <p className="p-1 text-red-500 text-sm">
                                {errors.confirmPassword.message?.toString()}
                            </p>
                        )}
                    </div>
                    <div>
                        <div className="w-full flex gap-2">
                            <div className="flex-1 w-full">
                                <Controller
                                    control={control}
                                    name="phone"
                                    rules={{
                                        required: true,
                                        pattern: {
                                            value: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
                                            message: "휴대폰 번호를 형식에 맞게 입력해주세요",
                                        },
                                    }}
                                    render={({ field: { onChange, value, ref } }) => (
                                        <InputBoxRegular
                                            label="휴대전화번호"
                                            iconLeft={<PhoneSvg />}
                                            attributes={{ type: "tel" }}
                                            validation={!errors.phone}
                                            value={value}
                                            onChange={(e) => {
                                                // 숫자만 남기기
                                                let changeValue = e.target.value.replace(
                                                    /[^0-9]/g,
                                                    ""
                                                );
                                                // 11자리 이상 입력을 제한
                                                if (changeValue.length > 11) {
                                                    changeValue = changeValue.slice(0, 11);
                                                }

                                                // 실시간 하이픈
                                                if (
                                                    changeValue.length > 3 &&
                                                    changeValue.length <= 7
                                                ) {
                                                    changeValue = changeValue.replace(
                                                        /(\d{3})(\d{1,4})/,
                                                        "$1-$2"
                                                    );
                                                }
                                                // 자동하이픈
                                                else {
                                                    changeValue = changeValue.replace(
                                                        /(\d{3})(\d{4})(\d{1,4})/,
                                                        "$1-$2-$3"
                                                    );
                                                }
                                                onChange(changeValue);
                                            }}
                                            ref={ref}
                                        />
                                    )}
                                />
                            </div>
                            <div className="">
                                <ButtonRegular text="인증하기" />
                            </div>
                        </div>
                        {errors.phone && (
                            <p className="p-1 text-red-500 text-sm">
                                {errors.phone.message?.toString()}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[478px] mb-2">
                <ButtonRegular text="회원가입" />
            </div>
        </form>
    );
}
