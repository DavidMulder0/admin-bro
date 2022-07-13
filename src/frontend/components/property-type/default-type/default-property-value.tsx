import React from 'react'
import { Badge, Box } from '@admin-bro/design-system'
import { ShowPropertyProps } from '../base-property-props'

const DefaultPropertyValue: React.FC<ShowPropertyProps> = (props) => {
    const { property, record } = props

    const rawValue = record?.params[property.path]

    if (typeof rawValue === 'undefined') {
        return <Box style={{ fontStyle: 'italic' }}>not set</Box>
        return null
    }

    if (property.availableValues) {
        const option = property.availableValues.find(
            (opt) => opt.value === rawValue
        )

        if (!option) {
            return rawValue
        }

        return <Badge>{option?.label || rawValue}</Badge>
    }

    return rawValue
}

export default DefaultPropertyValue
