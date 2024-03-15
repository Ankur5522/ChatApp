const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img 
                    alt="Tailwind css chat bubble component"
                    src={"https://randomuser.me/api/portraits"}
                />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-400`}>
            Hi! How are you doing?
        </div>
        <div className="chat-footer text-gray-300 opacity-50 text-xs flex gap-1 items-center">
            12:45
        </div>
    </div>
  )
}

export default Message
