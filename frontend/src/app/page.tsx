import RegularButton from "@/components/button/RegularButton";
import RegularInput from "@/components/input/RegularInputBox";

export default function Home() {
    return (
        <div className="m-20">
            <RegularInput validation={false} label="아이디" icon="d" />
            <RegularButton text="흠" />
        </div>
    );
}
