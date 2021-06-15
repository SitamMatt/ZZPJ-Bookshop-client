import { respond } from './_respond';
import FormalData from "form-data"

export async function post(request) {
	const message = {
		grant_type: 'password',
		client_id: 'springboot-bookshop-microservice',
		// client_secret: '34fbd57a-a0b2-4ad0-a124-9189db36d04b',
		client_secret: '493dc668-bf5c-463e-8cd1-e4019c545603',
		username: request.body.email,
		password: request.body.password
	};
	let formBody = []
    for (var property in message) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(message[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }

      console.log(formBody)

	const body = await fetch(
		`http://zzpj-keycloak.westeurope.azurecontainer.io:8080/auth/realms/bookshop-realm/protocol/openid-connect/token`,
		// `http://localhost:8080/auth/realms/bookshop-realm/protocol/openid-connect/token`,
		{
            method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body: formBody.join("&")
		}
	)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});

        console.log(body)

	return respond(body);
}
