import React from "react";

import "./app.css";
import icon from "../usage/icon.png";
import icon1 from "../usage/icon1.png";
import fan from "../usage/fan.png";
import Switch from "react-switch";
import fetchStateData, { editStateData } from "../api/state";
class AppliancesComponent extends React.Component {
  constructor() {
    super();
    this.state = { checked: false, data: [] };
    this.handleChange = this.handleChange.bind(this);
    this.fetchDataAndSaveToState = this.fetchDataAndSaveToState.bind(this);
  }

  handleChange(checked) {
    editStateData(this.state.data.LED_state, checked ? 1 : 0);
    this.setState({ checked });
  }
  async fetchDataAndSaveToState() {
    const fetchedData = await fetchStateData();
    this.setState({
      checked: fetchedData.RELAY_state,
      data: fetchedData,
    });
  }
  componentDidMount() {
    this.fetchDataAndSaveToState();
    this.interval = setInterval(this.fetchDataAndSaveToState, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <img src={this.state.data.LED_state ? icon1 : icon} width={"90%"} height={"35%"}></img>
            <p style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}>
              Led: {this.state.data.LED_state ? "ON" : "OFF"}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <img src={fan} width={"80%"} height={"35%"}></img>
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              handleDiameter={28}
              offColor="#808080"
              onColor="#08f"
              height={40}
              width={70}
              borderRadius={6}
              activeBoxShadow="0px 0px 1px 2px #fffc35"
              uncheckedIcon={
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  OFF
                </p>
              }
              checkedIcon={
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                    height: "100%",
                  }}
                >
                  ON
                </p>
              }
              className="react-switch"
              id="small-radius-switch"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AppliancesComponent;
