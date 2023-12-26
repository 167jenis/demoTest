const Edit = () => {
  return (
    <div className="relative bg-darkslategray-400 w-full h-[1000px] overflow-hidden text-center text-sm text-primary-contrast font-body-small">
      <img
        className="absolute top-[889px] left-[0px] w-[1440px] h-[111px] object-cover"
        alt=""
        src="/vectors@2x.png"
      />
      <div className="absolute top-[296px] left-[120px] w-[473px] h-[504px]">
        <div className="absolute top-[0px] left-[0px] w-[473px] h-[504px]">
          <div className="absolute top-[0px] left-[0px] w-[473px] h-[504px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-input-color box-border w-[473px] h-[504px] border-[2px] border-dashed border-primary-contrast" />
          </div>
        </div>
        <div className="absolute top-[224px] left-[156px] w-[162px] h-14">
          <div className="absolute top-[32px] left-[0px] leading-[24px]">
            Drop other image here
          </div>
          <img
            className="absolute top-[0px] left-[69px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/file-download-black-24dp-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[474px] left-[903px] rounded-3xs bg-primary w-[179px] h-[55px] text-base">
        <b className="absolute top-[28.55%] left-[32.4%] leading-[24px]">
          Update
        </b>
      </div>
      <div className="absolute top-[474px] left-[720px] rounded-3xs box-border w-[167px] h-[55px] text-base border-[1px] border-solid border-primary-contrast">
        <b className="absolute top-[28.55%] left-[32.93%] leading-[24px]">
          Cancel
        </b>
      </div>
      <div className="absolute top-[365px] left-[720px] w-[241px] h-[45px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-input-color w-[241px] h-[45px]" />
        <div className="absolute top-[11px] left-[16px] leading-[24px]">
          Publishing year
        </div>
      </div>
      <div className="absolute top-[296px] left-[720px] w-[362px] h-[45px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-input-color w-[362px] h-[45px]" />
        <div className="absolute top-[10px] left-[16px] leading-[24px]">
          Title
        </div>
      </div>
      <div className="absolute top-[120px] left-[120px] text-29xl leading-[56px] font-semibold">
        Edit
      </div>
    </div>
  );
};

export default Edit;
