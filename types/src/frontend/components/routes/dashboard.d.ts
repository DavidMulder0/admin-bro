import React, { ReactNode } from 'react';
declare type State = {
    isClient: boolean;
};
declare type PropsFromState = {
    dashboard: {
        component?: string;
    };
};
declare class Dashboard extends React.Component<PropsFromState, State> {
    constructor(props: PropsFromState);
    componentDidMount(): void;
    render(): ReactNode;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Dashboard, import("react-redux").Omit<React.ClassAttributes<Dashboard> & PropsFromState, "dashboard">>;
export default _default;
