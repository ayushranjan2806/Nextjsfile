// pages/products.js
'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                    <Image 
                        src={product.image} 
                        alt={product.title} 
                        width={200} 
                        height={200} 
                    />
                </div>
            ))}
        </div>
    );
}

export default Products;
