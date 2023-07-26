import { Component } from 'react';
import { OptionsList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { Option } from 'components/Option/Option';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <OptionsList>
        {options.map(option => (
          <Option
            key={option}
            option={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </OptionsList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
