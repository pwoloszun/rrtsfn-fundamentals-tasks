import React, { Component } from 'react';

import styles from './styles.module.css';

interface StyledTextState {
  exampleText: string | undefined;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
}

type StyleType = keyof StyledTextState;

const initialState = { // TODO
  exampleText: 'Lorem ipsum...',
  isBold: false,
  isUnderline: false,
  isItalic: false
};

export default class StyledText extends Component {
  constructor(props = {}) {
    super(props);

    // TODO
  }

  render() {
    return (
      <div className={styles.styledText}>
        <h3>StyledText</h3>
        <p>TODO text</p>
        <div>
          <div>
            <label>
              <input
                type="checkbox"
                name="isBold"
              />
              Bold
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="isItalic"
              />
              Italic
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="isUnderline"
              />
              Underline
            </label>
          </div>
        </div>
      </div>
    );
  }

}
