import React from 'react'

interface ButtonProps {
    label: string
}

export const Button = ({label}: ButtonProps) => (
    <button type={'button'}>
        {label}
    </button>
);