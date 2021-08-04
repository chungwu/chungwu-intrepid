import * as React from "react";
import {
  PlasmicSelectDropdownPrimary__OptionGroup,
  DefaultSelectDropdownPrimary__OptionGroupProps
} from "./plasmic/copy_of_market_v_2/PlasmicSelectDropdownPrimary__OptionGroup";

interface SelectDropdownPrimary__OptionGroupProps
  extends DefaultSelectDropdownPrimary__OptionGroupProps {}

function SelectDropdownPrimary__OptionGroup(
  props: SelectDropdownPrimary__OptionGroupProps
) {
  const { plasmicProps } =
    PlasmicSelectDropdownPrimary__OptionGroup.useBehavior(props);
  return <PlasmicSelectDropdownPrimary__OptionGroup {...plasmicProps} />;
}

export default Object.assign(SelectDropdownPrimary__OptionGroup, {
  __plumeType: "select-option-group"
});
