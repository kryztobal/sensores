import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./App.css";
import Chart from "./data";
import SensorCard from "./sensor-card";

import { connect } from "react-redux";
import Actions from "../redux/Data/actions";
import authActions from "../redux/Signin/actions";

const { getDeviceList } = Actions;
const { logout } = authActions;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
      isOpen: false,
      cuadrante1: null,
      cuadrante2: null,
      cuadrante3: null,
      cuadrante4: null
    };
  }

  componentDidMount() {
    const { getDeviceList } = this.props;
    getDeviceList();
  }

  componentWillReceiveProps(props) {
    if (props.deviceList && props.deviceList.length > 0) {
      this.setState({
        deviceList: props.deviceList
      });
    }
  }

  _hanldeOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onDragStart = (ev, device) => {
    ev.dataTransfer.setData("device", JSON.stringify(device));
  };

  onDragOver = e => {
    e.preventDefault();
  };

  onDrop = (e, cuadrante) => {
    let device = e.dataTransfer.getData("device");
    this.setState({
      [cuadrante]: JSON.parse(device)
    });
  };

  render() {
    const { deviceList } = this.state;

    return (
      <div>
        {this.props.isLoggin ? (
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Sensores</NavbarBrand>
              <NavbarToggler onClick={this._hanldeOpen} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Opciones
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.props.logout}>
                        Sign out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
            <br />

            <Container style={{ margin: 0, maxWidth: "100%" }}>
              <Row>
                <Col md="3">
                  <div className="app">
                    <div className="scroller">
                      {deviceList.map((device, index) => (
                        <div
                          key={index}
                          draggable={true}
                          onDragStart={e => this.onDragStart(e, device)}
                        >
                          <SensorCard device={device} />
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
                <Col md="9">
                  <Row>
                    <Col md="6">
                      <div
                        onDragOver={e => this.onDragOver(e)}
                        onDrop={e => this.onDrop(e, "cuadrante1")}
                        className="chart-content"
                      >
                        {this.state.cuadrante1 ? (
                          <Chart device={this.state.cuadrante1} />
                        ) : null}
                      </div>
                    </Col>
                    <Col md="6">
                      <div
                        onDragOver={e => this.onDragOver(e)}
                        onDrop={e => this.onDrop(e, "cuadrante2")}
                        className="chart-content"
                      >
                        {this.state.cuadrante2 ? (
                          <Chart device={this.state.cuadrante2} />
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md="6">
                      <div
                        onDragOver={e => this.onDragOver(e)}
                        onDrop={e => this.onDrop(e, "cuadrante3")}
                        className="chart-content"
                      >
                        {this.state.cuadrante3 ? (
                          <Chart device={this.state.cuadrante3} />
                        ) : null}
                      </div>
                    </Col>
                    <Col md="6">
                      <div
                        onDragOver={e => this.onDragOver(e)}
                        onDrop={e => this.onDrop(e, "cuadrante4")}
                        className="chart-content"
                      >
                        {this.state.cuadrante4 ? (
                          <Chart device={this.state.cuadrante4} />
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deviceList: state.Data.deviceList,
  isLoggin: state.Signin.token !== null
});

// const mapDispatchToProps = (dispatch) => ({
// getDeviceList
// });

export default connect(
  mapStateToProps,
  { getDeviceList, logout }
)(App);
