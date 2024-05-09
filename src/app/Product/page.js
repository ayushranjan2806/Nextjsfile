// pages/Product.js
import Link from "next/link";


export default function Product() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/Product/nirma" style={{textDecoration: 'none'}}>
          product
          </Link>
        </li>
        <li>
          <Link href="/Product/2">
          Product
          </Link>
        </li>
        <li>
          <Link href="/Product/3">
            
          </Link>
        </li>
        <li>
          <Link href="/Product/4">
            
          </Link>
        </li>
      </ul>
    </div>
  );
}
