import EventEmitter from 'EventEmitter';

class MessageStore extends EventEmitter {

    constructor() {
        super();
        this.messages = [
            {
                avatar: "ben",
                me: false,
                content: "Here is a message"
            },
            {
                avatar: "jane",
                me: true,
                content: "Here is another message zqokd oqzkdomqkz dmokq zdmokq zmdokq zdmokq zmdokq zdmokq mozdkqmo zdkqmoz dkqmozd kmoqzdk moqkzd moqk dzm qkzd qozdk moqzkdmoq kzdmqkz dmoqkzd moqkzd m"
            },
            {
                avatar: "jane",
                me: false,
                content: "lorem ipsum jkse kshfeihfklh klfhslkefhislefh lksuhef lkshuf elkhs elkfhs lekfhs klefh klsehf klsehf lksheflksufh lksehf lkshef lksuhf lkusf lksehf lku"
            },
            {
                avatar: "jane",
                me: false,
                content: "lorem ipsum jkse kshfeihfklh klfhslkefhislefh lksuhef lkshuf elkhs elkfhs lekfhs klefh klsehf klsehf lksheflksufh lksehf lkshef lksuhf lkusf lksehf lku"
            },
            {
                avatar: "jane",
                me: false,
                content: "lorem ipsum jkse kshfeihfklh klfhslkefhislefh lksuhef lkshuf elkhs elkfhs lekfhs klefh klsehf klsehf lksheflksufh lksehf lkshef lksuhf lkusf lksehf lku"
            },
            {
                avatar: "jane",
                me: false,
                content: "lorem ipsum jkse kshfeihfklh klfhslkefhislefh lksuhef lkshuf elkhs elkfhs lekfhs klefh klsehf klsehf lksheflksufh lksehf lkshef lksuhf lkusf lksehf lku"
            },
            {
                avatar: "jane",
                me: false,
                content: "lorem ipsum jkse kshfeihfklh klfhslkefhislefh lksuhef lkshuf elkhs elkfhs lekfhs klefh klsehf klsehf lksheflksufh lksehf lkshef lksuhf lkusf lksehf lku"
            },
            {
                avatar: "jane",
                me: false,
                content: "lorem ipsum jkse kshfeihfklh klfhslkefhislefh lksuhef lkshuf elkhs elkfhs lekfhs klefh klsehf klsehf lksheflksufh lksehf lkshef lksuhf lkusf lksehf lku"
            },
            {
                avatar: "jane",
                me: false,
                content: "lorem ipsum jkse kshfeihfklh klfhslkefhislefh lksuhef lkshuf elkhs elkfhs lekfhs klefh klsehf klsehf lksheflksufh lksehf lkshef lksuhf lkusf lksehf lku"
            }
        ];
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