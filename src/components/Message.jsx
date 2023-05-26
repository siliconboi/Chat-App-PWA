export const Message = ({message})=>{
    console.log(message.sender.image)
return(
       <div className="inline my-4 h-fit my-8 w-fit flex flex-row mx-4 items-start justify-start gap-[0.5rem]">
        <div className="h-fit w-[1.5rem] h-[1.5rem]">
        <div className=" top-[0rem] left-[0rem] rounded-980xl bg-white w-[1.5rem] h-[1.5rem] overflow-hidden"> 
        <img src={message.sender.image}/>
        </div>{
            message.sender.self?(

                <div className=" w-fit h-fit rounded-tl-none rounded-tr-xl rounded-b-xl bg-green text-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] flex flex-col p-[0.5rem] items-center justify-center">
                <div className=" w-fit flex flex-col items-end">
                  <div className="self-stretch relative text-justify w-[calc(100vw-8rem)]">
              {message.message}
              </div>
              </div>
              </div>
            ):(

                <div className=" w-fit h-fit rounded-tl-none rounded-tr-xl rounded-b-xl bg-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] flex flex-col p-[0.5rem] items-center justify-center">
                <div className=" w-fit flex flex-col items-start">
                  <div className="self-stretch relative text-justify w-[calc(100vw-8rem)]">
              {message.message}
              </div>
              </div>
              </div>
            )
        }
        </div>
        </div>
)
}