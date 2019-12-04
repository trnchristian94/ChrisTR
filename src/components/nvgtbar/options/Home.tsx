import * as React from "react";
import User from "src/Firebase/User";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>Home</h2>
      <p>{t("welcome.title")}</p>
      <User />
    </div>
  );
}
