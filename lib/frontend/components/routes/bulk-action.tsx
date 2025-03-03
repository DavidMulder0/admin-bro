import React, { useState, useEffect } from 'react'
import { Loader } from '@admin-bro/design-system'
import { useRouteMatch, useLocation } from 'react-router'

import { BulkActionParams } from '../../../backend/utils/view-helpers/view-helpers'

import ApiClient from '../../utils/api-client'
import getBulkActionsFromRecords from '../app/records-table/utils/get-bulk-actions-from-records'
import { ActionJSON, RecordJSON, ResourceJSON } from '../../interfaces'
import Wrapper from './utils/wrapper'
import {
    ActionHeader,
    DrawerPortal,
    BaseActionComponent,
    ErrorMessageBox,
    NoResourceError,
    NoActionError,
} from '../app'
import { useTranslation, useNotice, useResource } from '../../hooks'

type PropsFromState = {
    resources: Array<ResourceJSON>
}

type MatchParams = Pick<BulkActionParams, 'actionName' | 'resourceId'>

const api = new ApiClient()

const BulkAction: React.FC = () => {
    const match = useRouteMatch<MatchParams>()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>()
    const { translateMessage } = useTranslation()
    const addNotice = useNotice()
    const location = useLocation()

    const { resourceId, actionName } = match.params
    const resource = useResource(resourceId)

    const fetchRecords = (): Promise<void> => {
        const recordIdsString = new URLSearchParams(location.search).get(
            'recordIds'
        )
        const recordIds = recordIdsString ? recordIdsString.split(',') : []
        setLoading(true)

        return api
            .bulkAction({
                resourceId,
                recordIds,
                actionName,
            })
            .then((response) => {
                setLoading(false)
                setData(response.data)
            })
            .catch((error) => {
                setLoading(false)
                addNotice({
                    message: translateMessage(
                        'errorFetchingRecords',
                        resourceId
                    ),
                    type: 'error',
                })
                throw error
            })
    }

    useEffect(() => {
        fetchRecords()
    }, [match.params.resourceId, match.params.actionName])

    if (!resource) {
        return <NoResourceError resourceId={resourceId} />
    }

    if (!data?.records && !loading) {
        return (
            <ErrorMessageBox title="No records">
                <p>{translateMessage('noRecordsSelected', resourceId)}</p>
            </ErrorMessageBox>
        )
    }

    const action = getBulkActionsFromRecords(data?.records || []).find(
        (r) => r.name === actionName
    )

    if (loading) {
        const actionFromResource = resource.actions.find(
            (r) => r.name === actionName
        )
        return actionFromResource?.showInDrawer ? (
            <DrawerPortal>
                <Loader />
            </DrawerPortal>
        ) : (
            <Loader />
        )
    }

    if (!action) {
        return <NoActionError resourceId={resourceId} actionName={actionName} />
    }

    if (action.showInDrawer) {
        return (
            <DrawerPortal width={action.containerWidth}>
                <BaseActionComponent
                    action={action as ActionJSON}
                    resource={resource}
                    data={data}
                    records={data?.records}
                />
            </DrawerPortal>
        )
    }

    return (
        <Wrapper width={action.containerWidth}>
            {!action?.showInDrawer ? (
                <ActionHeader resource={resource} action={action} />
            ) : (
                ''
            )}
            <BaseActionComponent
                action={action as ActionJSON}
                resource={resource}
                data={data}
                records={data?.records}
            />
        </Wrapper>
    )
}

export default BulkAction
