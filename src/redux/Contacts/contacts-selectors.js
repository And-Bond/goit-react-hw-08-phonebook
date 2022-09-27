export const getContacts = ({ contacts }) => contacts.items;
export const getLoading = ({ contacts }) => contacts.loading;
export const getFilteredContacts = ({ contacts }) => {
  const { items, filter } = contacts;
  const lowerFilter = filter.toLowerCase();
  const filteredContacts = items?.filter((contact) => {
    const lowerName = contact?.name.toLowerCase();
    return lowerName?.includes(lowerFilter);
  });
  return filteredContacts;
};
export const getContactsError = ({ contacts }) => contacts.error;
