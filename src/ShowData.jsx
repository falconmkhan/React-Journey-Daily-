import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const ShowData = () => {

    const { id } = useParams();
    const [data2, setData] = useState();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    });
if(!data2){
    return "loading"
}
    return (
        <>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="row g-0">

                            <div className="col-md-5 text-center p-4">
                                <img 
                                    src={data2.image} 
                                    alt={data2.title} 
                                    className="img-fluid"
                                    style={{ maxHeight: "300px", objectFit: "contain" }}
                                />
                            </div>
                            <div className="col-md-7 p-4">
                                <h3 className="fw-bold">{data2.title}</h3>
                                <p className="text-muted text-capitalize">
                                    Category: {data2.category}
                                </p>

                                <h4 className="text-success fw-bold mb-3">
                                    ${data2.price}
                                </h4>

                                <p>{data2.description}</p>

                                <button className="btn btn-primary mt-3">
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
};

export default ShowData;
