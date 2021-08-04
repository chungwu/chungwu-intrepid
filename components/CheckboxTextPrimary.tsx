import * as React from "react";
import {
  PlasmicCheckboxTextPrimary,
  DefaultCheckboxTextPrimaryProps
} from "./plasmic/copy_of_market_v_2/PlasmicCheckboxTextPrimary";
import { CheckboxRef } from "@plasmicapp/react-web";

interface CheckboxTextPrimaryProps extends DefaultCheckboxTextPrimaryProps {}

function CheckboxTextPrimary_(
  props: CheckboxTextPrimaryProps,
  ref: CheckboxRef
) {
  const { plasmicProps, state } =
    PlasmicCheckboxTextPrimary.useBehavior<CheckboxTextPrimaryProps>(
      props,
      ref
    );
  return <PlasmicCheckboxTextPrimary {...plasmicProps} />;
}

const CheckboxTextPrimary = React.forwardRef(CheckboxTextPrimary_);

export default Object.assign(CheckboxTextPrimary, {
  __plumeType: "checkbox"
});
