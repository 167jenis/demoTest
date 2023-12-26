import { useRouter } from "next/router";

const EmptyState = () => {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center bg-darkslategray-400 w-full h-[100vh]  overflow-hidden text-center text-base text-primary-contrast font-body-small">
      <img
        className="absolute  bottom-0 left-[0px] w-full h-[111px] object-cover"
        alt=""
        src="/vectors@2x.png"
      />
      <div className="flex justify-start items-center">
        <div className=" w-full">
          <div className=" text-29xl leading-[56px] font-semibold">
            Your movie list is empty
          </div>
          <div className="mt-[40px]">
            <button
              onClick={() => router.push("/movie-list")}
              className="cursor-pointer rounded-3xs bg-primary text-white py-4 px-7 "
            >
              <b className="relative leading-[24px]">Add a new movie</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
