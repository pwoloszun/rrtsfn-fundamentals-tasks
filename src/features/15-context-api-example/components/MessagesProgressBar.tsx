import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function MessagesProgressBar(): React.ReactElement {
  // TODO inject messagesFacade
  const tmpMessagesCount = 7;

  const now = selectNow(tmpMessagesCount);
  const variant = selectVariant(now);

  return (
    <div>
      <h3>MessagesProgress</h3>
      <ProgressBar now={now} label={`${now}%`} variant={variant} />
    </div>
  );
}

const MAX = 20;

function selectNow(messagesCount: number): number {
  return Math.min(100 * messagesCount / MAX, 100);
}

function selectVariant(now: number): string {
  if (now < 30) {
    return 'info';
  } else if (now < 50) {
    return 'success';
  } else if (now < 75) {
    return 'warning';
  } else {
    return 'danger';
  }
}
