import React, {Component} from 'react';
import {Card, CardTitle, CardText, Col, Row} from 'reactstrap'
import {API_URL} from '../../settings/server_url'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment'

const data = [
	{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
	{ name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
	{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
	{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
	{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
	{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
	{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];


const GraphMonnit = (props) => {
  const sdata = []
  props.lectures.map((lecture)=>{
    
    sdata.push({
      'timestamp':moment.unix(lecture.timestamp).format("DD MMMM hh:mm:ss"),
      'value':lecture.lecture.dataValue
    })
  })
	return (
		<LineChart width={600} height={300} data={sdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			<XAxis dataKey="timestamp" />
			<YAxis />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
		</LineChart>
	);
};

const GraphKontakt = (props) => {
  const sdata = []
  props.lectures.map((lecture)=>{
    sdata.push({
      'timestamp':moment.unix(lecture.timestamp).format("DD MMMM hh:mm:ss"),
      'rssi':lecture.lecture.rssi
    })
  })
	return (
		<LineChart width={600} height={300} data={sdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			<XAxis dataKey="timestamp" />
			<YAxis />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="rssi" stroke="#8884d8" activeDot={{ r: 8 }} />
		</LineChart>
	);
};

class Chart extends Component {
	constructor(props){
		super(props)
		this.state = {
			deviceId:this.props.device.deviceId,
			lectures:[],
			count:0,
			scannedCount:0
		}
	}

	componentDidMount(){
		fetch(`${API_URL}/devices/${this.state.deviceId}`, {
			method: 'GET',
			headers: {
				'Access-Control-Allow-Headers': '*'
			}
		})
		.then(response => response.json())
		.then(content =>{
      if (content.status === 'success'){
        this.setState({
          lectures:content.data.Items,
          count:content.data.Count,
          scannedCount: content.data.ScannedCount
        })
      }
      else {
        console.log("dejar cargado este cuadrito")
      }
		})
	}

	render(){
    console.log("time", moment.unix(1546231628733).format("hh:mm:ss"))
    const { device } = this.props;
    const { lectures } = this.state
		return(
			<Row>
		<Col md="4">
			<Card body >
				<CardTitle>Device name: {device.deviceName}</CardTitle>
				<CardText>Device owner: {device.deviceOwner}</CardText>
				<CardText>Device provider: {device.deviceProvider}</CardText>
				<CardText>Device type: {device.deviceType}</CardText>
	  		</Card>
		</Col>
    <Col md="8">
    {
      device.deviceProvider === 'kontakt' ? <GraphKontakt lectures={lectures}/> : <GraphMonnit lectures={lectures}/>
    }
		</Col>
	</Row> 
		)
	}
}
export default Chart;
