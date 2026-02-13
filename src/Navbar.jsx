import { BrowserRouter, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>

                    </li>
                    <li>
                        <Link to="/conditionals">Conditional Page</Link>

                    </li>
                    <li>
                        <Link to="/attributes">Attribute Page</Link>

                    </li>
                    <li>
                        <Link to="/propss">Props Page</Link>

                    </li>
                    <li>
                        <Link to="/parent">Props Parent Page</Link>
                    </li>
                    <li>
                        <Link to="/router">Router Page</Link>

                    </li>
                    <li>
                        <Link to="/hooks">Hooks Page</Link>

                    </li>
                    <li>
                        <Link to="/fetchdata">Fetch Data</Link>

                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar