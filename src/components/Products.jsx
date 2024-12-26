import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Products() {

  let [products, setProducts] = useState([])
  let navigate = useNavigate();

  useEffect(() => {

    axios.get('http://localhost:8000/products')
      .then(res => { console.log('ress = ', res); setProducts(res.data) })
      .catch(err => console.log(err));
  }, [])

  let onClickProductEdit = (p) => {
    navigate(`/products/${p.id}`, { state: p })
  }

  return (
    <>
      <div> <h3>Products Details</h3></div>
      <hr />
      <table className='table table-bordered'>

        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {products.map((p) => {
          return (
            <tbody>
              <tr>
                <td>{p.title}</td>
                <td>{p.price}</td>
                <td>
                  <button className='btn btn-sm btn-secondary' onClick={() => onClickProductEdit(p)}>Edit</button>
                  <button className='btn btn-sm btn-warning ms-1'>Delete</button>
                </td>
              </tr>
            </tbody>
          )
        })
        }
      </table>
    </>
  )
}

export default Products