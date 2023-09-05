import { FaTrash, FaEdit } from 'react-icons/fa'
import './Table.css'

const Table = ({ users } = Table.propTypes) => {

    return (

        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => {
                        return <tr key={user.id}>
                            <td width="30%" >{user.nome}</td>
                            <td width="30%" >{user.email}</td>
                            <td width="20%" >{user.phone}</td>
                            <td className="user-btn" style={{textAlign: 'center'}}>
                                <FaEdit />
                            </td>
                            <td className="user-btn" style={{textAlign: 'center'}}>
                                <FaTrash />
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
export default Table