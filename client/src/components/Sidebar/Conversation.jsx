import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation, lastIdx, emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
        <div className={`flex gap-3 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
            ${isSelected ? "bg-sky-500" : ""} 
        `}
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img
                        src={conversation.profilePic}
                        alt="avatar"
                    />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-200">{conversation.fullName}</p>
                    <span className="text-xl">{emoji}</span>
                </div>
            </div>
        </div>
        {!lastIdx && <div className="bg-slate-700 my-1 py-0 h-[0.2px] " />}
        </>
    );
};

export default Conversation;
