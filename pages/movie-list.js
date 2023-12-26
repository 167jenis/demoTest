import { useRouter } from "next/router";

const MovieList = () => {
  const router = useRouter();
  return (
    <div className="relative bg-darkslategray-400 w-full h-[1700px] overflow-hidden text-left text-xl text-primary-contrast font-body-small">
      <img
        className="absolute  bottom-0 left-[0px] w-full h-[111px] object-cover"
        alt=""
        src="/vectors@2x.png"
      />
      <div className="absolute top-[1448px] left-[629px] w-[182px] h-8 text-center text-base">
        <b className="absolute top-[4px] left-[0px] leading-[24px]">Prev</b>
        <b className="absolute top-[4px] left-[142px] leading-[24px]">Next</b>
        <div className="absolute top-[0px] left-[54px] w-8 h-8">
          <div className="absolute top-[0px] left-[0px] rounded bg-primary w-8 h-8" />
          <b className="absolute top-[4px] left-[12px] leading-[24px]">1</b>
        </div>
        <div className="absolute top-[0px] left-[94px] w-8 h-8">
          <div className="absolute top-[0px] left-[0px] rounded bg-card-color w-8 h-8" />
          <b className="absolute top-[4px] left-[11px] leading-[24px]">2</b>
        </div>
      </div>
      <div className="absolute top-[824px] left-[1038px] w-[282px] h-[504px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-card-color [backdrop-filter:blur(200px)] flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border">
          <div className="relative w-[266px] h-[400px]">
            <img
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_133px)] rounded-xs w-[266px] h-[400px] object-cover"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
        <div className="absolute h-[12.7%] w-full top-[84.13%] right-[68.09%] bottom-[3.17%] left-[5.67%]">
          <div className="absolute top-[0%] left-[0%] leading-[32px] font-medium">
            Movie 1
          </div>
          <div className="absolute top-[62.5%] left-[0%] text-sm leading-[24px]">
            2021
          </div>
        </div>
      </div>
      <div className="absolute top-[824px] left-[732px] w-[282px] h-[504px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-card-color [backdrop-filter:blur(200px)] flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border">
          <div className="relative w-[266px] h-[400px]">
            <img
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_133px)] rounded-xs w-[266px] h-[400px] object-cover"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
        <div className="absolute h-[12.7%] w-full top-[84.13%] right-[68.09%] bottom-[3.17%] left-[5.67%]">
          <div className="absolute top-[0%] left-[0%] leading-[32px] font-medium">
            Movie 1
          </div>
          <div className="absolute top-[62.5%] left-[0%] text-sm leading-[24px]">
            2021
          </div>
        </div>
      </div>
      <div className="absolute top-[824px] left-[426px] w-[282px] h-[504px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-card-color [backdrop-filter:blur(200px)] flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border">
          <div className="relative w-[266px] h-[400px]">
            <img
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_133px)] rounded-xs w-[266px] h-[400px] object-cover"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
        <div className="absolute h-[12.7%] w-full top-[84.13%] right-[68.09%] bottom-[3.17%] left-[5.67%]">
          <div className="absolute top-[0%] left-[0%] leading-[32px] font-medium">
            Movie 1
          </div>
          <div className="absolute top-[62.5%] left-[0%] text-sm leading-[24px]">
            2021
          </div>
        </div>
      </div>
      <div className="absolute top-[824px] left-[120px] w-[282px] h-[504px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-card-color [backdrop-filter:blur(200px)] flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border">
          <div className="relative w-[266px] h-[400px]">
            <img
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_133px)] rounded-xs w-[266px] h-[400px] object-cover"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
        <div className="absolute h-[12.7%] w-full top-[84.13%] right-[68.09%] bottom-[3.17%] left-[5.67%]">
          <div className="absolute top-[0%] left-[0%] leading-[32px] font-medium">
            Movie 1
          </div>
          <div className="absolute top-[62.5%] left-[0%] text-sm leading-[24px]">
            2021
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[1038px] w-[282px] h-[504px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-card-color [backdrop-filter:blur(200px)] flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border">
          <div className="relative w-[266px] h-[400px]">
            <img
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_133px)] rounded-xs w-[266px] h-[400px] object-cover"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
        <div className="absolute h-[12.7%] w-full top-[84.13%] right-[68.09%] bottom-[3.17%] left-[5.67%]">
          <div className="absolute top-[0%] left-[0%] leading-[32px] font-medium">
            Movie 1
          </div>
          <div className="absolute top-[62.5%] left-[0%] text-sm leading-[24px]">
            2021
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[732px] w-[282px] h-[504px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-card-color [backdrop-filter:blur(200px)] flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border">
          <div className="relative w-[266px] h-[400px]">
            <img
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_133px)] rounded-xs w-[266px] h-[400px] object-cover"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
        <div className="absolute h-[12.7%] w-full top-[84.13%] right-[68.09%] bottom-[3.17%] left-[5.67%]">
          <div className="absolute top-[0%] left-[0%] leading-[32px] font-medium">
            Movie 1
          </div>
          <div className="absolute top-[62.5%] left-[0%] text-sm leading-[24px]">
            2021
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[426px] w-[282px] h-[504px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-card-color [backdrop-filter:blur(200px)] flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border">
          <div className="relative w-[266px] h-[400px]">
            <img
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_133px)] rounded-xs w-[266px] h-[400px] object-cover"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
        <div className="absolute h-[12.7%] w-full top-[84.13%] right-[68.09%] bottom-[3.17%] left-[5.67%]">
          <div className="absolute top-[0%] left-[0%] leading-[32px] font-medium">
            Movie 1
          </div>
          <div className="absolute top-[62.5%] left-[0%] text-sm leading-[24px]">
            2021
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[120px] w-[282px] h-[504px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-card-color [backdrop-filter:blur(200px)] flex flex-col items-start justify-start pt-2 px-2 pb-4 box-border">
          <div className="relative w-[266px] h-[400px]">
            <img
              className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_133px)] rounded-xs w-[266px] h-[400px] object-cover"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
        <div className="absolute h-[12.7%] w-full top-[84.13%] right-[68.09%] bottom-[3.17%] left-[5.67%]">
          <div className="absolute top-[0%] left-[0%] leading-[32px] font-medium">
            Movie 1
          </div>
          <div className="absolute top-[62.5%] left-[0%] text-sm leading-[24px]">
            2021
          </div>
        </div>
      </div>
      <div className="absolute top-[132px] left-[1216px] w-[104px] h-8 text-center text-base">
        <b className="absolute top-[4px] left-[0px] leading-[24px]">Logout</b>
        <img
          className="absolute top-[0px] left-[72px] w-8 h-8 overflow-hidden object-cover"
          alt=""
          src="/logout-black-24dp-1@2x.png"
        />
      </div>
      <div className="absolute top-[120px] left-[120px] w-[309px] h-14 text-center text-29xl">
        <img
          className="cursor-pointer absolute top-[16px] left-[277px] w-8 h-8 object-cover"
          alt=""
          src="/group-24@2x.png"
          onClick={() => router.push("/create-a-new-movie")}
        />
        <div className="absolute top-[0px] left-[0px] leading-[56px] font-semibold">
          My movies
        </div>
      </div>
    </div>
  );
};

export default MovieList;
