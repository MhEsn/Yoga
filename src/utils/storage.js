export default {
    async setItem(key, value) {
        try {
            return new Promise.resolve().then(() => {
                localStorage.setItem(key, value);
            });
        } catch (error) {
            // console.error('AsyncStorage#setItem error: ' + error.message);
        }
    },
    async getItem(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
            // return new Promise.resolve().then(() => {
            //     return JSON.parse(localStorage.getItem(key));
            // });
        } catch (e) {
            // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
        }
    },
    async removeItem(key) {
        return Promise.resolve().then(() => {
            return localStorage.removeItem(key);
        });
    },
};
