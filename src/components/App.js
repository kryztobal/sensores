import React, { Component } from 'react';
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
} from 'reactstrap';

import './App.css';
import Chart from './data';
import SensorCard from './sensor-card';

import { connect } from 'react-redux';
import Actions from '../redux/Data/actions';

const { getDeviceList } = Actions;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deviceList: [],
			isOpen: false
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

	render() {
		const { deviceList } = this.state;
		const deviceListTest = [
			{ deviceName: 'sensor 1', deviceOwner: 'asdasdas', deviceProvider: 'asdasdsa', deviceType: 'asdasdsa' },
			{ deviceName: 'sensor 2', deviceOwner: 'asdasdas', deviceProvider: 'asdasdsa', deviceType: 'asdasdsa' },
			{ deviceName: 'sensor 3', deviceOwner: 'asdasdas', deviceProvider: 'asdasdsa', deviceType: 'asdasdsa' },
			{ deviceName: 'sensor 4', deviceOwner: 'asdasdas', deviceProvider: 'asdasdsa', deviceType: 'asdasdsa' }
		];
		return (
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
									<DropdownItem>Sign out</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
				<br />

				<Container style={{ margin: 0 }}>
					<Row>
						<Col md="4">
							<div className="app">
								<div className="scroller">
									{deviceListTest.map((device, index) => <SensorCard key={index} device={device} />)}
								</div>
							</div>
						</Col>
						<Col md="8">
							<Row>
								<Col md="6">
									<div className="chart-content" />
								</Col>
								<Col md="6">
									<div className="chart-content" />
								</Col>
							</Row>
							<Row>
								<Col md="6">
									<div className="chart-content" />
								</Col>
								<Col md="6">
									<div className="chart-content" />
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	deviceList: state.Data.deviceList
});

// const mapDispatchToProps = (dispatch) => ({
// getDeviceList
// });

export default connect(mapStateToProps, { getDeviceList })(App);
