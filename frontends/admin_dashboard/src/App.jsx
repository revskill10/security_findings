import React from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { Link, Route, Routes } from "react-router-dom";
import { DashboardContainer, NewItemForm } from "ui-library";
import { ReactQueryClientProvider } from './ReactQueryContextProvider';

const { Item } = Menu;
export const App = () => {
  const [activeItem, setActiveItem] = React.useState("bio");

  const handleItemClick = (e, { name }) => setActiveItem(name);

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
            <Route path="/dashboard" element={<ReactQueryClientProvider><DashboardContainer itemUrl={(item) => `/details/${item.id}`} /></ReactQueryClientProvider>} />
            <Route path="/" element={<ReactQueryClientProvider><DashboardContainer itemUrl={(item) => `/details/${item.id}`} /></ReactQueryClientProvider>} />
            <Route path="/form" element={<NewItemForm />} />
          </Routes>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
