import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { VARIANT } from '../../theme/theme.types'
import { InputProps } from './Input.types'

const Container = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const Label = styled.label`
  font-family: 'Poppins';
  font-size: ${({ theme }) => theme.components.input.placeholder.fontSize};
  font-weight: ${({ theme }) => theme.components.input.placeholder.fontWeight};
  color: ${({ theme }) => theme.components.input.placeholder.color};
  margin-bottom: 12px;
`

const StyledInput = styled.input<InputProps>`
  font-family: 'OpenSans', 'Open Sans';
  font-size: ${({ theme }) => theme.components.input.fontSize};
  color: ${({ theme }) => theme.components.input.color};
  background-color: ${({ theme }) => theme.components.input.backgroundColor};
  width: 100%;
  padding: ${({ theme }) => theme.components.input.padding};
  transition: border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  &[disabled] {
    user-select: none;
  }

  ${({ theme }) => {
    const { style, width, color, activeColor, radius } = theme?.components?.input?.border ?? {}

    return css`
      border-style: ${style};
      border-width: ${width};
      border-color: ${color};
      border-radius: ${radius};

      &:not([disabled]):focus,
      &:not([disabled]):active {
        border-color: ${activeColor};
        box-shadow: ${() => `0 0 0 1px ${activeColor}`};
      }
    `
  }};
  box-sizing: border-box;

  ${({ hasError }) =>
    hasError &&
    css`
      color: ${({ theme }) => theme.colors[VARIANT.NEGATIVE].main};
      border-color: ${({ theme }) => theme.colors[VARIANT.NEGATIVE].main};
      box-shadow: ${({ theme }) => `0 0 0 1px ${theme.colors[VARIANT.NEGATIVE].main}`};
    `}

  outline: none;
`

const HelpTextWrapper = styled.div`
  width: 100%;
  margin-top: 6px;
  display: flex;
  justify-content: flex-end;
`

const HelpText = styled.p<Pick<InputProps, 'hasError'>>`
  margin: 6px 0 0;
  font-family: 'OpenSans', 'Open Sans';
  font-size: ${({ theme }) => theme.components.input.helpText.fontSize};
  font-weight: ${({ theme }) => theme.components.input.helpText.fontWeight};
  color: ${({ theme, hasError }) => {
    if (hasError) {
      return theme.colors[VARIANT.NEGATIVE].main
    }
    return theme.components.input.helpText.color
  }};
`

const Input = ({
  className,
  placeholder,
  name,
  helpText,
  hasError,
  autoFocus,
  ...rest
}: InputProps): React.ReactElement => {
  const inputRef = useRef()

  useEffect(() => {
    if (!autoFocus || !inputRef?.current) {
      return
    }

    const input: HTMLInputElement = inputRef?.current
    input.focus()
  }, [autoFocus])

  return (
    <Container className={className}>
      <Label htmlFor={name}>{placeholder ?? ''}</Label>
      <StyledInput ref={inputRef as any} name={name} hasError={hasError} {...rest} />
      {!!helpText && (
        <HelpTextWrapper>
          <HelpText hasError={hasError}>{helpText}</HelpText>
        </HelpTextWrapper>
      )}
    </Container>
  )
}

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  disabled: false,
  autoFocus: false,
  required: false,
  hasError: false,
}

export { Input }
