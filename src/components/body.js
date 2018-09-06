import React, { Component } from 'react';
import List from './List';
import '../styles/body.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BallDropComponent from './ball-drop';
import FluxTestComponent from './flux_components/container_component';

var data = [1,2,3];

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { changed: false };
  }

  render() {
    return (
      <div>
        {this.renderTabPortion()}
      </div>
    );
  }

  renderTabPortion() {
    return (
        <Tabs>
          <TabList>
            <Tab>Ball drop Animation</Tab>
            <Tab>Flux Test</Tab>
          </TabList>

          <TabPanel>
            <BallDropComponent />
          </TabPanel>

          <TabPanel>
            <FluxTestComponent />
          </TabPanel>
        </Tabs>
    );
  }

  changeBodyBackgroundColor() {
    this.setState({ changed: !this.state.changed });
  }

  handleButtonClick() {
    this.setState({ listVisible: !this.state.listVisible });
  }

  showList() {
    return <List className = "list" data = { data }/>
  }
}

export default Body;

/// HAPI JS, Docker, Docker Composite, Docker Swamp, Nex, JEST
