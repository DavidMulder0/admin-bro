import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ResourceJSON } from '../../interfaces';
import { ResourceActionParams } from '../../../backend/utils/view-helpers/view-helpers';
declare type PropsFromState = {
    resources: Array<ResourceJSON>;
};
declare type Props = PropsFromState & RouteComponentProps<ResourceActionParams>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<Props>, import("react-redux").Omit<Props, "resources">>;
export default _default;
