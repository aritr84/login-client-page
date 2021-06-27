
import React, {useRef, useState} from 'react'
import  { Form, Button,Alert} from "react-bootstrap"
import "../styles.css"
import { useAuth } from '../context/AuthContext'
import {Link, useHistory} from "react-router-dom"



export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    

    async function handleSubmit(e){
        e.preventDefault()
        
        

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")}
        catch{
            setError('failed to sign in')
        }
        setLoading(false)
    }
    return (
        <>
            <div className="parent">
                
            <div className="component">
            
            
                    <h2 className = "text-center mb-4"> Log In</h2>
                   
                    {error && <Alert variant="danger">{error}</Alert> }
                    <Form  onSubmit={handleSubmit}>
                        
                        
                            <Form.Group id ="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="email-form" type= "email" ref= {emailRef} required/>
                            </Form.Group>

                            <Form.Group id ="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type= "password" ref= {passwordRef} required/>
                            </Form.Group>

                            <Button disabled={loading} className = "w-100 mt-4" type = "submit">Sign In</Button>
                            <Button className = "w-100 mt-4 " variant="outline-primary">SignIn with Google</Button>
                            <div className ="w-100 text-center mt-3"><Link to="/forgot-password">Forgot Password?</Link></div>
                        
                    </Form>
        
     
            <div className ="w-100 text-center my-2">Need an Account? <Link to="/signup">Sign Up</Link></div>
            </div> </div></>
    )
}
