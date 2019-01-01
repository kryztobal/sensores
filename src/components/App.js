import React, { Component } from 'react';
import {Container} from 'reactstrap'

import './App.css';
import Chart from './data';

import { connect } from 'react-redux';
import Actions from '../redux/Data/actions';

const { getDeviceList } = Actions;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deviceList: []
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

	render() {
		const { deviceList } = this.state;
		return <Container>{deviceList.map((device, index) => <Chart key={index} device={device} />)}</Container>;
	}
}

const mapStateToProps = (state) => ({
	deviceList: state.Data.deviceList
});

// const mapDispatchToProps = (dispatch) => ({
// getDeviceList
// });

export default connect(mapStateToProps, { getDeviceList })(App);
