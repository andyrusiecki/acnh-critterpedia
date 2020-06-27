import React from 'react';

interface ErrorProps {
  message?: string;
}

export class ErrorComponent extends React.Component<ErrorProps> {
  render() {
    return (
      <div className="error">
        {this.props.message || 'ERROR'}
      </div>
    );
  }
}
