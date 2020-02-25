import React from "react";
import "./App.css";
import { Button } from "antd";
import List from "./Itemlist";
import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  render() {
    return (
      <div className="main">
        <div className="App">
          <Layout>
            <Content style={{ height: "100vh" }}>
              <Row style={{ height: "100%" }}>
                <Col
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  span={12}
                >
                  <form onSubmit={this.onSubmit}>
                    <input
                      placeholder="Add Things to do"
                      value={this.state.term}
                      onChange={this.onChange}
                    />
                    <Button htmlType="submit" type="danger">
                      Submit
                    </Button>
                  </form>
                </Col>
                <Col
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center"
                  }}
                  span={12}
                >
                  <div className="itemList">
                    <List items={this.state.items} />
                  </div>
                </Col>
              </Row>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}
