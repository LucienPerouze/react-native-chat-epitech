import EventEmitter from 'EventEmitter';

class MessageStore extends EventEmitter {

    constructor() {
        super();
        this.messages = [];
    }

    addMessages(messages) {
        this.messages = this.messages.concat(messages);
        this.emit("NEW_MESSAGES");
    }

    getMessages() {
        return this.messages;
    }

}

const messageStore = new MessageStore;

export default messageStore;