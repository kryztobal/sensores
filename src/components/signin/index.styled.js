import styled from 'styled-components';

//const urlImage = require('../../../assets/login/bg-inicia.jpg');

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6f8dff;
  background-size: cover;
  background-position: center center;

  .login {
    background-color: #fff;
    text-align: center;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 1px 20px rgba(0,0,0,.25),
                0 2px 30px rgba(0,0,0,.25);
    font-family: 'Source Sans Pro', sans-serif;
  }

  .login__logo {
    display: block;
    margin: 20px auto;
  }

  .login__title {
    color: rgb(149, 147, 164);
    font-size:28px;
    margin: 20px auto;
    font-weight: normal;
  }

  .login__form { text-align: left; }

  .form-control {
    height: calc(2.875rem + 2px);
    background-color: #ebf1f1;
    border: none;
    transition: .5s all ease;
  }

  .login__label {
    font-weight: 400;
    font-size: 18px;
    color: rgb(97,103,115,1);
  }

  .link__container {
    display:flex;
    justify-content:space-between;
  }

  .login__link {
    font-weight:500;
    color: #503850;
    font-size: 15px;
    padding: 16px 0;
    margin: -14px 2px;

  }

  .btn-rounded {
    border-radius: 20px;
    padding-left: 28px;
    padding-right: 28px;
    margin-top: 24px;
    margin-bottom: 48px;
    border: none;
  }

  .btn-secondary:hover {
    color: #fff;
    background-color: #6f8dff;
    border-color: #6f8dff;
  }

  @media (max-width: 768.98px) {
     .btn-rounded {
      margin-top: 12px;
      margin-bottom: 15px;
    }
    .login__title{
      margin: 16px auto;
    }
    .form-control {
    height: calc(2.5rem + 8px);
    background-color: #ebf1f1;
    border: none;
    }
  }
`
export { Wrapper }
