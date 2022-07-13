import React, { ReactNode } from 'react';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { FilterPropertyProps, SelectRecord } from '../base-property-props';
declare type CombinedProps = FilterPropertyProps & ThemeProps<DefaultTheme>;
declare class Filter extends React.PureComponent<CombinedProps> {
    private api;
    private options;
    constructor(props: CombinedProps);
    handleChange(selected: SelectRecord): void;
    loadOptions(inputValue: string): Promise<Array<{
        value: string;
        label: string;
    }>>;
    render(): ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<{
    filter: any;
    key?: React.Key | null | undefined;
    record: undefined;
    ref?: React.Ref<Filter> | undefined;
    property: import("../../..").PropertyJSON;
    resource: import("../../..").ResourceJSON;
    onChange: import("../base-property-props").OnPropertyChange;
    where: import("../../..").PropertyPlace;
} & {
    theme?: DefaultTheme | undefined;
}>;
export default _default;
