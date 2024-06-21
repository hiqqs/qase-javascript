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



/**
 * Could be used instead of `case_id`.
 * @export
 * @interface ResultCreateCase
 */
export interface ResultCreateCase {
    /**
     * 
     * @type {string}
     * @memberof ResultCreateCase
     */
    'title'?: string;
    /**
     * Nested suites should be separated with `TAB` symbol.
     * @type {string}
     * @memberof ResultCreateCase
     */
    'suite_title'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResultCreateCase
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResultCreateCase
     */
    'preconditions'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ResultCreateCase
     */
    'postconditions'?: string | null;
    /**
     * Slug of the layer. You can get it in the System Field settings.
     * @type {string}
     * @memberof ResultCreateCase
     */
    'layer'?: string;
    /**
     * Slug of the severity. You can get it in the System Field settings.
     * @type {string}
     * @memberof ResultCreateCase
     */
    'severity'?: string;
    /**
     * Slug of the priority. You can get it in the System Field settings.
     * @type {string}
     * @memberof ResultCreateCase
     */
    'priority'?: string;
}
