import React from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { Link, Route, Routes } from "react-router-dom";
import { DashboardContainer, NewItemForm, ItemDetailContainer } from "ui-library";

export const App = () => {

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
            <Route path="/dashboard" element={<DashboardContainer itemUrl={(itemId) => `/details/${itemId}`} />} />
            <Route path="/" element={<DashboardContainer itemUrl={(itemId) => `/details/${itemId}`} />} />
            <Route path="/form" element={<NewItemForm />} />
            <Route path="/details/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
