import * as React from "react";
import {
  PlasmicSelectDropdownPrimary,
  DefaultSelectDropdownPrimaryProps
} from "./plasmic/copy_of_market_v_2/PlasmicSelectDropdownPrimary";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./SelectDropdownPrimary__Option";
import OptionGroup from "./SelectDropdownPrimary__OptionGroup";

interface SelectDropdownPrimaryProps
  extends DefaultSelectDropdownPrimaryProps {}

function SelectDropdownPrimary_(
  props: SelectDropdownPrimaryProps,
  ref: SelectRef
) {
  const { plasmicProps, state } = PlasmicSelectDropdownPrimary.useBehavior(
    props,
    ref
  );
  return <PlasmicSelectDropdownPrimary {...plasmicProps} />;
}

const SelectDropdownPrimary = React.forwardRef(SelectDropdownPrimary_);

export default Object.assign(SelectDropdownPrimary, {
  Option,
  OptionGroup,
  __plumeType: "select"
});
