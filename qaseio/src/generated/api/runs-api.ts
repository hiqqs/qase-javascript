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
import { BaseResponse } from '../model';
// @ts-ignore
import { IdResponse } from '../model';
// @ts-ignore
import { RunCreate } from '../model';
// @ts-ignore
import { RunListResponse } from '../model';
// @ts-ignore
import { RunPublic } from '../model';
// @ts-ignore
import { RunPublicResponse } from '../model';
// @ts-ignore
import { RunResponse } from '../model';
/**
 * RunsApi - axios parameter creator
 * @export
 */
export const RunsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method allows to complete a specific run. 
         * @summary Complete a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeRun: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('completeRun', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('completeRun', 'id', id)
            const localVarPath = `/v1/run/{code}/{id}/complete`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * This method allows to create a run in selected project. 
         * @summary Create a new run
         * @param {string} code Code of project, where to search entities.
         * @param {RunCreate} runCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRun: async (code: string, runCreate: RunCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('createRun', 'code', code)
            // verify required parameter 'runCreate' is not null or undefined
            assertParamExists('createRun', 'runCreate', runCreate)
            const localVarPath = `/v1/run/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(runCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method completely deletes a run from repository. 
         * @summary Delete run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRun: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('deleteRun', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRun', 'id', id)
            const localVarPath = `/v1/run/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * This method allows to retrieve a specific run. 
         * @summary Get a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} [include] Include a list of related entities IDs into response. Should be separated by comma. Possible values: cases, defects 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRun: async (code: string, id: number, include?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getRun', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRun', 'id', id)
            const localVarPath = `/v1/run/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
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

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve all runs stored in selected project. 
         * @summary Get all runs
         * @param {string} code Code of project, where to search entities.
         * @param {string} [search] 
         * @param {string} [status] A list of status values separated by comma. Possible values: in_progress, passed, failed, aborted, active (deprecated), complete (deprecated), abort (deprecated). 
         * @param {number} [milestone] 
         * @param {number} [environment] 
         * @param {number} [fromStartTime] 
         * @param {number} [toStartTime] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {string} [include] Include a list of related entities IDs into response. Should be separated by comma. Possible values: cases, defects 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRuns: async (code: string, search?: string, status?: string, milestone?: number, environment?: number, fromStartTime?: number, toStartTime?: number, limit?: number, offset?: number, include?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getRuns', 'code', code)
            const localVarPath = `/v1/run/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
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

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (milestone !== undefined) {
                localVarQueryParameter['milestone'] = milestone;
            }

            if (environment !== undefined) {
                localVarQueryParameter['environment'] = environment;
            }

            if (fromStartTime !== undefined) {
                localVarQueryParameter['from_start_time'] = fromStartTime;
            }

            if (toStartTime !== undefined) {
                localVarQueryParameter['to_start_time'] = toStartTime;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to update a publicity of specific run. 
         * @summary Update publicity of a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {RunPublic} runPublic 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRunPublicity: async (code: string, id: number, runPublic: RunPublic, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateRunPublicity', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRunPublicity', 'id', id)
            // verify required parameter 'runPublic' is not null or undefined
            assertParamExists('updateRunPublicity', 'runPublic', runPublic)
            const localVarPath = `/v1/run/{code}/{id}/public`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(runPublic, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RunsApi - functional programming interface
 * @export
 */
export const RunsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RunsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows to complete a specific run. 
         * @summary Complete a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completeRun(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completeRun(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to create a run in selected project. 
         * @summary Create a new run
         * @param {string} code Code of project, where to search entities.
         * @param {RunCreate} runCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRun(code: string, runCreate: RunCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRun(code, runCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method completely deletes a run from repository. 
         * @summary Delete run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRun(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRun(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve a specific run. 
         * @summary Get a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} [include] Include a list of related entities IDs into response. Should be separated by comma. Possible values: cases, defects 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRun(code: string, id: number, include?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRun(code, id, include, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve all runs stored in selected project. 
         * @summary Get all runs
         * @param {string} code Code of project, where to search entities.
         * @param {string} [search] 
         * @param {string} [status] A list of status values separated by comma. Possible values: in_progress, passed, failed, aborted, active (deprecated), complete (deprecated), abort (deprecated). 
         * @param {number} [milestone] 
         * @param {number} [environment] 
         * @param {number} [fromStartTime] 
         * @param {number} [toStartTime] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {string} [include] Include a list of related entities IDs into response. Should be separated by comma. Possible values: cases, defects 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRuns(code: string, search?: string, status?: string, milestone?: number, environment?: number, fromStartTime?: number, toStartTime?: number, limit?: number, offset?: number, include?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRuns(code, search, status, milestone, environment, fromStartTime, toStartTime, limit, offset, include, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to update a publicity of specific run. 
         * @summary Update publicity of a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {RunPublic} runPublic 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunPublicResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRunPublicity(code, id, runPublic, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RunsApi - factory interface
 * @export
 */
export const RunsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RunsApiFp(configuration)
    return {
        /**
         * This method allows to complete a specific run. 
         * @summary Complete a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completeRun(code: string, id: number, options?: any): AxiosPromise<BaseResponse> {
            return localVarFp.completeRun(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to create a run in selected project. 
         * @summary Create a new run
         * @param {string} code Code of project, where to search entities.
         * @param {RunCreate} runCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRun(code: string, runCreate: RunCreate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.createRun(code, runCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * This method completely deletes a run from repository. 
         * @summary Delete run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRun(code: string, id: number, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.deleteRun(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve a specific run. 
         * @summary Get a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} [include] Include a list of related entities IDs into response. Should be separated by comma. Possible values: cases, defects 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRun(code: string, id: number, include?: string, options?: any): AxiosPromise<RunResponse> {
            return localVarFp.getRun(code, id, include, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve all runs stored in selected project. 
         * @summary Get all runs
         * @param {string} code Code of project, where to search entities.
         * @param {string} [search] 
         * @param {string} [status] A list of status values separated by comma. Possible values: in_progress, passed, failed, aborted, active (deprecated), complete (deprecated), abort (deprecated). 
         * @param {number} [milestone] 
         * @param {number} [environment] 
         * @param {number} [fromStartTime] 
         * @param {number} [toStartTime] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {string} [include] Include a list of related entities IDs into response. Should be separated by comma. Possible values: cases, defects 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRuns(code: string, search?: string, status?: string, milestone?: number, environment?: number, fromStartTime?: number, toStartTime?: number, limit?: number, offset?: number, include?: string, options?: any): AxiosPromise<RunListResponse> {
            return localVarFp.getRuns(code, search, status, milestone, environment, fromStartTime, toStartTime, limit, offset, include, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to update a publicity of specific run. 
         * @summary Update publicity of a specific run
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {RunPublic} runPublic 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: any): AxiosPromise<RunPublicResponse> {
            return localVarFp.updateRunPublicity(code, id, runPublic, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RunsApi - object-oriented interface
 * @export
 * @class RunsApi
 * @extends {BaseAPI}
 */
export class RunsApi extends BaseAPI {
    /**
     * This method allows to complete a specific run. 
     * @summary Complete a specific run
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public completeRun(code: string, id: number, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).completeRun(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to create a run in selected project. 
     * @summary Create a new run
     * @param {string} code Code of project, where to search entities.
     * @param {RunCreate} runCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public createRun(code: string, runCreate: RunCreate, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).createRun(code, runCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method completely deletes a run from repository. 
     * @summary Delete run
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public deleteRun(code: string, id: number, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).deleteRun(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve a specific run. 
     * @summary Get a specific run
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {string} [include] Include a list of related entities IDs into response. Should be separated by comma. Possible values: cases, defects 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public getRun(code: string, id: number, include?: string, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).getRun(code, id, include, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve all runs stored in selected project. 
     * @summary Get all runs
     * @param {string} code Code of project, where to search entities.
     * @param {string} [search] 
     * @param {string} [status] A list of status values separated by comma. Possible values: in_progress, passed, failed, aborted, active (deprecated), complete (deprecated), abort (deprecated). 
     * @param {number} [milestone] 
     * @param {number} [environment] 
     * @param {number} [fromStartTime] 
     * @param {number} [toStartTime] 
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {string} [include] Include a list of related entities IDs into response. Should be separated by comma. Possible values: cases, defects 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public getRuns(code: string, search?: string, status?: string, milestone?: number, environment?: number, fromStartTime?: number, toStartTime?: number, limit?: number, offset?: number, include?: string, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).getRuns(code, search, status, milestone, environment, fromStartTime, toStartTime, limit, offset, include, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to update a publicity of specific run. 
     * @summary Update publicity of a specific run
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {RunPublic} runPublic 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    public updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: AxiosRequestConfig) {
        return RunsApiFp(this.configuration).updateRunPublicity(code, id, runPublic, options).then((request) => request(this.axios, this.basePath));
    }
}