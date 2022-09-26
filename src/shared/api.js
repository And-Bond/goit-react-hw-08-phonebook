import axios from "axios";

const instanseContacts = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/contacts'
})

export const getContacts = async() => {
    const {data} = await instanseContacts.get('/')
    return data;
}

export const postContact = async(contact) => {
    const {data} = await instanseContacts.post('/', contact)
    const {name, number, id} = data
    return {name, number, id}
}

export const deleteContact = async(contactId) => {
    const {data} = await instanseContacts.delete(`/${contactId}`)
    const {name, phone, id} = data
    return {name, phone, id}
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


export const logOut = async() => {
    const {data: result} = await instanceAuth.post('/users/logout')
    instanceAuth.defaults.headers.common.authorization = null
    instanseContacts.defaults.headers.common.authorization = null
    return result
}