import reactLogo from './assets/react.svg'
import { useState } from 'react'

function Header() {
  const [table2, setCount2] = useState(2)
  const [table5, setCount5] = useState(5)


    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>First React App</h1>
            <div className="card">
                <button onClick={() => setCount2((table2) => table2 += 2)}>
                    Table Of 2 = {table2}
                </button>
                <button onClick={() => setCount5((table5) => table5 += 5)}>
                    Table Of 5 =  {table5}
                </button>
            </div>
        </>
    )
}

export default Header