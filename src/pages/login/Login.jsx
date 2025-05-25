import React from 'react'
import FormInput from '../../components/common/FormInput'
import ButtonCustom from '../../components/common/ButtonCustom'
import { Form } from 'react-router-dom'

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method='POST' className='card card-body'>
        <div className="">
          <h1 className="text-center text-orange-400 text-5xl">Login</h1>
        </div>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Password" />
        <ButtonCustom text="Login" className="ml-96" />
        <p>Do you have account? <a href="">Register Now</a></p>
      </Form>
    </section>
  )
}

export default Login