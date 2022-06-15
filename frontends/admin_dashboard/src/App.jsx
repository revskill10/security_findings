import React from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { DashboardContainer, NewItemFormContainer, ItemDetailContainer, SampleTable } from "ui-library";

export const App = () => {
  const path = useLocation();
  return (
    <Grid>
      <Grid.Column width={3}>
        <Menu pointing vertical>
          <Menu.Item active={path?.pathname === '/form'}>
            <Link to={"/form"}>New item</Link>
          </Menu.Item>
          <Menu.Item active={['/dashboard', '/'].includes(path?.pathname)}>
            <Link to={"/dashboard"}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item active={['/sample'].includes(path?.pathname)}>
            <Link to={"/sample"}>Sample</Link>
          </Menu.Item>
        </Menu>
      </Grid.Column>

      <Grid.Column stretched width={13}>
        <Segment>
          <Routes>
            <Route path="/dashboard" element={<DashboardContainer itemUrl={(itemId) => `/details/${itemId}`} />} />
            <Route path="/" element={<DashboardContainer itemUrl={(itemId) => `/details/${itemId}`} />} />
            <Route path="/form" element={<NewItemFormContainer />} />
            <Route path="/details/:itemId" element={<ItemDetailContainer />} />
            <Route path="/sample" element={<SampleTable />} />
          </Routes>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
