/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io TestOps API v1
 * Qase TestOps API v1 Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AuthorListResponse } from '../model';
// @ts-ignore
import { AuthorResponse } from '../model';
/**
 * AuthorsApi - axios parameter creator
 * @export
 */
export const AuthorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method allows to retrieve a specific author. 
         * @summary Get a specific author
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthor: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getAuthor', 'id', id)
            const localVarPath = `/v1/author/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve all authors in selected project. 
         * @summary Get all authors
         * @param {string} [search] Provide a string that will be used to search by name.
         * @param {'app' | 'user'} [type] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthors: async (search?: string, type?: 'app' | 'user', limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/author`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthorsApi - functional programming interface
 * @export
 */
export const AuthorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthorsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows to retrieve a specific author. 
         * @summary Get a specific author
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthor(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthorResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthor(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve all authors in selected project. 
         * @summary Get all authors
         * @param {string} [search] Provide a string that will be used to search by name.
         * @param {'app' | 'user'} [type] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthors(search?: string, type?: 'app' | 'user', limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthorListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthors(search, type, limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthorsApi - factory interface
 * @export
 */
export const AuthorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthorsApiFp(configuration)
    return {
        /**
         * This method allows to retrieve a specific author. 
         * @summary Get a specific author
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthor(id: number, options?: any): AxiosPromise<AuthorResponse> {
            return localVarFp.getAuthor(id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve all authors in selected project. 
         * @summary Get all authors
         * @param {string} [search] Provide a string that will be used to search by name.
         * @param {'app' | 'user'} [type] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthors(search?: string, type?: 'app' | 'user', limit?: number, offset?: number, options?: any): AxiosPromise<AuthorListResponse> {
            return localVarFp.getAuthors(search, type, limit, offset, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthorsApi - object-oriented interface
 * @export
 * @class AuthorsApi
 * @extends {BaseAPI}
 */
export class AuthorsApi extends BaseAPI {
    /**
     * This method allows to retrieve a specific author. 
     * @summary Get a specific author
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorsApi
     */
    public getAuthor(id: number, options?: AxiosRequestConfig) {
        return AuthorsApiFp(this.configuration).getAuthor(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve all authors in selected project. 
     * @summary Get all authors
     * @param {string} [search] Provide a string that will be used to search by name.
     * @param {'app' | 'user'} [type] 
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthorsApi
     */
    public getAuthors(search?: string, type?: 'app' | 'user', limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return AuthorsApiFp(this.configuration).getAuthors(search, type, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }
}