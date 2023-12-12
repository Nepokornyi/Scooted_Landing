import React from 'react'

import styled from 'styled-components'

const StyledBaseContainer = styled.section`
    position: relative;
    width: 100%;
`

type BaseContainerProps = {
    children: React.ReactNode
    className?: string | undefined
}

export const BaseContainer = ({ children, className }: BaseContainerProps) => {
    return (
        <StyledBaseContainer className={className}>
            {children}
        </StyledBaseContainer>
    )
}
