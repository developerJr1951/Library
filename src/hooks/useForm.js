import { useState } from "react"

export const useForm = (initialValue = {}) => {
    const [values, setValues] = useState(initialValue)


    const reset = () => {
        setValues(initialValue)
    }

    const handleInputChange = ({ target }) => {

        // console.log(target.name);

        setValues(
            { ...values, [target.name]: target.value }
        )


    }
    return [values, handleInputChange, reset]
}