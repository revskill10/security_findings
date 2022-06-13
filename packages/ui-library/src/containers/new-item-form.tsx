import React from 'react';
import { NewItemForm } from "../components/new-item-form";
import { useCreateItem } from 'items_service_client';
import { QueryClientProvider } from "react-query";
import { ItemCreationParams } from 'items_service_client/dist/model';

const NewItemFormContainer = () => {
    const [resMsg, setResMsg] = React.useState<string | null>(null);
    const { mutateAsync, isLoading } = useCreateItem();

    const onSubmit = async (data: ItemCreationParams) => {
        try {
            const res = await mutateAsync({
                data
            });
            console.log('res', res);
            setResMsg('Item has been created');
        } catch (err: unknown) {
            setResMsg((err as Error).message);
        }
    }
    return (
        <React.Fragment>
            <NewItemForm isLoading={isLoading} onSubmit={onSubmit}  />
            {resMsg}
        </React.Fragment>
    )
}

const Wrapped = () => {
    return (
        <QueryClientProvider client={(window as any).queryClient} contextSharing={true}><NewItemFormContainer /></QueryClientProvider>
    )
}

export { Wrapped as NewItemFormContainer };