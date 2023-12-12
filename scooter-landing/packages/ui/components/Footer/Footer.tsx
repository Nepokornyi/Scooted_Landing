import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid black;
`

type FooterProps = {
    children: React.ReactNode
    className?: string | undefined
}

export const Footer = ({ children, className }: FooterProps) => {
    return <StyledFooter className={className}>{children}</StyledFooter>
}
