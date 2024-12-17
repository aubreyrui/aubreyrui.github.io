import { useState } from 'react';

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="text"
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange} />
            </label>
            <label>
                First Name:
                <input type="text"
                name="first_name" 
                value={inputs.first_name || ""} 
                onChange={handleChange}/>
            </label>
            <label>
                Last Name: <input type="text"
                name="last_name" 
                value={inputs.last_name || ""} 
                onChange={handleChange}/>
            </label>
            <label>
                Phone Number (09xx-xxx-xxxx):
                <input type="text"
                name = "phone_number"
                values = {inputs.phone_number || ""}
                onChange = {handleChange}
                />
            </label>
            <input type="submit"/>
        </form>
    )
}

export default MyForm;