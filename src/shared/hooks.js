import { useDispatch } from "react-redux"
import { authRegister } from "redux/Auth/Auth-operation"

export const useRegFormSubmit = ({name, email, password}) => {
    const dispatch = useDispatch()
    const newUser = {name, email, password}
    dispatch(authRegister(newUser))
}   