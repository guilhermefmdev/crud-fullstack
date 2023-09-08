import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import './Table.css'
import axios from 'axios'
const Table = ({ users, setUsers, setOnEdit } = Table.propTypes) => {
    const handleEdit = (user) => {
        setOnEdit(user)
    }
    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:3000/" + id)
        .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id)
            setUsers(newArray)
            toast.success(data)
        })
        .catch(({ data }) => toast.error(data))

        setOnEdit(null)
    }
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
                    users.map((user, i) => {
                        return <tr key={i}>
                            <td width="30%" >{user.nome}</td>
                            <td width="30%" >{user.email}</td>
                            <td width="20%" >{user.phone}</td>
                            <td className="user-btn" style={{textAlign: 'center'}}>
                                <FaEdit onClick={() => handleEdit(user) }/>
                            </td>
                            <td  className="user-btn" style={{textAlign: 'center'}}>
                                <FaTrash onClick={() => handleDelete(user.id) }/>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
export default Table