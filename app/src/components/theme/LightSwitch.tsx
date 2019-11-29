import React from "react";
import Icon from "components/core/view/Icon";
import { useTheme } from "components/theme/ThemeContext";
import { FormCheck } from "react-bootstrap";

export default function LightSwitch() {
  const themeState = useTheme();

  const changeMode = () => {
    themeState.toggle();
    refreshMode(themeState.dark);
  };

  const refreshMode = (nightMode: boolean) => {
    if (nightMode) {
      window.document.getElementById("principalApp").className =
        "App nightMode";
    } else {
      window.document.getElementById("principalApp").className =
        "App lightMode";
    }
  };

  return (
    <FormCheck custom className="switchLights" type="switch">
      <Icon name="sun" boxSize={20} />
      <FormCheck.Input
        isInvalid={themeState.dark}
        checked={themeState.dark}
        readOnly
      />
      <FormCheck.Label onClick={changeMode} />
      <Icon name="moon" boxSize={20} />
    </FormCheck>
  );
}
