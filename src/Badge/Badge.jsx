import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { tokens } from '../shared/styles';

const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: ${tokens.typography.sizes[0]};
  padding: ${tokens.spacing.shalf} ${tokens.spacing.s1};
  border-radius: 3em;
  font-weight: ${tokens.typography.weight.bold};

  svg {
    height: ${tokens.spacing.s2};
    width: ${tokens.spacing.s2};
    margin-right: ${tokens.spacing.shalf};
  }

  ${(props) =>
    props.status === 'positive' &&
    css`
      color: ${tokens.colors.sucsess[900]};
      background: ${tokens.colors.sucsess[500]};
    `};

  ${(props) =>
    props.status === 'negative' &&
    css`
      color: ${tokens.colors.danger[100]};
      background: ${tokens.colors.danger[500]};
    `};

  ${(props) =>
    props.status === 'warning' &&
    css`
      color: ${tokens.colors.warning[900]};
      background: ${tokens.colors.warning[500]};
    `};

  ${(props) =>
    props.status === 'error' &&
    css`
      color: ${tokens.colors.danger[100]};
      background: ${tokens.colors.danger[500]};
    `};

  ${(props) =>
    props.status === 'neutral' &&
    css`
      color: ${tokens.colors.info[100]};
      background: ${tokens.colors.info[500]};
    `};
`;

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
export function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}
Badge.propTypes = {
  status: PropTypes.oneOf([
    'positive',
    'negative',
    'neutral',
    'error',
    'warning',
  ]),
};

Badge.defaultProps = {
  status: 'neutral',
};
