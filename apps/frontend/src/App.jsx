import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Dashboard } from "ui-library";
const { Item } = Menu;
export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu.Menu fluid={'fluid'} vertical={'vertical'} tabular={'tabular'}>
            <Menu.Item>
              <Link to={"/form"}>Form</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/dashboard"}>Dashboard</Link>
            </Menu.Item>
          </Menu.Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
          <Dashboard itemUrl={(item) => `/details/${item.id}`} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
