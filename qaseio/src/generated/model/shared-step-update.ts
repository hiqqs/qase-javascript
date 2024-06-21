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


import { SharedStepContentCreate } from './shared-step-content-create';

/**
 * 
 * @export
 * @interface SharedStepUpdate
 */
export interface SharedStepUpdate {
    /**
     * 
     * @type {string}
     * @memberof SharedStepUpdate
     */
    'title': string;
    /**
     * Deprecated, use the `steps` property instead.
     * @type {string}
     * @memberof SharedStepUpdate
     * @deprecated
     */
    'action'?: string;
    /**
     * Deprecated, use the `steps` property instead.
     * @type {string}
     * @memberof SharedStepUpdate
     * @deprecated
     */
    'expected_result'?: string;
    /**
     * Deprecated, use the `steps` property instead.
     * @type {string}
     * @memberof SharedStepUpdate
     * @deprecated
     */
    'data'?: string;
    /**
     * 
     * @type {Array<SharedStepContentCreate>}
     * @memberof SharedStepUpdate
     */
    'steps'?: Array<SharedStepContentCreate>;
}
