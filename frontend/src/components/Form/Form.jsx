import { useEffect, useRef } from 'react'
import './Form.css'
import { toast } from 'react-toastify'
import axios from 'axios'

const Form = ({ getUsers, onEdit, setOnEdit } = Form.propTypes) => {
    const ref = useRef()
    useEffect(() => {

        if (onEdit) {
            const user = ref.current

            user.nome.value = onEdit.nome
            user.email.value = onEdit.email
            user.phone.value = onEdit.phone
            user.data_nascimento.value = onEdit.data_nascimento
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = ref.current
        if (
            !user.nome.value ||
            !user.email.value ||
            !user.phone.value ||
            !user.data_nascimento.value
        ) {
            return toast.warn("Preencha todos os campos!")
        }

        if(onEdit) {
            await axios
            .put("http://localhost:3000/" + onEdit.id, {
                nome: user.nome.value,
                email: user.email.value,
                phone: user.phone.value,
                data_nascimento: user.data_nascimento.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data))
        } else {
            await axios
            .post("http://localhost:3000", {
                nome: user.nome.value,
                email: user.email.value,
                phone: user.phone.value,
                data_nascimento: user.data_nascimento.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data))
        }

        user.nome.value = ""
        user.email.value = ""
        user.phone.value = ""
        user.data_nascimento.value = ""

        setOnEdit(null)
        getUsers()
    }

    return (
        <>
            <form className='form' ref={ref} onSubmit={handleSubmit}>
                <div className='input-area'>
                    <label>Nome:</label>
                    <input name="nome" type="text" />
                </div>
                <div className='input-area'>
                    <label>E-mail:</label>
                    <input name='email' type="email" />
                </div>
                <div className='input-area'>
                    <label>Telefone:</label>
                    <input name="phone" type="text" />
                </div>
                <div className='input-area'>
                    <label>Nascimento:</label>
                    <input name='data_nascimento' type="date" />
                </div>

                <button type='submit'>SALVAR</button>
            </form>
        </>
    )
}
export default Form