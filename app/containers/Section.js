// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
  title: string
};

export default class Section extends React.Component<Props> {
  props: Props;

  render() {
    const { children, title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}
