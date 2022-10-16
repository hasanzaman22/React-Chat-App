import { useState } from "react";
import { sendMessage, isTyping, NewMessageForm } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, { text });

        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            
            <button type="submit" style={{backgroundColor: 'blue', color: 'white', height: '35px', margin: '2px', boxSizing: 'border-box', fontSize: '15px', float: 'right', borderRadius: '10px'}} className="send-button">
                <SendOutlined className="send-icon" />
            </button>

            <label style={{backgroundColor: 'blue', color: 'white', height: '33px', margin: '3px',boxSizing: 'border-box', fontSize: '20px', float: 'right', borderRadius: '10px'}} htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
        </form>
    );
}

export default MessageForm;