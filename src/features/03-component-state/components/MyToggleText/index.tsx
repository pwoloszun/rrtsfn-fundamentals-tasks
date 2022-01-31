import React, { useState } from 'react';

import styles from './index.module.css';

export default function MyToggleText(): React.ReactElement {
  // TODO: init component LOCAL state
  // TODO css classes: 'btn-danger', 'btn-primary'
  const [isVisible, setIsVisible] = useState(true);
  const [btnCssClass, setBtnCssClass] = useState('btn-danger');
  const [btnText, setBtnText] = useState('Toggle Hide');

  const toggleClickHandler = () => {
    if (isVisible) {
      setIsVisible(false);
      setBtnCssClass('btn-primary');
      setBtnText('Toggle Show');
    } else {
      setIsVisible(true);
      setBtnCssClass('btn-danger');
      setBtnText('Toggle Hide');
    }
  };

  return (
    <div className={styles.myToggleText}>
      <button onClick={toggleClickHandler} className={'btn ' + btnCssClass}>
        {btnText}
      </button>
      <hr />
      {
        isVisible && <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus nisi eu sapien finibus elementum. Integer
          porta mi orci, congue malesuada velit varius eu. Fusce quis ante fermentum, tempus nisi nec, luctus neque.
          Maecenas in laoreet ante, aliquet rutrum justo. Phasellus placerat felis erat, et dapibus libero mollis eget.
          Nunc nec dictum lacus. Fusce congue nisi sit amet tristique vestibulum. Aenean congue diam eu lectus laoreet
          molestie. Morbi leo odio, gravida quis hendrerit non, volutpat eget quam. Nulla sagittis lacus sit amet diam
          lacinia sodales. In fermentum elementum interdum. Donec sit amet venenatis augue. Aliquam suscipit sagittis
          mauris sed vestibulum. Donec facilisis vestibulum venenatis. Proin venenatis libero vel feugiat ultrices.
        </p>
      }

    </div>
  );
}
