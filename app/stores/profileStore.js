import EventEmitter from 'EventEmitter';

class ProfileStore extends EventEmitter {

    constructor() {
        super();
        this.avatars = [
            "ben",
            "bill",
            "claire",
            "david",
            "jane",
            "joey",
            "lou",
            "nicolas",
            "sophie"
        ];
        this.index = 0;
        this.loaded = {
            ben:        require('../assets/images/ben.png'),
            bill:       require('../assets/images/bill.png'),
            claire:     require('../assets/images/claire.png'),
            david:      require('../assets/images/david.png'),
            jane:       require('../assets/images/jane.png'),
            joey:       require('../assets/images/joey.png'),
            lou:        require('../assets/images/lou.png'),
            nicolas:    require('../assets/images/nicolas.png'),
            sophie:     require('../assets/images/sophie.png')
        };
    }

    toggleAvatar(name) {
        this.index++;
        if (this.index === this.avatars.length) {
            this.index = 0;
        }
        this.emit("AVATAR_CHANGED");
    }

    getCurrentAvatar() {
        return this.avatars[this.index];
    }

    getAvatarAsset(name) {
        return this.loaded[name];
    }

}

const profileStore = new ProfileStore();

export default profileStore;