import React from 'react';
import { Dashboard } from "../components/dashboard";
import { useGetItems } from 'items_service_client';
import { QueryClientProvider } from "react-query";
import { Link } from 'react-router-dom';
import { ItemProps } from 'items_service_client/dist/model';

export type DashboardContainerProps = {
    itemUrl: (itemId: string) => string;
};

const DashboardContainer = ({ itemUrl }: DashboardContainerProps) => {
    const { data, isLoading, isError } = useGetItems();
    if (isLoading) return <div>...</div>;
    if (isError) return <div>Error</div>;
    const items = data?.data?.data;

    if (!items) return null;
    const renderElement = (item: ItemProps) => (
        <Link to={itemUrl(String(item.id))}>{item.id}</Link>
    )
    return (
        <Dashboard renderElement={renderElement} data={items}  />
    )
}

const Wrapped = (props: DashboardContainerProps) => {
    return (
        <QueryClientProvider client={(window as any).queryClient} contextSharing={true}><DashboardContainer {...props} /></QueryClientProvider>
    )
}

export { Wrapped as DashboardContainer };