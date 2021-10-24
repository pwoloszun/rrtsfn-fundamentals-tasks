import React from 'react';

import styles from './index.module.css';

export default function MyToggleText(): React.ReactElement {
  // TODO: init component LOCAL state
  // TODO css classes: 'btn-danger', 'btn-primary'

  return (
    <div className={styles.myToggleText}>
      <button className="btn">
        Toggle TODO
        </button>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus nisi eu sapien finibus elementum. Integer
        porta mi orci, congue malesuada velit varius eu. Fusce quis ante fermentum, tempus nisi nec, luctus neque.
        Maecenas in laoreet ante, aliquet rutrum justo. Phasellus placerat felis erat, et dapibus libero mollis eget.
        Nunc nec dictum lacus. Fusce congue nisi sit amet tristique vestibulum. Aenean congue diam eu lectus laoreet
        molestie. Morbi leo odio, gravida quis hendrerit non, volutpat eget quam. Nulla sagittis lacus sit amet diam
        lacinia sodales. In fermentum elementum interdum. Donec sit amet venenatis augue. Aliquam suscipit sagittis
        mauris sed vestibulum. Donec facilisis vestibulum venenatis. Proin venenatis libero vel feugiat ultrices.
        </p>
    </div>
  );
}
