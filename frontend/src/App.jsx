import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import Container from './components/Container/Container'
import Form from './components/Form/Form'
import Table from './components/Table/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000")
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <>
      <Container>
        <h2>Usuários</h2>
        <Form />
        <Table users={users} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  )
}

export default App
