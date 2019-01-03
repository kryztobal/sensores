import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Wrapper } from './index.styled';
import { Form, Input } from 'antd';
import Actions from '../../redux/Signup/actions'

import { 
  Row, 
  Col, 
  Label, 
  Button, 
  Container, 
  FormGroup, 
} from 'reactstrap';

const { signup } = Actions
const FormItem = Form.Item

class index extends Component {
  
  handleSubmit(e) {
    e.preventDefault()
    let { form: { validateFields }, signup } = this.props

    validateFields( (err, values) => {
      if(!err) signup(values)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Wrapper> 
        <Container>
          <Row >
            <Col xs= "12" style= {{margin: '0 auto', padding:'22px', width:'100%', maxWidth:'450px'}} > 
              <div className="login" >
                <h2 className="login__title"> Registro </h2>
                <Row>
                  <Col style= {{margin: '0 auto',  padding:'22px'}}>
                    <Form onSubmit={ this.handleSubmit.bind(this) } >
                        <FormGroup className="login__form">
                          <Label for="Email" className="login__label" >Email</Label>
                          <FormItem>
                            {getFieldDecorator('email', {
                              rules: [{ required: true, message: '*Requerido!' }],
                            })(
                              <Input className="login__input form-control" size="large" type="email" name="email" id="Email" />
                            )}
                          </FormItem>
                        </FormGroup>
                        <FormGroup className="login__form">
                          <Label for="User" className="login__label" >User</Label>
                          <FormItem>
                            {getFieldDecorator('user', {
                              rules: [{ required: true, message: '*Requerido!' }],
                            })(
                              <Input className="login__input form-control" size="large" type="user" name="user" id="User" />
                            )}
                          </FormItem>
                        </FormGroup>
                        <FormGroup className="login__form">
                          <Label for="Password" className="login__label">Password</Label>
                          <FormItem>
                            {getFieldDecorator('password', {
                              rules: [{ required: true, message: '*Requerido!' }],
                            })(
                              <Input className="login__input form-control" size="large" type="password" name="password" id="Password" />
                            )}
                          </FormItem>
                      </FormGroup>
                      <FormGroup className="login__form">
                          <Label for="Password" className="login__label">Confirmar Password</Label>
                          <FormItem>
                            {getFieldDecorator('confirm_password', {
                              rules: [{ required: true, message: '*Requerido!' }],
                            })(
                              <Input className="login__input form-control" size="large" type="password" name="confirm_password" id="confirm_password" />
                            )}
                          </FormItem>
                      </FormGroup>
                      <Button className="btn-rounded" type="submit" >Login</Button>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

const LoginForm = Form.create()(index);

export default connect(null, { signup })(LoginForm);