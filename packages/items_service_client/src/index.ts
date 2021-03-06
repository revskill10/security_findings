/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * items-service
 * OpenAPI spec version: 1.0.0
 */
import axios,{
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  HealthCheck200,
  GetItems200,
  GetItem200,
  CreateItem201,
  ItemCreationParams
} from './model'

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


export const healthCheck = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<HealthCheck200>> => {
    return axios.get(
      `/healthcheck`,options
    );
  }


export const getHealthCheckQueryKey = () => [`/healthcheck`];

    
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>
export type HealthCheckQueryError = AxiosError<unknown>

export const useHealthCheck = <TData = Awaited<ReturnType<typeof healthCheck>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getHealthCheckQueryKey();

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof healthCheck>>> = ({ signal }) => healthCheck({ signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof healthCheck>>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}

export const getItems = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetItems200>> => {
    return axios.get(
      `/api/v1/items`,options
    );
  }


export const getGetItemsQueryKey = () => [`/api/v1/items`];

    
export type GetItemsQueryResult = NonNullable<Awaited<ReturnType<typeof getItems>>>
export type GetItemsQueryError = AxiosError<unknown>

export const useGetItems = <TData = Awaited<ReturnType<typeof getItems>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getItems>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetItemsQueryKey();

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getItems>>> = ({ signal }) => getItems({ signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof getItems>>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}

export const getItem = (
    itemId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetItem200>> => {
    return axios.get(
      `/api/v1/items/${itemId}`,options
    );
  }


export const getGetItemQueryKey = (itemId: string,) => [`/api/v1/items/${itemId}`];

    
export type GetItemQueryResult = NonNullable<Awaited<ReturnType<typeof getItem>>>
export type GetItemQueryError = AxiosError<unknown>

export const useGetItem = <TData = Awaited<ReturnType<typeof getItem>>, TError = AxiosError<unknown>>(
 itemId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getItem>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetItemQueryKey(itemId);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getItem>>> = ({ signal }) => getItem(itemId, { signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof getItem>>, TError, TData>(queryKey, queryFn, {enabled: !!(itemId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}

export const createItem = (
    itemCreationParams: ItemCreationParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<CreateItem201>> => {
    return axios.post(
      `/api/v1/item`,
      itemCreationParams,options
    );
  }



    export type CreateItemMutationResult = NonNullable<Awaited<ReturnType<typeof createItem>>>
    export type CreateItemMutationBody = ItemCreationParams
    export type CreateItemMutationError = AxiosError<unknown>

    export const useCreateItem = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createItem>>, TError,{data: ItemCreationParams}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {}

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createItem>>, {data: ItemCreationParams}> = (props) => {
          const {data} = props ?? {};

          return  createItem(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof createItem>>, TError, {data: ItemCreationParams}, TContext>(mutationFn, mutationOptions)
    }
    