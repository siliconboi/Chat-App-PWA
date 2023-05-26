const Header = () => {
    return (
      <div className="left-[0rem] flex flex-col pt-[1.25rem] px-[1rem] pb-[1rem] items-start justify-start gap-[1rem] text-left text-[1.5rem] text-gray-200 font-mulish border-b-[1px] border-solid border-gainsboro">
        <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/back.svg"
          />
          <b className="flex-1 relative">Trip 1</b>
          <img
            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
            alt=""
            src="/edit05.svg"
          />
        </div>
        <div className="w-[21.44rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1.13rem]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[1rem]">
            <div className="relative w-[3rem] h-[3rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-29xl bg-white box-border w-[3rem] h-[3rem] overflow-hidden border-[1px] border-solid border-white">
                <img
                  className="absolute top-[0rem] left-[0rem] w-[1.63rem] h-[1.63rem] object-cover"
                  alt=""
                  src="/rectangle-12@2x.png"
                />
                <img
                  className="absolute top-[1.38rem] left-[0rem] w-[1.63rem] h-[1.63rem] object-cover"
                  alt=""
                  src="/rectangle-14@2x.png"
                />
                <img
                  className="absolute top-[0rem] left-[1.5rem] w-[1.63rem] h-[1.63rem] object-cover"
                  alt=""
                  src="/rectangle-13@2x.png"
                />
                <img
                  className="absolute top-[1.38rem] left-[1.5rem] w-[1.63rem] h-[1.63rem] object-cover"
                  alt=""
                  src="/rectangle-15@2x.png"
                />
              </div>
            </div>
            <div className="relative whitespace-pre-wrap inline-block w-[13.44rem] shrink-0">
              <p className="m-0">
                <span className="text-[1rem] font-medium font-mulish text-dimgray-100">
                  From
                </span>
                <span>
                  <span className="font-semibold font-mulish">{` `}</span>
                  <b>IGI Airport, T3</b>
                </span>
              </p>
              <p className="m-0">
                <span className="text-[1rem] font-medium font-mulish text-dimgray-100">
                  To
                </span>
                <span>
                  <span className="font-semibold font-mulish">{`  `}</span>
                  <b>Sector 28</b>
                </span>
              </p>
            </div>
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/call.svg"
          />
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/dotsvertical.svg"
          />
        </div>
      </div>
    );
  };
  
  export default Header;
  