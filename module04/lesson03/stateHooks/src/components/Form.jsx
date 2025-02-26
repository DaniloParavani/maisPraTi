import { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const [errors, setErrors] = useState({});
    
    const[submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Nome é obrigatório";

        if (!formData.email) {
            newErrors.email = "E-mail é obrigatório";
        }
        else if (!/\S+@\S+\S+.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail Inválido'
        }

        if (!formData.password) {
            newErrors.password = "O campo senha é obrigatório.";
        }
        else if (formData.password.length < 8) {
            newErrors.password = "O campo de senha precisa ter pelo menos 8 caracteres.";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "O campo senha é obrigatório.";
        }
        else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "A senha é diferente da primeira."
        }

        return newErrors;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true)
            setErrors({})
        }
        else {
            setErrors(validationErrors)
        }
    }

    return (
        <div>
            <h2>Registre-se</h2>
            {submitted && <p>Registrado com sucesso!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label>E-mail: </label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label>Confirme sua senha: </label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )

}

export default RegistrationForm