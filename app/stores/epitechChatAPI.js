import messageStore from "./messageStore";

export default class EpitechChatAPI {

    constructor() {
        this.apiUrl = "http://epitech-chat.getsandbox.com/";
        this.index = 0;
        this.abort = false;
    }

    fetchNewMessages(userId) {
        return fetch(this.apiUrl + 'getMessages/' + userId + "/" + this.index)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.messages.length) {
                    messageStore.addMessages(responseJson.messages);
                    this.index = responseJson.lastIndex;
                }
                if (!this.abort) {
                    this.fetchNewMessages(userId);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    abortFetchingNewMessages() {
        this.abort = true;
    }

    addMessage(userId, avatar, content) {
        return fetch(this.apiUrl + 'addMessage',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    avatar,
                    content,
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}