import useCookies from "react-cookie";


export class API {

    // Login - get user authentication Token
    static loginUser(credentials) {
        return fetch('http://127.0.0.1:8080/api/v1/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
    }

    static getSeries(token) {
        return fetch('http://127.0.0.1:8080/api/v1/auth/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
    }

}