import { ChatEngine } from 'react-chat-engine';

function Chat() {
	// const projectID = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID;
	// const secret = process.env.REACT_APP_CHAT_ENGINE_SECRET;

	return (
		<div style={{ width: '100vw'}}>
			<ChatEngine
				projectID='xxxx'
				userName='krishchopra'
				userSecret='xxxx'
			/>
		</div>
	);
}

export default Chat;

// import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

// const Chat = () => {
//     return (
//         <ChatEngineWrapper>
//             <ChatSocket 
//                 projectID='95549bb7-2cb3-4d7a-9954-d0964bb41bc0'
//                 chatID='252883'
//                 chatAccessKey='helloman123'
//                 senderUsername='krishchopra'
//             />

//             <ChatFeed activeChat='252883' /> 
//         </ChatEngineWrapper>
//     )
// }

// export default Chat
