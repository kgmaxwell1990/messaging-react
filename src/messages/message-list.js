import React, {Component} from 'react';
import MessageView from './message-view';

class MessageList extends Component {
    state = {
        messages: [{
            from: 'Martha',
            status: 'read',
            content: 'Hello'
        },
        {
            from: 'Katie',
            status: 'read',
            content: 'sdlljd flsj flsdkjf lkdjf lksdjf l'
        },
        {
            from: 'Pete',
            status: 'unread',
            content: 'jfjsldk d'
        },
        {
            from: 'Harriet',
            status: 'read',
            content: 'lkjsldkjflkj'
        }
        ]
    }

    render() {
        const MessageViews = this.state.messages.map(function(message,index){
        return(<MessageView key={index} message={message}/>)
    })
    return(
        <div>
            <h1>List of Messages</h1>
            {MessageViews}
        </div>
    )
}
}

export default MessageList