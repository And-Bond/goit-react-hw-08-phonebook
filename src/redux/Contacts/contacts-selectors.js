export const getContacts = ({items}) => items
export const getLoading = (({loading}) => loading)
export const getFilteredContacts = ({items, filter}) => {
    const lowerFilter = filter.toLowerCase()
    const filteredContacts = items.filter(({name}) => {
        const lowerName = name.toLowerCase()
        return lowerName.includes(lowerFilter)
    })
    return filteredContacts
}