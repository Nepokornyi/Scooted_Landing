import React from 'react'

import styled from 'styled-components'

const StyledHeader = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

type HeaderProps = {
    children: React.ReactNode
    className?: string | undefined
}

export const Header = ({ children, className }: HeaderProps) => {
    return <StyledHeader className={className}>{children}</StyledHeader>
}
