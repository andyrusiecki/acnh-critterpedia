import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorComponent } from './error';

interface ValidateURLParamProps {
  condition: (params: any) => boolean;
  errorMsg?: (params: any) => string;
}

export class ValidateURLParamComponent<T> extends React.Component<ValidateURLParamProps> {
  render() {
    const params: T = useParams<T>()

    if (this.props.condition(params)) {
      return this.props.children;
    }

    return (
      <ErrorComponent message={this.props.errorMsg ? this.props.errorMsg(params) : 'Error validating url params ' + params} />
    );
  }
}
