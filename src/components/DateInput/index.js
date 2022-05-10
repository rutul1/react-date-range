import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { format, parse, isValid, isEqual } from 'date-fns';

class DateInput extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      invalid: false,
      changed: false,
      value: this.formatDate(props),
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = prevProps;

    if (!isEqual(value, this.props.value)) {
      this.setState({ value: this.formatDate(this.props) });
    }
  }

  formatDate({ value, dateDisplayFormat, dateOptions }) {
    if (value && isValid(value)) {
      return format(value, dateDisplayFormat, dateOptions);
    }
    return '';
  }

  update(value) {
    const { invalid, changed } = this.state;

    if (invalid || !changed || !value) {
      return;
    }

    const { onChange, dateDisplayFormat, dateOptions } = this.props;
    const parsed = parse(value, dateDisplayFormat, new Date(), dateOptions);

    if (isValid(parsed)) {
      this.setState({ changed: false }, () => onChange(parsed));
    } else {
      this.setState({ invalid: true });
    }
  }

  handleAutoDateFormatting = (input, keyCode, e) => {
    const allDateFormats = [
      'MMM DD, YYYY',
      'DD-MMM-YYYY',
      'YYYY-MM-DD',
      'DD-MM-YYYY',
      'MM-DD-YYYY',
    ];

    const calendarViewFormats = ['MMM DD', 'MMMM YYYY'];

    let isShift = false;
    const seperator = '-';
    if (keyCode == 16) {
      isShift = true;
    }

    const receivedDateFormat = this.props.dateDisplayFormat.toUpperCase();
    // 'MMM DD, YYYY'
    // "YYYY-MM-DD";
    const stringAllowedDateFormats = allDateFormats.slice(0, 2).includes(receivedDateFormat);

    //  allow only neumeric
    if (keyCode === 'Backspace') return;

    if (calendarViewFormats.includes(receivedDateFormat)) {
      if (calendarViewFormats[1] === receivedDateFormat) {
        // do nothing, user has to type full month name
      }
      if (
        input.value.length === 3 &&
        keyCode.trim().length &&
        calendarViewFormats[0] === receivedDateFormat
      )
        input.value += ' ';
      return;
    }

    if (
      !stringAllowedDateFormats &&
      allDateFormats.includes(receivedDateFormat) &&
      ((keyCode >= 48 && keyCode <= 57) ||
        keyCode === 8 ||
        keyCode <= 37 ||
        keyCode <= 39 ||
        (keyCode >= 96 && keyCode <= 105)) &&
      !isShift
    ) {
      if (receivedDateFormat !== allDateFormats[2]) {
        // DD-MM-YYYY
        // MM-DD-YYYY
        if ((input.value.length === 2 || input.value.length === 5) && keyCode !== 8) {
          input.value += seperator;
        }
      } else {
        // YYYY-MM-DD
        if (
          (input.value.length === 4 || input.value.length === 7) &&
          input.value.split('-').length !== 3
        ) {
          input.value += seperator;
        }
      }
    }

    if (stringAllowedDateFormats) {
      // MMM DD,YYYY
      if (receivedDateFormat === allDateFormats[0]) {
        if (input.value.length === 3 && keyCode.trim().length) {
          input.value += ' ';
        }
        if (input.value.length === 6 && keyCode !== ',') {
          input.value += ', ';
        }
      } else {
        // DD-MMM-YYYY
        if (input.value.length === 2 || input.value.length === 6) {
          input.value += seperator;
        }
      }
    }
  };

  onKeyDown = e => {
    const { value } = this.state;
    this.handleAutoDateFormatting(e.target, e.key, e);

    if (e.key === 'Enter') {
      this.update(value);
    }
  };

  onChange = e => {
    this.setState({ value: e.target.value, changed: true, invalid: false });
  };

  onBlur = () => {
    const { value } = this.state;
    this.update(value);
  };

  getMaxLengthForInput = receivedDateFormat => {
    if (['MMM DD, YYYY', 'DD-MMM-YYYY'].includes(receivedDateFormat)) return 12;
    if (receivedDateFormat === 'MMM DD') return 6;
    if (receivedDateFormat === 'MMMM YYYY') return 14;
    return 10;
  };

  render() {
    const {
      className,
      readOnly,
      placeholder,
      disabled,
      onFocus,
      label,
      dateDisplayFormat,
    } = this.props;
    const { value, invalid } = this.state;

    const receivedDateFormat = dateDisplayFormat.toUpperCase();

    return (
      <div className={`${classnames('rdrDateInput', className)} date-input-header`}>
        <div>{label}</div>
        <div className="startdate-wrp">
          <input
            readOnly={readOnly}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            onKeyDown={this.onKeyDown}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={onFocus}
            className="form-control"
            maxLength={this.getMaxLengthForInput(receivedDateFormat)}
          />
        </div>
        {invalid && <span className="rdrWarning">&#9888;</span>}
      </div>
    );
  }
}

DateInput.propTypes = {
  value: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  dateOptions: PropTypes.object,
  dateDisplayFormat: PropTypes.string,
  className: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

DateInput.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: 'MMM D, YYYY',
};

export default DateInput;
