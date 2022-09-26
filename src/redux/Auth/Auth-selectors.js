export const getAuthLoading = ({ auth }) => auth.loading;
export const getAuthErrorMsg = ({ auth }) => auth.error;
export const getLoginState = ({auth}) => auth.isLogin
export const getAuthToken = (({auth}) => auth.token)
export const getAuthEmail = (({auth}) => auth.user.email)