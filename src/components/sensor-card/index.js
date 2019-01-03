import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './index.css'

const SensorCard = (props) => {
	const { device } = props;
	return (
		<Card body className="card">
			<CardTitle>Device name: {device.deviceName}</CardTitle>
			<CardText>Device owner: {device.deviceOwner}</CardText>
			<CardText>Device provider: {device.deviceProvider}</CardText>
			<CardText>Device type: {device.deviceType}</CardText>
		</Card>
	);
};

export default SensorCard;
