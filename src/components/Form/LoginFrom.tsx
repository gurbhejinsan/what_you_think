import { useState } from "react";
import OTPInput from "./OtpInput";
import Button from "./Button";
import { Enter_code } from "../../constant.ts";
import { useAppContext } from "../../strore/useAppContext";
const LoginFrom = () => {
  const [otp, setOtp] = useState("");
  const { dispatch } = useAppContext();

  const handleClick = () => {
    console.log("🚀 ~ handleClick ~ Number(otp) == Enter_code:", Enter_code);
    if (Number(otp) == Enter_code) {
      dispatch({ type: "CHECK_VERIFY" });
    }
  };

  return (
    <div className="login__form">
      <div className="login__container box  ">
        <h1 className="login__heading">What's the code</h1>
        {/* <input type="number" className="login__input" /> */}
        <OTPInput length={4} onChange={(otp) => setOtp(otp)} />
        <div>
          <Button color={"darkPink"} onClick={handleClick}>
            Submit 🙃
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
