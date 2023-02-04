import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import  { listProducts } from '../actions/productActions'

const Homescreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList

  console.log('Printing error : ', error)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const renderedProducts = products.map((product) => {
        return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                 <Product product={product}/>
            </Col>
        )
   })
  
  return (
    <>
        <h1>Latest products</h1>
        { loading ? <Loader/> : error ? <Message variant='danger'> {error} </Message> : (
        <Row>
          {renderedProducts}
        </Row>) 
        }
    </>
  )
}

export default Homescreen