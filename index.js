const fs = require('fs');

class Database {
    constructor(path = './database') {
        if (!fs.existsSync(path)) {
            fs.mkdir(path, err => console.log(err))
        }
        this.path = path;
    }

    async get(key) {
        try {
            let data = fs.readFileSync(`${this.path}/${key}`, {
                    encoding: 'ascii'
                }),
                value = data;

            try {
                value = JSON.parse(data);
            } catch (err) {

            }

            return value;
        } catch (err) {
            return null;
        };
    }

    async set(key, value) {
        let data = value;
        try {
            data = JSON.stringify(value);
        } catch (err) {}
        fs.writeFileSync(`${this.path}/${key}`, data)
    }

    async delete(key) {
        fs.unlinkSync(`${this.path}/${key}`, err => console.log(err))
    }

    async list(prefix = '') {
        let keys = fs.readdirSync(this.path),
            files = [];
        keys.forEach(key => {
            if (key.startsWith(prefix))
                files.push(key);
        });
        return files;
    }
}

module.exports = Database;