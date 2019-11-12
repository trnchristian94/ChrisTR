import * as React from 'react';

interface IProps {
  name: string;
}

export default class Icon extends React.Component<IProps> {
  render() {
    return (
    <img className='icon' src={'src/img/' + this.props.name + '.svg'} />
    );
  }
}