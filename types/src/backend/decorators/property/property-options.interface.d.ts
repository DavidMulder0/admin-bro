import { PropertyType } from '../../adapters/property/base-property';
/**
 * Options passed to a given property
 */
export default interface PropertyOptions {
    /**
     * if given property should be visible. It can be either boolean for all possible views, or
     * you can verify which view in particular should be hidden/shown.
     */
    isVisible?: boolean | {
        show?: boolean | ((CurrentAdmin: any) => boolean);
        list?: boolean | ((CurrentAdmin: any) => boolean);
        edit?: boolean | ((CurrentAdmin: any) => boolean);
        filter?: boolean | ((CurrentAdmin: any) => boolean);
    };
    /**
     * List of possible overridden components for given property.
     */
    components?: {
        show?: string;
        list?: string;
        edit?: string;
        filter?: string;
    };
    /**
     * Property type
     */
    type?: PropertyType;
    /**
     * Indicates if property should be treated as an ID
     */
    isId?: boolean;
    /**
     * One of given property should be treated as an "title property". Title property is "clickable"
     * when user sees the record in a list or show views.
     */
    isTitle?: boolean;
    /**
     * Indicates if given property should be treated as array of elements.
     * @new In version 3.3
     */
    isArray?: boolean;
    /**
     * position of the field in a list,
     * title field (isTitle) gets position -1 by default other
     * fields gets position = 100.
     */
    position?: number;
    /**
     * If options should be limited to finite set. After setting this
     * in the UI you will see select box instead of the input
     */
    availableValues?: Array<{
        value: string;
        label: string;
    }>;
    /**
     * Custom properties passed to the frontend in {@link PropertyJSON}
     */
    custom?: {
        [key: string]: any;
    };
    /**
     * Additional props passed to the actual React component rendering given property in Edit
     * component.
     *
     * @new in version 3.3
     */
    props?: {
        [key: string]: any;
    };
    /**
     * Whether given property should be editable or not.
     */
    isDisabled?: boolean;
    /**
     * Whether given property should be sortable on list or not.
     */
    isSortable?: boolean;
    /**
     * Whether given property should be marked as required.
     */
    isRequired?: boolean;
    /**
     * if label should be hidden - false by default
     * @new in version 3.3
     */
    hideLabel?: boolean;
    /**
     * Name of the resource to which this property should be a reference.
     * If set - {@link PropertyOptions.type} always returns `reference`
     * @new In version 3.3
     */
    reference?: string;
}
