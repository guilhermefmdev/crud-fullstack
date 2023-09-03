import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import Container from './components/Container/Container'
import Form from './components/Form/Form'

function App() {
  return (
    <>
      <Container>
        <h2>Usuários</h2>
        <Form />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  )
}

export default App
