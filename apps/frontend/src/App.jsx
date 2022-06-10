import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { Link, Route, Routes } from "react-router-dom";
import { Dashboard, NewItemForm } from "ui-library";
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
              <Link to={"/form"}>New item</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/dashboard"}>Dashboard</Link>
            </Menu.Item>
          </Menu.Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
          <Routes>
              <Route path="/dashboard" element={<Dashboard itemUrl={(item) => `/details/${item.id}`} />} />
              <Route path="/" element={<Dashboard itemUrl={(item) => `/details/${item.id}`} />} />
              <Route path="/form" element={<NewItemForm />} />
            </Routes>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
