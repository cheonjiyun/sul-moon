import { SignUpType } from "@/type/apiType";
import { axiosInstance } from "../instance";

export const singUp = (data: SignUpType) => axiosInstance.post("/auth/sign-up", data);
