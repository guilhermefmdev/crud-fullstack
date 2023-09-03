import { useRef } from 'react'
import './Form.css'
const Form = () => {
    const ref = useRef()
    return (
        <>
            <div className='form' ref={ref}>
                <div className='input-area'>
                    <label>Nome:</label>
                    <input type="text" />
                </div>
                <div className='input-area'>
                    <label>E-mail:</label>
                    <input type="email" />
                </div>
                <div className='input-area'>
                    <label>Telefone:</label>
                    <input type="text" />
                </div>
                <div className='input-area'>
                    <label>Nascimento:</label>
                    <input type="date" />
                </div>

                <button type='submit'>SALVAR</button>
            </div>
        </>
    )
}
export default Form