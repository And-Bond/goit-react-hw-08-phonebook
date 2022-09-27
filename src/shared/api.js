import axios from "axios";

const instanseContacts = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/contacts'
})

export const getContacts = async(token) => {
    const {data} = await instanseContacts.get('/', {headers: {
        authorization: token
    }})
    return data;
}

export const postContact = async(contact, token) => {
    const {data} = await instanseContacts.post('/', contact, {headers: {
        authorization: token
    }})
    const {name, number, id} = data
    return {name, number, id}
}

export const deleteContact = async(contactId, token) => {
    const {data} = await instanseContacts.delete(`/${contactId}`, {headers: {
        authorization: token
    }})
    return {data,contactId}
}

const instanceAuth = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})

export const register = async(newUser) => {
    const {data: result} = await instanceAuth.post('/users/signup', newUser)
    instanceAuth.defaults.headers.common.authorization = result.token
    instanseContacts.defaults.headers.common.authorization = result.token
    return result
}

export const logIn = async(newLogin) => {
    const {data: result} = await instanceAuth.post('/users/login', newLogin)
    instanceAuth.defaults.headers.common.authorization = result.token
    instanseContacts.defaults.headers.common.authorization = result.token
    return result
}


export const logOut = async(token) => {
    instanceAuth.defaults.headers.common.authorization = token
    console.log(token)
    const {data: result} = await instanceAuth.post('/users/logout')
    instanceAuth.defaults.headers.common.authorization = null
    instanseContacts.defaults.headers.common.authorization = null
    return result
}