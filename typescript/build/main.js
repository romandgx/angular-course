class RenderableList {
    constructor() {
        this.list = [];
    }
    add(str) {
        this.list.push(str);
    }
    render() {
        for (let item of this.list) {
            console.log(`name: ${item.name.title} ${item.name.first} ${item.name.last}`);
            console.log(`email: ${item.email}`);
            console.log(`phone: ${item.phone}`);
            console.log(`avatar: ${item.picture.medium}`);
            console.log(`------------------------------`);
        }
    }
    clear() {
        this.list = [];
    }
}
const users = new RenderableList();
function getData(url) {
    fetch(url)
        .then(response => response.json(), error => console.error(error))
        .then(response => {
        let data = response.results[0];
        if (data.dob.age > (2018 - 1975)) {
            users.add(data);
            return users.list.length < 2 ? getData(url) : getData(url + `/?seed=${data.email}`);
        }
    })
        .catch(error => console.error(error));
}
//# sourceMappingURL=main.js.map