import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Wrapper } from "./index.styled";
import { Form, Input } from "antd";
import Actions from "../../redux/Signin/actions";
import { Row, Col, Label, Button, Container, FormGroup } from "reactstrap";

const { login } = Actions;
const FormItem = Form.Item;

class index extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let {
      form: { validateFields },
      login
    } = this.props;

    validateFields((err, values) => {
      if (!err) login(values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {this.props.isLoggin ? null : (
          <Wrapper>
            <Container>
              <Row>
                <Col
                  xs="12"
                  style={{
                    margin: "0 auto",
                    padding: "22px",
                    width: "100%",
                    maxWidth: "450px"
                  }}
                >
                  <div className="login">
                    <h2 className="login__title"> Ingresa a tu cuenta </h2>
                    <Row>
                      <Col style={{ margin: "0 auto", padding: "22px" }}>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                          <FormGroup className="login__form">
                            <Label for="User" className="login__label">
                              User
                            </Label>
                            <FormItem>
                              {getFieldDecorator("user", {
                                rules: [
                                  { required: true, message: "*Requerido!" }
                                ]
                              })(
                                <Input
                                  className="login__input form-control"
                                  size="large"
                                  type="text"
                                  name="user"
                                  id="User"
                                />
                              )}
                            </FormItem>
                          </FormGroup>
                          <FormGroup className="login__form">
                            <Label for="Password" className="login__label">
                              Contraseña
                            </Label>
                            <FormItem>
                              {getFieldDecorator("password", {
                                rules: [
                                  { required: true, message: "*Requerido!" }
                                ]
                              })(
                                <Input
                                  className="login__input form-control"
                                  size="large"
                                  type="password"
                                  name="password"
                                  id="Password"
                                />
                              )}
                            </FormItem>
                          </FormGroup>
                          <Button className="btn-rounded" type="submit">
                            Login
                          </Button>
                        </Form>
                      </Col>
                    </Row>
                    <p style={{ color: "red" }}>{this.props.error}</p>
                    <a href="/register">No tengo cuenta</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Wrapper>
        )}
      </div>
    );
  }
}

const LoginForm = Form.create()(index);

const mapStateToProps = state => ({
  error: state.Signin.error,
  isLoggin: state.Signin.token !== null
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
