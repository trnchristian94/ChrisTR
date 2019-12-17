import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

import "./about.scss";

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t("inProgress")}</div>
      <div className="carouselChris container-fluid">
        <Carousel className="justify-content-center" interval={8000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/src/img/webimg/slideimgs/1.jpg"
              alt={t("about.gfiSpain")}
            />
            <Carousel.Caption>
              <h3>{t("about.gfiSpain")}</h3>
              <p />
              {t("about.gfiSpainPeriod")}
              <br />
              {t("about.gfiSpainFunc")}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/src/img/webimg/slideimgs/2.jpg"
              alt={t("about.teralco")}
            />
            <Carousel.Caption>
              <h3>{t("about.teralco")}</h3>
              <p />
              2018 - 2019
              <br />
              {t("about.teralcoFunc")}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/src/img/webimg/slideimgs/3.png"
              alt={t("about.thanksTo")}
            />
            <Carousel.Caption>
              <h3>{t("about.thanksTo")}</h3>
              <p />
              {t("about.thanksToMessage")}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/src/img/webimg/slideimgs/4.jpg"
              alt={t("about.altImg")}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
