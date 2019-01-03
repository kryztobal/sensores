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
      width={400}
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
  props.lectures.map(lecture => {
    data.push({
      timestamp: moment.unix(lecture.timestamp).format("DD MMMM hh:mm:ss"),
      rssi: lecture.lecture.rssi
    });
  });
  return (
    <LineChart
      width={400}
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
      deviceId: null,
      lectures: [],
      count: 0,
      scannedCount: 0,
      loaded: false,
      device:null
    };
  }

  componentDidMount(){
    console.log(this.props.device)
    if(this.props.device){
      setInterval(()=>{
        
        console.log("asdasda")
      }, 1000)
    }
  }

  componentWillReceiveProps(props) {
    if (props.device) {
      fetch(`${API_URL}/devices/${props.device.deviceId}/10`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Headers": "*",
          token:
            "e178bec211fe4851e7913d8a1b367baf06a9758183241c2c3b56438a8b37c1ef82c30ff49dc44523ad8fbb19acf4eb0d218cae6bba8a96697237d64800ebb7ab",
          user: "cmunoz"
        }
      })
        .then(response => response.json())
        .then(content => {
          if (content.status === "success") {
            this.setState({
              lectures: content.data.Items,
              count: content.data.Count,
              scannedCount: content.data.ScannedCount,
              loaded: true,
              deviceId: props.device.deviceId
            });
          } else {
            this.setState({
              loaded: false
            });
          }
        });
    }
  }

  componentDidMount() {
    if (this.state.deviceId) {
    }
  }

  render() {
    const { device } = this.props;
    const { lectures, scannedCount, loaded } = this.state;
    setInterval(()=>{
      fetch(`${API_URL}/devices/${this.props.device.deviceId}/10`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Headers": "*",
          token:
            "e178bec211fe4851e7913d8a1b367baf06a9758183241c2c3b56438a8b37c1ef82c30ff49dc44523ad8fbb19acf4eb0d218cae6bba8a96697237d64800ebb7ab",
          user: "cmunoz"
        }
      })
        .then(response => response.json())
        .then(content => {
          if (content.status === "success") {
            this.setState({
              lectures: content.data.Items,
              count: content.data.Count,
              scannedCount: content.data.ScannedCount,
              loaded: true,
              deviceId: this.props.device.deviceId
            });
          } else {
            this.setState({
              loaded: false
            });
          }
        });
    }, 5000)
    return (
      <Row>
        {loaded ? (
          device.deviceProvider === "kontakt" ? (
            <GraphKontakt lectures={lectures} />
          ) : (
            <GraphMonnit lectures={lectures} />
          )
        ) : (
          <Spinner />
        )}
      </Row>
    );
  }
}
export default Chart;
