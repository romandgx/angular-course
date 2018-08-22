
// методы render() и clear() нужно вызывать из консоли, т.к. все отображение идет туда.
// очень надеюсь что я правильно поянл ДЗ относительно TS...

interface IUser {
	name: {
		title: string,
		first: string,
		last: string
	};
	email: string;
	phone: string;
	picture: { medium: string }
}

class RenderableList<T> {
	list: Array<T> = []

	add(str: T): void {
		this.list.push(str)
	}

	render(): void {
		for(let item of this.list) {
			console.log(`name: ${item.name.title} ${item.name.first} ${item.name.last}`)
			console.log(`email: ${item.email}`)
			console.log(`phone: ${item.phone}`)
			console.log(`avatar: ${item.picture.medium}`)
			console.log(`------------------------------`)
		}
	}

	clear(): void {
		this.list = []
	}
}

const users = new RenderableList<IUser>()

function getData(url: string): void {

	fetch(url)
	.then(
		response => response.json(),
		error => console.error(error)
	)
	.then(
		response => {
			let data = response.results[0];
			if(data.dob.age > (2018 - 1975)){
				users.add(data)
				return users.list.length < 2 ? getData(url) : getData(url + `/?seed=${data.email}`)
			}
		}
	)
	.catch(error => console.error(error))
}
