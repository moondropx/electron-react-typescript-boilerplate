import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export default class App extends React.Component<Props> {
  public render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
