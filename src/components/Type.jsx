const Type = () => {
    return (
      <div className="left-[0rem] bg-whitesmoke-100 flex flex-col pt-[0rem] px-[0rem]items-start justify-start text-left text-[0.88rem] text-gray-200 font-mulish">
        <div className="bg-whitesmoke-100 w-[23.44rem] flex flex-row px-[1rem] box-border items-center justify-end">
          <div className="flex-1 rounded-lg bg-white flex flex-row items-center justify-start gap-[1rem]">
            <div className="flex-1 flex flex-row items-start justify-start">
              <input placeholder="Reply to @Rohit Yadav" className="relative text-silver h-8 w-[16rem]"/>
            </div>
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/paperclip.svg"
            />
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/send03.svg"
            />
          </div>
        </div>
       </div>
    );
  };
  
  export default Type;
  