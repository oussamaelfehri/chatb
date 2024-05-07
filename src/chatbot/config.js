// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../chatbot/DogPicture'
import Final from './Final.jsx';
import Overview from '../widgets/overview';
import CustomMessage from './customMesage';
import Age from './age'
import './chatbotCustomStyles.css'
const botName = "HappilyEver";

const config = {
  // initialMessages: [createChatBotMessage(`Hi, I'm ${botName}`)],
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,
  {
    withAvatar: true,
    delay: 400,
    widget: "overview"
  }),
  // createCustomMessage('Test', 'final'),
],
  botName: botName,
  state: {
    gist: '',
    infoBox: '',
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
    age: (props) => <Age {...props} />,
    final: (props) => <Final {...props} />,
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: 'final',
      widgetFunc: (props) => <Final {...props} />,
    },
  ],customStyles: {
    // Existing styles:
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
    // Additional custom styles:
    userMessageBox: {
      backgroundColor: '#4a9eda',
    },
    chatContainer: {
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
    },
    // If the library supports styling the avatar:
    avatarContainer: {
      backgroundColor: '#5ccc9d',
    },
    // If you want to customize the send button:
    sendButton: {
      backgroundColor: '#376B7E',
      color: '#FFFFFF',
    },
  },
};

export default config;