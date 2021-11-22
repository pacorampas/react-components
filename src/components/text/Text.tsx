import React from 'react'
import styled, { css } from 'styled-components'
import { getMargins } from '../../styledHelpers'
import { TextDraftProps, TextProps, TEXT_WEIGHT } from './Text.types'

const getWeight = (weight: TEXT_WEIGHT) => {
  let res
  switch (weight) {
    // case '300':
    case 'light':
      res = 300
      break
    // case '400':
    case 'regular':
      res = 400
      break
    // case '500':
    case 'medium':
      res = 500
      break
    // case '600':
    case 'semibold':
      res = 600
      break
    // case '700':
    case 'bold':
      res = 700
      break
    // case '800':
    case 'black':
      res = 800
      break
    default:
      res = 400
  }
  return res
}

const DraftLinesWrapper = styled.p`
  display: block;
  ${(props) => getMargins(props)}
`

const DraftText = styled.p`
  display: block;
  width: 30%;
  max-width: 500px;
  margin: 0;
  padding: 0;
  border-radius: 14px;

  color: transparent;
  user-select: none;
  ${({ theme, size }: TextProps) => css(theme.components.text.fontSizes[size])}

  background-color: ${({ theme, variant }: TextProps) => theme.colors[variant].main};

  &.line {
    margin-bottom: 20px;

    line-height: 1;
  }
  &.large {
    width: 80%;
  }
  &.small {
    width: 45%;
  }
`

const StyledText = styled.p`
  margin: 0;
  padding: 0;
  ${({ theme, margins, marginTop, marginRight, marginBottom, marginLeft }: TextProps) =>
    getMargins({
      theme,
      margins,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
    })}

  color: ${({ theme, variant }: TextProps) => theme.colors[variant].main};
  font-weight: ${({ weight }: TextProps) => getWeight(weight)};
  ${({ theme, size }: TextProps) => css(theme.components?.text?.fontSizes[size])}
  text-align: ${({ align }: TextProps) => align};

  ${({ bold }: TextProps) =>
    bold &&
    css`
      font-weight: 700;
    `}

  text-transform: ${({ transform }: TextProps) => transform};

  ${({ truncate }: TextProps) =>
    truncate &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${truncate === true ? 1 : truncate};

      overflow: hidden;

      text-overflow: ellipsis;
    `}
`

export const Text = ({ draftLines, draft, theme, ...rest }: TextProps & TextDraftProps): React.ReactElement => {
  if (draft) {
    return (
      <DraftLinesWrapper theme={theme} {...rest}>
        {Array.from({ length: draftLines }, (_, i) => (
          <DraftText as="span" className={i === draftLines - 1 ? 'line small' : 'line large'} theme={theme} {...rest}>
            {`Draft ${i}`}
          </DraftText>
        ))}
      </DraftLinesWrapper>
    )
  }

  return <StyledText theme={theme} {...rest} />
}

Text.defaultProps = {
  size: 'm',
  variant: 'neutralMax',
  bold: false,
  family: 'default',
  weight: '400',
  transform: 'unset',
  truncate: false,
  fontStyle: 'normal',
  draft: false,
  draftLines: 1,
}
