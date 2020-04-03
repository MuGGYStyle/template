import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import EmojiPicker from 'emoji-picker-react/dist/universal';
import 'ba-styles/vendors/emoji-picker-react/emoji-picker-react.css';
import emojiConverter from './emojiConverter';

class EmojiField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
      pickerOpen: false
    };

    this.emojiConverter = emojiConverter(props.config);

    this.onChange = this.onChange.bind(this);
    this.onTriggerClick = this.onTriggerClick.bind(this);
    this.onEmojiClick = this.onEmojiClick.bind(this);
    this.isAnOutsideClick = this.isAnOutsideClick.bind(this);
    this.onPickerkeypress = this.onPickerkeypress.bind(this);
    this.closePicker = this.closePicker.bind(this);
    this.openPicker = this.openPicker.bind(this);
  }

  componentDidUpdate() {
    if (this.state.pickerOpen) {
      setTimeout(() => {
        window.addEventListener('click', this.isAnOutsideClick);
        window.addEventListener('keyup', this.onPickerkeypress);
      });
    }
  }

  onChange(e) {
    const value = e ? e.target.value : this.state.value;

    this.setState({ value }, () => {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(e, value);
      }
    });
  }

  onPickerkeypress(e) {
    if (e.keyCode === 27 || e.which === 27 || e.key === 'Escape' || e.code === 'Escape') {
      this.closePicker();
    }
  }

  onTriggerClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.state.pickerOpen ? this.closePicker() : this.openPicker();
  }

  onEmojiClick(code, emoji) {
    const val = this.state.value;
    const selection = this._field.selectionStart;
    const shortcode = `:${emoji.name}:`;
    const v1 = val.slice(0, selection);
    const v2 = val.slice(selection);
    const newValue = `${v1}${shortcode}${v2}`;
    this.setState({
      value: newValue
    }, () => {
      this._field.selectionStart = selection + shortcode.length;
      this.onChange(null);
    });

    if (this.props.autoClose) {
      this.closePicker();
    }
  }

  getUnicode() {
    const allowNative = this.emojiConverter.allow_native;
    this.emojiConverter.allow_native = true;
    const unicodeValue = this.emojiConverter.replace_colons(this.state.value);
    this.emojiConverter.allow_native = allowNative;
    return unicodeValue;
  }

  getImages() {
    const allowNative = this.emojiConverter.allow_native;
    this.emojiConverter.allow_native = false;
    const unicodeValue = this.emojiConverter.replace_colons(this.state.value);
    this.emojiConverter.allow_native = allowNative;
    return unicodeValue;
  }

  unifyValue(value) {
    this.unifiedValue = this.emojiConverter.replace_colons(value);
    return this.unifiedValue;
  }


  isAnOutsideClick(e) {
    e.preventDefault();
    const shouldClose = !this._picker || !this._picker._picker.contains(e.target);

    if (shouldClose) {
      this.closePicker();
    }
  }

  closePicker() {
    this.setState({
      pickerOpen: false
    }, () => {
      window.removeEventListener('click', this.isAnOutsideClick);
      window.removeEventListener('keyup', this.onPickerkeypress);
    });
  }

  openPicker() {
    this.setState({
      pickerOpen: true
    }, () => {
      window.addEventListener('click', this.isAnOutsideClick);
      window.addEventListener('keyup', this.onPickerkeypress);
    });
  }

  render() {
    const {
      autoClose,
      onChange,
      config,
      fieldType,
      ...rest
    } = this.props;

    const isOpenClass = this.state.pickerOpen ? 'shown' : 'hidden';
    const className = `emoji-text-field picker-${isOpenClass} emoji-${fieldType}`;
    const { value, pickerOpen } = this.state;
    const isInput = fieldType === 'input';
    const ref = (_field) => {
      this._field = _field;
      return this._field;
    };

    return (
      <div className={className}>
        <IconButton className="emoji-trigger" color="inherit" onClick={this.onTriggerClick}>
          <SentimentVerySatisfied />
        </IconButton>
        <a href="#!" className="emoji-trigger" >&nbsp;</a>
        { (isInput) && (<input {...rest} onChange={this.onChange} type="text" ref={ref} value={value} />) }
        { (!isInput) && (<textarea {...rest} onChange={this.onChange} ref={ref} value={value} />) }
        { pickerOpen && <EmojiPicker onEmojiClick={this.onEmojiClick} ref={(picker) => { this._picker = picker; return this._picker; }} /> }
      </div>
    );
  }
}

EmojiField.propTypes = {
  value: PropTypes.string,
  autoClose: PropTypes.bool,
  onChange: PropTypes.func,
  config: PropTypes.object,
  fieldType: PropTypes.string.isRequired
};

EmojiField.defaultProps = {
  value: '',
  autoClose: true,
  config: null,
  onChange: () => {},
};

export default EmojiField;
