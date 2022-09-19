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
    baseURL: 'https://connections-api.herokuapp.com/'
})

export const register = async(newUser) => {
    const {data: result} = await instanceAuth.post(newUser)
    const {user, token} = result
    return {user, token}
}