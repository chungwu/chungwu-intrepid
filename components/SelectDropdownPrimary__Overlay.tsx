import * as React from "react";
import {
  PlasmicSelectDropdownPrimary__Overlay,
  DefaultSelectDropdownPrimary__OverlayProps
} from "./plasmic/copy_of_market_v_2/PlasmicSelectDropdownPrimary__Overlay";
import { TriggeredOverlayRef } from "@plasmicapp/react-web";

interface SelectDropdownPrimary__OverlayProps
  extends DefaultSelectDropdownPrimary__OverlayProps {}

function SelectDropdownPrimary__Overlay_(
  props: SelectDropdownPrimary__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicSelectDropdownPrimary__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicSelectDropdownPrimary__Overlay {...plasmicProps} />;
}

const SelectDropdownPrimary__Overlay = React.forwardRef(
  SelectDropdownPrimary__Overlay_
);

export default Object.assign(SelectDropdownPrimary__Overlay, {
  __plumeType: "triggered-overlay"
});
