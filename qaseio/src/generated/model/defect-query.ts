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


import { Attachment } from './attachment';
import { CustomFieldValue } from './custom-field-value';
import { TagValue } from './tag-value';

/**
 * 
 * @export
 * @interface DefectQuery
 */
export interface DefectQuery {
    /**
     * 
     * @type {number}
     * @memberof DefectQuery
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof DefectQuery
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof DefectQuery
     */
    'actual_result'?: string;
    /**
     * 
     * @type {string}
     * @memberof DefectQuery
     */
    'severity'?: string;
    /**
     * 
     * @type {string}
     * @memberof DefectQuery
     */
    'status'?: string;
    /**
     * 
     * @type {number}
     * @memberof DefectQuery
     */
    'milestone_id'?: number | null;
    /**
     * 
     * @type {Array<CustomFieldValue>}
     * @memberof DefectQuery
     */
    'custom_fields'?: Array<CustomFieldValue>;
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof DefectQuery
     */
    'attachments'?: Array<Attachment>;
    /**
     * 
     * @type {string}
     * @memberof DefectQuery
     */
    'resolved'?: string | null;
    /**
     * Deprecated, use `author_id` instead.
     * @type {number}
     * @memberof DefectQuery
     * @deprecated
     */
    'member_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof DefectQuery
     */
    'author_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof DefectQuery
     */
    'external_data'?: string;
    /**
     * 
     * @type {Array<TagValue>}
     * @memberof DefectQuery
     */
    'tags'?: Array<TagValue>;
    /**
     * 
     * @type {string}
     * @memberof DefectQuery
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof DefectQuery
     */
    'updated_at'?: string;
}
