import React, { Component } from 'react';
import {
	Container,
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

import { connect } from 'react-redux';
import Actions from '../redux/Data/actions';

const { getDeviceList } = Actions;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      deviceList: [],
      isOpen:false
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

  _hanldeOpen = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

	render() {
		const { deviceList } = this.state;
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
				<Container>{deviceList.map((device, index) => <Chart key={index} device={device} />)}</Container>;
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
