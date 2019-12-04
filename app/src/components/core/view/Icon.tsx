import React from "react";
import ReactSVG from "react-svg";

interface IProps {
  name: string;
  boxSize?: number;
  subFolder?: string;
}

export default function Icon(props: IProps) {
  let sourceIcon = "/src/img/icons/" + props.name + ".svg";
  if (props.subFolder) {
    sourceIcon =
      "/src/img/icons/" + props.subFolder + "/" + props.name + ".svg";
  }

  return (
    <ReactSVG
      src={sourceIcon}
      afterInjection={(error, svg) => {
        if (error) {
          //console.error(error);
          return;
        }
        //console.log(svg);
      }}
      beforeInjection={svg => {
        svg.classList.add("icon");
        svg.classList.add("ic-" + props.name);
        if (props.boxSize) {
          svg.setAttribute(
            "style",
            "width: " + props.boxSize + "px; height: " + props.boxSize + "px"
          );
        }
      }}
      style={{ width: props.boxSize + "px", height: props.boxSize + "px" }}
      fallback={() => <span>Error!</span>}
      loading={() => <span>Loading</span>}
      renumerateIRIElements={false}
      wrapper="span"
      className={"wrapper-class-name spIcon spanIc-" + props.name}
      onClick={() => {
        console.log("wrapper onClick");
      }}
    />
  );
}
