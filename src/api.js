import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://6319ebce8e51a64d2bf08d59.mockapi.io/api/contacts'
})

export const getContacts = async() => {
    const {data} = await instanse.get('/')
    return data;
}

export const postContact = async(contact) => {
    const {data} = await instanse.post('/', contact)
    const {name, phone, id} = data
    return {name, phone, id}
}

export const deleteContact = async(contactId) => {
    const {data} = await instanse.delete(`/${contactId}`)
    const {name, phone, id} = data
    return {name, phone, id}
}
