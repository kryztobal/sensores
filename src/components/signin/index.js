import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Wrapper } from './index.styled';
import { Form, Input } from 'antd';
import Actions from '../../redux/Signin/actions'

import { 
  Row, 
  Col, 
  Label, 
  Button, 
  Container, 
  FormGroup, 
} from 'reactstrap';

const { login } = Actions
const FormItem = Form.Item

class index extends Component {

  handleSubmit(e) {
    e.preventDefault()
    let { form: { validateFields }, login } = this.props

    validateFields( (err, values) => {
      if(!err) login(values)
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
                <h2 className="login__title"> Ingresa a tu cuenta </h2>
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
                          <Label for="Password" className="login__label">Contraseña</Label>
                          <FormItem>
                            {getFieldDecorator('password', {
                              rules: [{ required: true, message: '*Requerido!' }],
                            })(
                              <Input className="login__input form-control" size="large" type="password" name="password" id="Password" />
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

export default connect(null, { login })(LoginForm);