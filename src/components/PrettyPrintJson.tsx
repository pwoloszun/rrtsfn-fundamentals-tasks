import React from 'react';

interface IPrettyPrintJsonProps {
  data: any;
}

const codeStyles = {
  color: '#000',
};

const preStyles = {
  border: '1px solid #000',
  padding: '6px',
};

export default function PrettyPrintJson(props: IPrettyPrintJsonProps): React.ReactElement {
  const { data } = props;
  return (
    <code style={codeStyles}>
      <pre style={preStyles}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </code>
  );
}

