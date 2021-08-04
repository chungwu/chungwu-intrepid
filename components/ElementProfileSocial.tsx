// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicElementProfileSocial,
  DefaultElementProfileSocialProps
} from "./plasmic/copy_of_market_v_2/PlasmicElementProfileSocial";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface ElementProfileSocialProps extends Omit<DefaultElementProfileSocialProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultElementProfileSocialProps altogether and have
// total control over the props for your component.
interface ElementProfileSocialProps extends DefaultElementProfileSocialProps {}

function ElementProfileSocial_(
  props: ElementProfileSocialProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicElementProfileSocial to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicElementProfileSocial are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all ElementProfileSocialProps here, but feel free
  // to do whatever works for you.

  return <PlasmicElementProfileSocial root={{ ref }} {...props} />;
}

const ElementProfileSocial = React.forwardRef(ElementProfileSocial_);
export default ElementProfileSocial;
