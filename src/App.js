import ChatFeed from "./components/ChatFeed";
import { 
    ChatEngine, 
    ChatList, ChatCard, NewChatForm,
    ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
} from 'react-chat-engine'
import LoginForm from './components/LoginForm'

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    
    return (
        <ChatEngine
            height="100vh"
            projectID="YOUR_PROJECT_ID"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
            renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
            renderNewChatForm={(creds) => <NewChatForm creds={creds} />} 
            renderChatHeader={(chat) => <ChatHeader />}
            renderIceBreaker={(chat) => <IceBreaker />}
            renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
            renderIsTyping={(typers) => <IsTyping />}
            renderConnectionBar={(chat) => <ConnectionBar />}
            renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
            renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
            renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
            renderPeopleSettings={(creds, chat) => <PeopleSettings />}
            renderPhotosSettings={(chat) => <PhotosSettings />}
            renderOptionsSettings={(creds, chat) => <OptionsSettings />}
        />
    )
}

export default App;