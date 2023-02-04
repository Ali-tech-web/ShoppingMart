import React, { useState } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../actions/cartActions'


const PaymentScreen = () => {
  const cart = useSelector(state => state.cart)
  const navigate = useNavigate()
  const { shippingAddress } = cart

  if (!shippingAddress){
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    console.log('I am in event : ', e)
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return <FormContainer>
    <CheckoutSteps step1 step2 step3 />
    <h1>Payment Method</h1>
    <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label>
                Select Method
            </Form.Label>
            <Col>
                <Form.Check 
                type='radio' 
                label='Paypal or Credit Card' 
                id='PayPal' 
                name='paymentMethod' 
                value='PayPal' 
                checked 
                onChange={(e) => setPaymentMethod(e.target.value)}>
                </Form.Check> 

                {/* <Form.Check 
                type='radio' 
                label='Stripe' 
                id='Stripe' 
                name='paymentMethod' 
                value='Stripe' 
                onChange={(e) => setPaymentMethod(e.target.value)}>
                </Form.Check>  */}
            </Col>
        </Form.Group>
      <Button type='submit' variant='primary' className='mt-2'>
        <Row>
          <Col>
            Continue
          </Col>
        </Row>
      </Button>
    </Form>
  </FormContainer>
}

export default PaymentScreen