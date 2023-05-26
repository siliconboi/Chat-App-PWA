const Message = ({ message }) => {
  console.log(message.sender.image);
  return (
    <>
      {message.sender.self ? (
        <div className=" h-fit my-8 w-fit flex flex-row mx-4 items-end justify-end gap-[0.5rem]">
          <div className=" mx-7 h-fit w-[1.5rem] ">
            <div className=" inline-block  top-[0rem] left-[0rem] rounded-980xl bg-white w-[1.5rem] h-[1.5rem] overflow-hidden">
              <img className="rounded-full" src={message.sender.image} />
            </div>
            <div className=" inline-block w-fit h-fit rounded-br-none rounded-bl-xl rounded-t-xl bg-[#1C63D5] text-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] p-[0.5rem] items-center justify-center">
              <div className=" w-fit flex flex-col items-end">
                <div className="self-stretch relative text-justify w-[calc(100vw-8rem)]">
                  {message.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" h-fit my-8 w-fit flex flex-row mx-4 items-start justify-start gap-[0.5rem]">
          <div className=" inline-block  h-fit w-[1.5rem] ">
            <div className="top-[0rem] left-[0rem] rounded-980xl bg-white w-[1.5rem] h-[1.5rem] overflow-hidden">
              <img className="rounded-full" src={message.sender.image} />
            </div>
            <div className="inline-block  w-fit h-fit rounded-tl-none rounded-tr-xl rounded-b-xl bg-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] p-[0.5rem] items-center justify-center">
              <div className=" w-fit flex flex-col items-start">
                <div className="self-stretch relative text-justify w-[calc(100vw-8rem)]">
                  {message.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
