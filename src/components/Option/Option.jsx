import { Component } from 'react';
import PropTypes from 'prop-types';
import { OptionBtn } from '../FeedbackOptions/FeedbackOptions.styled';

export class Option extends Component {
  render() {
    const { option, onLeaveFeedback } = this.props;
    return (
      <li>
        <OptionBtn type="button" onClick={onLeaveFeedback} name={option}>
          {option}
        </OptionBtn>
      </li>
    );
  }
}

Option.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
