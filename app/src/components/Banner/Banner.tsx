import * as React from "react";
import "./Banner.scss";

interface IProps {
  name: string;
}

export default class Banner extends React.Component<IProps> {
  public render() {
    return (
      <div className="banner">
        <span className="banner__text">
          Recuerda poners bien los paths {this.props.name} !
        </span>
      </div>
    );
  }
}