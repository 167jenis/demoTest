import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  return (
    <div className="relative bg-darkslategray-400 w-full h-[100vh] overflow-hidden text-center text-sm text-primary-contrast font-body-small">
      <img
        className="absolute  bottom-0 left-[0px] w-full h-[111px] object-cover"
        alt=""
        src="/vectors@2x.png"
      />
      <div className="absolute top-[50%] mx-auto left-[50%] -right-[124%] translate-y-[-50%] translate-x-[-50%] w-full h-[360px]">
        <div
          onClick={() => router.push("/empty-state")}
          className="absolute cursor-pointer top-[306px] left-[39px] rounded-3xs bg-primary flex flex-row items-start justify-start py-[15px] px-[126px] text-base"
        >
          <b className="relative leading-[24px]">Login</b>
        </div>
        <div className="absolute top-[258px] left-[83px] w-full h-6">
          <div className="absolute top-[0px] left-[26px] leading-[24px]">
            Remember me
          </div>
          <div className="absolute top-[4px] left-[0px] rounded-[5px] bg-input-color w-[18px] h-[17px]" />
        </div>
        <div className="absolute top-[189px] left-[0px] w-[300px] h-[45px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] " />
          <div className="absolute top-[24.44%] left-[5.33%] leading-[24px]">
            <input
              placeholder="Password"
              className="rounded-3xs bg-input-color w-[362px] h-[45px]"
            />
          </div>
        </div>
        <div className="absolute top-[120px] left-[0px] w-[300px] h-[45px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] " />
          <div className="absolute top-[24.44%] left-[5.33%] leading-[24px]">
            <input
              placeholder="Email"
              className="rounded-3xs bg-input-color w-[362px] h-[45px]"
            />
          </div>
        </div>
        <div className="absolute bottom-[280px] left-[37px] text-45xl leading-[80px] font-semibold">
          Sign in
        </div>
      </div>
    </div>
  );
};

export default SignIn;
