import React, { useState } from 'react';

import styles from './index.module.css';

const selectBtnCssClass = (isVisible: boolean) => isVisible ? 'btn-primary ggg' : 'btn-danger';

export default function MyToggleText(): React.ReactElement {
  // primary/essential state 
  const [isVisible, setIsVisible] = useState(true); // state piece

  // derived/computed state
  const btnCssClass = selectBtnCssClass(isVisible);
  const btnText = isVisible ? 'Toggle Hide' : 'Toggle Show';

  const toggleHandler = () => {
    setIsVisible((currIsVisible) => !currIsVisible);
  };

  return (
    <div className={styles.myToggleText}>
      <button onClick={toggleHandler} className={`btn ${btnCssClass}`}>
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
