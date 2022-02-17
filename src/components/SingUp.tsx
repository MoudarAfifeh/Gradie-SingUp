import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Form, Button, Alert } from 'react-bootstrap';
import img from '../Assets/img/iPhone Mockup.png';

export interface IState {
    email: string,
    password: string,
    checkBox: boolean
}

export const SingUp = () => {
    const [input, setInput] = useState<IState>({
        email: "",
        password: "",
        checkBox: false
    })
    const [error, setError] = React.useState<string>("");
    const emailRef = React.useRef<HTMLInputElement | null>(null);
    const passwordRef = React.useRef<HTMLInputElement | null>(null);
    const checkBoxRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (emailRef.current?.value === "" || emailRef.current?.value === "") {
            return setError("All fields are mandatory");
        }
        setError("");
        setInput({
            email: (emailRef.current as HTMLInputElement).value,
            password: (passwordRef.current as HTMLInputElement).value,
            checkBox: (checkBoxRef.current as HTMLInputElement).checked
        });

        (emailRef.current as HTMLInputElement).value = "";
        (passwordRef.current as HTMLInputElement).value = "";
        (checkBoxRef.current as HTMLInputElement).checked = false;

    }
    const CustomComp = (
        <div>
            By creating an account, you will agree to the <span className='custom-text'>Terms & Conditions</span>
        </div>
    );
    useEffect(() => {
        console.log(input)
    }, [input])
    return (
        <div className="page my-xs-0 my-sm-5 mx-xl-11 mt-md-8">
            <Container className='px-0 w-100'>
                <Row className='no-gutters'>
                    <Col lg={6} md={6} sm={12} className='left-side'>
                        <h1 className='mt-5 center header-left'>Gradie</h1>
                        <p className='mb-0 text-left'>Beuatifull gradients in seconds.</p>
                        <div className="image">
                            <img src={img} className='left-img' />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className=' right-side'>
                        <h1 className='my-5'>LogIn</h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className='input-title'>Email</Form.Label>
                                <Form.Control type="email" placeholder="john@example.com" ref={emailRef} />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label className='input-title'>Password</Form.Label>
                                <Form.Control type="password" placeholder="At least 8 characters" ref={passwordRef} />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="formBasicCheckbox">
                                <Form.Check className='checkbox' type="checkbox" label={CustomComp} ref={checkBoxRef} />
                            </Form.Group>
                            <Button variant="primary" className='mb-5' type="submit">
                                Create an Account
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

