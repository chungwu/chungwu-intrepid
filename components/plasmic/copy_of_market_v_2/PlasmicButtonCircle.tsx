// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: z-_l4ahgbVZRe_Q
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
import * as sty from "./PlasmicButtonCircle.module.css"; // plasmic-import: z-_l4ahgbVZRe_Q/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicButtonCircle__VariantMembers = {
  size: "_32" | "_36" | "_40" | "_48";
  color: "primary" | "secondary" | "outline" | "brand";
};

export type PlasmicButtonCircle__VariantsArgs = {
  size?: SingleChoiceArg<"_32" | "_36" | "_40" | "_48">;
  color?: SingleChoiceArg<"primary" | "secondary" | "outline" | "brand">;
};

type VariantPropType = keyof PlasmicButtonCircle__VariantsArgs;
export const PlasmicButtonCircle__VariantProps = new Array<VariantPropType>(
  "size",
  "color"
);

export type PlasmicButtonCircle__ArgsType = {
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicButtonCircle__ArgsType;
export const PlasmicButtonCircle__ArgProps = new Array<ArgPropType>("icon");

export type PlasmicButtonCircle__OverridesType = {
  root?: p.Flex<"button">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultButtonCircleProps {
  icon?: React.ReactNode;
  size?: SingleChoiceArg<"_32" | "_36" | "_40" | "_48">;
  color?: SingleChoiceArg<"primary" | "secondary" | "outline" | "brand">;
  className?: string;
}

function PlasmicButtonCircle__RenderFunc(props: {
  variants: PlasmicButtonCircle__VariantsArgs;
  args: PlasmicButtonCircle__ArgsType;
  overrides: PlasmicButtonCircle__OverridesType;
  dataFetches?: PlasmicButtonCircle__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.button, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <PlusBoldIcon
              className={classNames(defaultcss.all, sty.svg__jrd75)}
              role={"img"}
            />
          ),

          value: args.icon
        })}
      </div>
    </button>
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
  root: "button";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonCircle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonCircle__VariantsArgs;
    args?: PlasmicButtonCircle__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButtonCircle__Fetches;
  } & Omit<PlasmicButtonCircle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonCircle__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButtonCircle__ArgProps,
      internalVariantPropNames: PlasmicButtonCircle__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButtonCircle__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonCircle";
  } else {
    func.displayName = `PlasmicButtonCircle.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonCircle = Object.assign(
  // Top-level PlasmicButtonCircle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicButtonCircle
    internalVariantProps: PlasmicButtonCircle__VariantProps,
    internalArgProps: PlasmicButtonCircle__ArgProps
  }
);

export default PlasmicButtonCircle;
/* prettier-ignore-end */
