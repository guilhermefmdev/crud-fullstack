import './Container.css'
const Container = ({ children } = Container.propTypes) => {
    return (
        <main className="container">
            {children}
        </main>
    )
}
export default Container