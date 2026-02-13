import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const FetchData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));

    })

    return (
        <>
            <h1>Fetch Data From Fake Store API</h1>

            <div className="container-fluid">
                <div className="card-grid">
                    {data.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title.substring(0, 40)}...</h3>
                            <p className="price">${item.price}</p>
                            <Link to={`/fetchdata/product/${item.id}`} className="btn">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default FetchData
