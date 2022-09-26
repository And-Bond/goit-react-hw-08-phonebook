import axios from "axios";

const instanseMockapi = axios.create({
    baseURL: 'https://6319ebce8e51a64d2bf08d59.mockapi.io/api/contacts'
})

export const getContacts = async() => {
    const {data} = await instanseMockapi.get('/')
    return data;
}

export const postContact = async(contact) => {
    const {data} = await instanseMockapi.post('/', contact)
    const {name, phone, id} = data
    return {name, phone, id}
}

export const deleteContact = async(contactId) => {
    const {data} = await instanseMockapi.delete(`/${contactId}`)
    const {name, phone, id} = data
    return {name, phone, id}
}

const instanceAuth = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})

export const register = async(newUser) => {
    const {data: result} = await instanceAuth.post('/users/signup', newUser)
    return result
}

export const logIn = async(newLogin) => {
    const {data: result} = await instanceAuth.post('/users/login', newLogin)
    instanceAuth.defaults.headers.common.authorization = result.token
    return result
}


export const logOut = async() => {
    const {data: result} = await instanceAuth.post('/users/logout')
    return result
}