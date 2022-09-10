import { createAction } from "@reduxjs/toolkit"

export const fetchContactsSuccess = createAction('contacts/fetch/success')
export const fetchContactsLoading = createAction('contacts/fetch/loading')
export const fetchContactsError = createAction('contacts/fetch/error')

export const postContactsSuccess = createAction('contacts/post/success')
export const postContactsLoading = createAction('contacts/post/loading')
export const postContactsError = createAction('contacts/post/error')

export const deleteContactsSuccess = createAction('contacts/delete/success')
export const deleteContactsLoading = createAction('contacts/delete/loading')
export const deleteContactsError = createAction('contacts/delete/error')