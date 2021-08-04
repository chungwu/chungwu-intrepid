// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: oP3_LL4xXepZaZN
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicTagPartnerD.module.css"; // plasmic-import: oP3_LL4xXepZaZN/css

export type PlasmicTagPartnerD__VariantMembers = {
  inset: "inset";
};

export type PlasmicTagPartnerD__VariantsArgs = {
  inset?: SingleBooleanChoiceArg<"inset">;
};

type VariantPropType = keyof PlasmicTagPartnerD__VariantsArgs;
export const PlasmicTagPartnerD__VariantProps = new Array<VariantPropType>(
  "inset"
);

export type PlasmicTagPartnerD__ArgsType = {};
type ArgPropType = keyof PlasmicTagPartnerD__ArgsType;
export const PlasmicTagPartnerD__ArgProps = new Array<ArgPropType>();

export type PlasmicTagPartnerD__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultTagPartnerDProps {
  inset?: SingleBooleanChoiceArg<"inset">;
  className?: string;
}

function PlasmicTagPartnerD__RenderFunc(props: {
  variants: PlasmicTagPartnerD__VariantsArgs;
  args: PlasmicTagPartnerD__ArgsType;
  overrides: PlasmicTagPartnerD__OverridesType;
  dataFetches?: PlasmicTagPartnerD__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__inset]: hasVariant(variants, "inset", "inset")
      })}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox,
          { [sty.freeBox__inset]: hasVariant(variants, "inset", "inset") }
        )}
      >
        {"maker"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTagPartnerD__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTagPartnerD__VariantsArgs;
    args?: PlasmicTagPartnerD__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTagPartnerD__Fetches;
  } & Omit<PlasmicTagPartnerD__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTagPartnerD__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTagPartnerD__ArgProps,
      internalVariantPropNames: PlasmicTagPartnerD__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTagPartnerD__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTagPartnerD";
  } else {
    func.displayName = `PlasmicTagPartnerD.${nodeName}`;
  }
  return func;
}

export const PlasmicTagPartnerD = Object.assign(
  // Top-level PlasmicTagPartnerD renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicTagPartnerD
    internalVariantProps: PlasmicTagPartnerD__VariantProps,
    internalArgProps: PlasmicTagPartnerD__ArgProps
  }
);

export default PlasmicTagPartnerD;
/* prettier-ignore-end */
