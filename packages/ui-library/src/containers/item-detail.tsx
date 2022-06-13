import React from 'react';
import { ItemDetail } from "../components/item-detail";
import { useGetItem } from 'items_service_client';
import { QueryClientProvider } from "react-query";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const { itemId } = useParams<'itemId'>();
    const { data, isLoading, isError } = useGetItem(itemId || '1');
    if (isLoading) return <div>...</div>;
    if (isError) return <div>Error</div>;
    const item = data?.data?.data;

    if (!item) return null;
    return (
        <ItemDetail data={item}  />
    )
}

const Wrapped = () => {
    return (
        <QueryClientProvider client={(window as any).queryClient} contextSharing={true}><ItemDetailContainer /></QueryClientProvider>
    )
}

export { Wrapped as ItemDetailContainer };