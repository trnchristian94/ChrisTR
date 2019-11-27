import React from "react";
import Icon from "components/core/view/Icon";
import { useTheme } from "components/theme/ThemeContext.tsx";
import { FormCheck } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function LightSwitch() {
  const { t } = useTranslation();
  const themeState = useTheme();

  return (
    <div>
      <FormCheck custom className="switchLights" type="switch">
        <Icon name="sun" boxSize={20} />
        <FormCheck.Input
          isInvalid={themeState.dark}
          checked={themeState.dark}
          onChange={() => console.log(themeState.dark)}
        />
        <FormCheck.Label onClick={() => themeState.toggle()} />
        <Icon name="moon" boxSize={20} />
      </FormCheck>
    </div>
  );
}
