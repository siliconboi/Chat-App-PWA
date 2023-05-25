export const Message = ({message})=>{
return(
    <div>
       <div>
        {message.message}
        </div> 
        <img src={message.image}/>
    </div>
)
}