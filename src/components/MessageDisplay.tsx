interface UserMessage {
  role: string,
  content: string,
}


interface MessagesDisplayProps{
  message: UserMessage
}

const MessageDisplay = ({message}: MessagesDisplayProps) => {
    return (
      <div className="message-display">
        <p id="icon">⊚</p>
        <p>{message.role}</p>
        <p>{message.content}</p>
      </div>
    );
  }
  
  export default MessageDisplay;
    
    