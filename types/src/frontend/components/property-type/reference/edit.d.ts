import React from 'react';
import { DefaultTheme } from 'styled-components';
import { RecordJSON } from '../../../interfaces';
declare const _default: React.ForwardRefExoticComponent<{
    filter?: any;
    record: RecordJSON;
    children?: React.ReactNode;
    property: import("../../../interfaces").PropertyJSON;
    resource: import("../../../interfaces").ResourceJSON;
    onChange: import("../base-property-props").OnPropertyChange;
    where: import("../../../interfaces").PropertyPlace;
} & {
    theme?: DefaultTheme | undefined;
}>;
export default _default;
