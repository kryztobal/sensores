import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Card, CardTitle, CardText, Col, Row } from "reactstrap";
import { API_URL } from "../../settings/server_url";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import moment from "moment";
import "./index.css";

const GraphMonnit = props => {
  const data = [];
  props.lectures.map(lecture => {
    data.push({
      timestamp: moment.unix(lecture.timestamp).format("DD MMMM hh:mm:ss"),
      value: lecture.lecture.dataValue
    });
  });
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="timestamp" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

const GraphKontakt = props => {
  const data = [];
  console.log("lectures",props.lectures)
  props.lectures.map(lecture => {
    data.push({
      timestamp: moment.unix(lecture.timestamp).format("DD MMMM hh:mm:ss"),
      rssi: lecture.lecture.rssi
    });
  });
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="timestamp" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="rssi"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

const Spinner = () => {
  return (
    <div className="spin__container">
      <Loader type="Oval" color=" #325dfe " height={80} width={80} />
    </div>
  );
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: this.props.device.deviceId,
      lectures: [],
      count: 0,
      scannedCount: 0,
      loaded: false
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/devices/${this.state.deviceId}/10`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Headers": "*"
      }
    })
      .then(response => response.json())
      .then(content => {
        if (content.status === "success") {
          this.setState({
            lectures: content.data.Items,
            count: content.data.Count,
            scannedCount: content.data.ScannedCount,
            loaded: true
          });
        } else {
          this.setState({
            loaded: false
          });
        }
      });
  }

  render() {
    const { device } = this.props;
    const { lectures, scannedCount, loaded } = this.state;
    return (
      <Row>
        <Col md="4">
          <Card body>
            <CardTitle>Device name: {device.deviceName}</CardTitle>
            <CardText>Device owner: {device.deviceOwner}</CardText>
            <CardText>Device provider: {device.deviceProvider}</CardText>
            <CardText>Device type: {device.deviceType}</CardText>
            <CardText>N° Lectures: {scannedCount}</CardText>
          </Card>
        </Col>
        <Col md="8">
          {loaded ? (
            device.deviceProvider === "kontakt" ? (
              <GraphKontakt lectures={lectures} />
            ) : (
              <GraphMonnit lectures={lectures} />
            )
          ) : (
            <Spinner />
          )}
        </Col>
      </Row>
    );
  }
}
export default Chart;
