import React from 'react'
import styled, { css } from 'styled-components'
import { VARIANT } from 'theme/theme.types'
import { getMargins } from '../../styledHelpers'
import { TextDraftProps, TextProps, TEXT_ALIGN, TEXT_SIZES, TEXT_TRASFORM, TEXT_WEIGHT } from './Text.types'

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

const DraftLinesWrapper = styled.p<TextProps>`
  display: block;
  ${(props) => getMargins(props)}
`

const DraftText = styled.span<Pick<TextProps, 'size' | 'variant'>>`
  display: block;
  width: 30%;
  max-width: 500px;
  margin: 0;
  padding: 0;
  border-radius: 14px;

  color: transparent;
  user-select: none;
  ${({ theme, size }) => css(theme.components.text.fontSizes[size])}

  background-color: ${({ theme, variant }) => theme.colors[variant].main};

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

const StyledText = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  ${({ theme, margins, marginTop, marginRight, marginBottom, marginLeft }) =>
    getMargins({
      theme,
      margins,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
    })}

  color: ${({ theme, variant }) => theme.colors[variant].main};
  font-weight: ${({ weight }) => getWeight(weight)};
  ${({ theme, size }) => css(theme.components?.text?.fontSizes[size])}
  text-align: ${({ align }) => align};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}

  text-transform: ${({ transform }) => transform};

  ${({ truncate }) =>
    truncate &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${truncate === true ? 1 : truncate};

      overflow: hidden;

      text-overflow: ellipsis;
    `}
`

export const Text = ({ draftLines, draft, ...rest }: TextProps & TextDraftProps): React.ReactElement => {
  if (draft) {
    return (
      <DraftLinesWrapper {...rest}>
        {Array.from({ length: draftLines }, (_, i) => (
          <DraftText className={i === draftLines - 1 ? 'line small' : 'line large'} {...rest}>
            {`Draft ${i}`}
          </DraftText>
        ))}
      </DraftLinesWrapper>
    )
  }

  return <StyledText {...rest} />
}

Text.defaultProps = {
  size: TEXT_SIZES.m,
  align: TEXT_ALIGN.left,
  variant: VARIANT.NTRL_LIGHT,
  bold: false,
  family: 'default',
  weight: TEXT_WEIGHT.regular,
  transform: TEXT_TRASFORM.unset,
  truncate: false,
  fontStyle: 'normal',
  draft: false,
  draftLines: 1,
}
