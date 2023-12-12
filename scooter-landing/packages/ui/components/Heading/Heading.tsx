import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h2`
    color: #D7F000;
`

type HeadingProps = {
    children?: React.ReactNode
    className?: string | undefined
}

export const Heading = ({ children, className }: HeadingProps) => {
    return (
        <StyledHeading className={className}>{children}</StyledHeading>
    )
}