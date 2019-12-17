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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        feugiat at augue a dapibus. Quisque sapien nunc, pulvinar feugiat congue
        a, pharetra a massa. Suspendisse ullamcorper gravida bibendum. Donec
        aliquet nulla rhoncus orci maximus consectetur. In interdum, leo vel
        viverra malesuada, turpis odio finibus lectus, ut fringilla dui lorem
        egestas leo. Mauris in leo ultricies augue gravida lobortis sed ut nisi.
        Nunc semper nec eros ut tincidunt. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nulla ac
        gravida est, at iaculis magna. In eget lacus egestas, consectetur massa
        eget, elementum mi. Vestibulum molestie id ante et venenatis. Vivamus id
        sem a ante eleifend finibus sed nec diam. Duis non velit at odio
        interdum porta et quis sapien. Integer quis lacus varius, porta felis
        non, aliquet nunc. Aliquam ornare, velit in consequat egestas, dolor
        justo placerat nulla, sit amet feugiat tellus purus in odio. Sed vitae
        lacus consectetur, tincidunt eros sed, tincidunt ipsum. Pellentesque eu
        iaculis sem. Quisque turpis diam, convallis vitae tortor non, pretium
        hendrerit ligula. Donec ultricies quis elit at ultrices. Sed porttitor
        aliquam risus, quis tempor nunc. Ut malesuada egestas leo non rutrum.
        Proin scelerisque vestibulum luctus. Ut tristique, odio vitae
        sollicitudin blandit, nibh purus tincidunt mauris, et condimentum sem
        lorem et leo. Proin facilisis iaculis fringilla. Donec iaculis malesuada
        gravida. Suspendisse et dapibus elit. Vestibulum rutrum urna eget neque
        efficitur, in venenatis nunc tristique. Nulla vel pellentesque metus, at
        mollis purus. Aenean maximus arcu ut lorem suscipit commodo ac id nunc.
        In vestibulum elit libero, id porta quam malesuada sed. Aliquam id
        dapibus quam. Vivamus non dolor eget felis fringilla dapibus. Morbi
        congue efficitur bibendum. Donec rhoncus, augue vel vestibulum lacinia,
        lorem mauris fringilla ligula, sed finibus felis erat vitae metus. Duis
        vestibulum urna dolor, et tempus velit blandit a. Quisque mattis mi
        malesuada sodales pretium. Suspendisse ac placerat mi. Donec est elit,
        euismod a velit faucibus, elementum gravida diam. Morbi laoreet ac lacus
        ut gravida. Praesent vel malesuada est. Vivamus rhoncus nulla felis.
        Vestibulum elementum molestie dignissim. Proin aliquam ultricies
        posuere. This is the end.
    </div>
  );
}
