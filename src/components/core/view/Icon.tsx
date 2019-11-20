import * as React from "react";

interface IProps {
  name: string;
}

export default function Icon(props: IProps) {
  return <img className="icon" src={"src/img/" + props.name + ".svg"} />;
}
