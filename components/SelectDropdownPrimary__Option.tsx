import * as React from "react";
import {
  PlasmicSelectDropdownPrimary__Option,
  DefaultSelectDropdownPrimary__OptionProps
} from "./plasmic/copy_of_market_v_2/PlasmicSelectDropdownPrimary__Option";
import { SelectOptionRef } from "@plasmicapp/react-web";

interface SelectDropdownPrimary__OptionProps
  extends DefaultSelectDropdownPrimary__OptionProps {}

function SelectDropdownPrimary__Option_(
  props: SelectDropdownPrimary__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicSelectDropdownPrimary__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicSelectDropdownPrimary__Option {...plasmicProps} />;
}

const SelectDropdownPrimary__Option = React.forwardRef(
  SelectDropdownPrimary__Option_
);

export default Object.assign(SelectDropdownPrimary__Option, {
  __plumeType: "select-option"
});
