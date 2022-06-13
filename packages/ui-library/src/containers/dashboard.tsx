import React from 'react';
import { Dashboard, DashboardProps } from "../dashboard";
import { useGetItems } from 'items_service_client';
import { QueryClient, QueryClientProvider } from "react-query";

export type DashboardContainerProps = Omit<DashboardProps, 'data'>;
const removeEmpty = (obj: any) => {
    let newObj: any = {};
    Object.keys(obj).forEach((key: string) => {
      if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
      else if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
};
const DashboardContainer = ({ itemUrl }: DashboardContainerProps) => {
    const { data, isLoading, isError } = useGetItems();
    if (isLoading) return <div>...</div>;
    if (isError) return <div>Error</div>;
    const items = data?.data?.data.map(removeEmpty);

    if (!items) return null;
    return (
        <Dashboard itemUrl={itemUrl} data={items}  />
    )
}

const Wrapped = (props: DashboardContainerProps) => {
    return (
        <QueryClientProvider client={(window as any).queryClient} contextSharing={true}><DashboardContainer {...props} /></QueryClientProvider>
    )
}

export { Wrapped as DashboardContainer };