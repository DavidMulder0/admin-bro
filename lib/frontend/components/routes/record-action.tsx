import React, { useState, useEffect, useCallback } from 'react'

import { useRouteMatch } from 'react-router'
import { Loader } from '@admin-bro/design-system'

import BaseActionComponent from '../app/base-action-component'
import ApiClient from '../../utils/api-client'
import { RecordActionParams } from '../../../backend/utils/view-helpers/view-helpers'
import { ActionJSON, RecordJSON } from '../../interfaces'
import { NoResourceError, NoActionError, NoRecordError } from '../app/error-message'
import Wrapper from './utils/wrapper'
import { ActionHeader } from '../app'
import { useNotice, useResource, useTranslation } from '../../hooks'
import DrawerPortal from '../app/drawer-portal'
import { ActionResponse, RecordActionResponse } from '../../../backend/actions/action.interface'
import mergeRecordResponse from '../../hooks/use-record/merge-record-response'

const api = new ApiClient()

const RecordAction: React.FC = () => {
  const [data, setData] = useState<{
    record: RecordJSON,
    [key: string]: any
  }>()
  const [loading, setLoading] = useState(true)
  const match = useRouteMatch<RecordActionParams>()
  const addNotice = useNotice()
  const { translateMessage } = useTranslation()

  const { actionName, recordId, resourceId } = match.params
  const resource = useResource(resourceId)

  const action = data?.record && data.record.recordActions.find(r => r.name === actionName)

  const fetchRecord = (): void => {
    setLoading(true)
    api.recordAction(match.params).then((response) => {
      setLoading(false)
      setData(response.data)
    }).catch((error) => {
      addNotice({
        message: translateMessage('errorFetchingRecord', resourceId),
        type: 'error',
      })
      throw error
    })
  }

  useEffect(() => {
    fetchRecord()
  }, [actionName, recordId, resourceId])

  const handleActionPerformed = useCallback((oldRecord: RecordJSON, response: ActionResponse) => {
    if (response.record) {
      setData({
        ...data,
        record: mergeRecordResponse(oldRecord, response as RecordActionResponse)
      })
    } else {
      fetchRecord()
    }
  }, [fetchRecord])

  if (!resource) {
    return (<NoResourceError resourceId={resourceId} />)
  }

  // When the user visits this route (record action) from a different, than the current one, record.
  // It renders everything with a new resource. The old record remains until useEffect fetches data
  // from the API. that is why we have to check if the current record has correct record.id.
  // Alternative approach would be to setRecord(undefined) before the fetch, but it is async and
  // we cannot be sure that the component wont be rendered (it will be at least once) with the
  // wrong data.
  const hasDifferentRecord = data?.record && data.record.id.toString() !== recordId

  if (loading || hasDifferentRecord) {
    const actionFromResource = resource.actions.find(r => r.name === actionName)
    return actionFromResource?.showInDrawer ? (<DrawerPortal><Loader /></DrawerPortal>) : <Loader />
  }

  if (!action) {
    return (<NoActionError resourceId={resourceId} actionName={actionName} />)
  }

  if (!data?.record) {
    return (<NoRecordError resourceId={resourceId} recordId={recordId} />)
  }

  if (action.showInDrawer) {
    return (
      <DrawerPortal width={action.containerWidth}>
        <BaseActionComponent
          action={action as ActionJSON}
          resource={resource}
          record={data.record}
        />
      </DrawerPortal>
    )
  }

  return (
    <Wrapper width={action.containerWidth}>
      <ActionHeader
        resource={resource}
        action={action}
        record={data.record}
        actionPerformed={(response: ActionResponse): void => (
          handleActionPerformed(data.record, response)
        )}
      />
      <BaseActionComponent
        action={action}
        resource={resource}
        record={data.record}
        data={data}
      />
    </Wrapper>
  )
}

export default RecordAction
