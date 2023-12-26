const CreateANewMovie = () => {
  return (
    <div className="relative bg-darkslategray-400 w-full h-[1000px] overflow-hidden text-center text-sm text-primary-contrast font-body-small">
      <img
        className="absolute top-[889px] left-[0px] w-[1440px] h-[111px] object-cover"
        alt=""
        src="/vectors@2x.png"
      />
      <div className="absolute top-[474px] left-[903px] rounded-3xs bg-primary w-[179px] h-14 text-base">
        <b className="absolute top-[28.57%] left-[32.96%] leading-[24px]">
          Submit
        </b>
      </div>
      <div className="absolute top-[474px] left-[720px] rounded-3xs box-border w-[167px] h-14 text-base border-[1px] border-solid border-primary-contrast">
        <b className="absolute top-[28.57%] left-[32.93%] leading-[24px]">
          Cancel
        </b>
      </div>
      <div className="absolute top-[296px] left-[120px] w-[473px] h-[504px]">
        <div className="absolute top-[0px] left-[0px] w-[473px] h-[504px]">
          <div className="absolute top-[0px] left-[0px] w-[473px] h-[504px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-input-color box-border w-[473px] h-[504px] border-[2px] border-dashed border-primary-contrast" />
          </div>
        </div>
        <div className="absolute top-[224px] left-[166px] w-[141px] h-14">
          <div className="absolute top-[32px] left-[0px] leading-[24px]">
            Drop an image here
          </div>
          <img
            className="absolute top-[0px] left-[59px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/file-download-black-24dp-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[365px] left-[720px] w-[362px] h-[45px]">
        <div className="absolute top-[0px] left-[0px] " />
        <div className="absolute top-[11px] left-[16px] leading-[24px]">
          <input
            placeholder="Publishing year"
            className="rounded-3xs bg-input-color w-[362px] h-[45px]"
          />
        </div>
      </div>
      <div className="absolute top-[296px] left-[720px] w-[362px] h-[45px]">
        <div className="absolute top-[0px] left-[0px] " />
        <div className="absolute top-[10px] left-[16px] leading-[24px]">
          <input
            placeholder="Title"
            className="rounded-3xs bg-input-color w-[362px] h-[45px]"
          />
        </div>
      </div>
      <div className="absolute top-[120px] left-[120px] text-29xl leading-[56px] font-semibold">{`Create a new movie `}</div>
    </div>
  );
};

export default CreateANewMovie;
