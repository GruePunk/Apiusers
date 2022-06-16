import fetch from 'node-fetch';

const url = "https://reqres.in/";
const users = "api/users/";
const Db = [];

async function responsefetch(url, api) {	
	let user = 1;
	let response;
	let status;
	let data;
	while (true) {
		response = await fetch(`${url}${api}${user}`);
		status = await response.status;
		data = await response.json();
		if (status == 200) {
			Db.push(data.data);
			user ++;
			} else break;	
		};
	}

await responsefetch(url, users);
console.log("----------------------------------");
console.log(Db);
