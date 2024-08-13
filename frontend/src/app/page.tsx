import RegularButton from "@/components/button/RegularButton";
import RegularInput from "@/components/input/RegularInputBox";

export default function Home() {
    return (
        <div className="m-20">
            <RegularInput validation={true} label="아이디" />
        </div>
    );
}
