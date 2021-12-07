import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="
        d0d30dc0-2667-429e-a1ae-16e5465daa53"
        userName="PewPewPanda"
        userSecret="Ilikecats01"
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    );
}

export default App;
