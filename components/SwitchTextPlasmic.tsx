import * as React from "react";
import {
  PlasmicSwitchTextPlasmic,
  DefaultSwitchTextPlasmicProps
} from "./plasmic/copy_of_market_v_2/PlasmicSwitchTextPlasmic";
import { SwitchRef } from "@plasmicapp/react-web";

interface SwitchTextPlasmicProps extends DefaultSwitchTextPlasmicProps {}

function SwitchTextPlasmic_(props: SwitchTextPlasmicProps, ref: SwitchRef) {
  const { plasmicProps, state } =
    PlasmicSwitchTextPlasmic.useBehavior<SwitchTextPlasmicProps>(props, ref);
  return <PlasmicSwitchTextPlasmic {...plasmicProps} />;
}

const SwitchTextPlasmic = React.forwardRef(SwitchTextPlasmic_);

export default Object.assign(SwitchTextPlasmic, {
  __plumeType: "switch"
});
