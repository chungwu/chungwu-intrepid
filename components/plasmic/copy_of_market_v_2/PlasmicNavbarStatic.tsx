// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: iqHLBhCUC4D_9I
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
import LogoHeader from "../../LogoHeader"; // plasmic-import: KYZQ9ThnFfyK_/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicNavbarStatic.module.css"; // plasmic-import: iqHLBhCUC4D_9I/css

import SectionDividerIcon from "./icons/PlasmicIcon__SectionDivider"; // plasmic-import: Q0kQ1Q6uwg9YSBx/icon

export type PlasmicNavbarStatic__VariantMembers = {};

export type PlasmicNavbarStatic__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbarStatic__VariantsArgs;
export const PlasmicNavbarStatic__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbarStatic__ArgsType = {};
type ArgPropType = keyof PlasmicNavbarStatic__ArgsType;
export const PlasmicNavbarStatic__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbarStatic__OverridesType = {
  root?: p.Flex<"div">;
  logoHeader?: p.Flex<typeof LogoHeader>;
  svg?: p.Flex<"svg">;
};

export interface DefaultNavbarStaticProps {
  className?: string;
}

function PlasmicNavbarStatic__RenderFunc(props: {
  variants: PlasmicNavbarStatic__VariantsArgs;
  args: PlasmicNavbarStatic__ArgsType;
  overrides: PlasmicNavbarStatic__OverridesType;
  dataFetches?: PlasmicNavbarStatic__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    (
      hasVariant(globalVariants, "screen", "mobile")
        ? true
        : hasVariant(globalVariants, "screen", "desktop")
        ? true
        : false
    ) ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      >
        {(
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "desktop")
            ? true
            : false
        ) ? (
          <div className={classNames(defaultcss.all, sty.freeBox__pvHfA)}>
            {(
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : hasVariant(globalVariants, "screen", "desktop")
                ? true
                : false
            ) ? (
              <div className={classNames(defaultcss.all, sty.freeBox__kSGi6)}>
                <LogoHeader
                  data-plasmic-name={"logoHeader"}
                  data-plasmic-override={overrides.logoHeader}
                />
              </div>
            ) : null}
          </div>
        ) : null}
        {(
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "desktop")
            ? true
            : false
        ) ? (
          <div className={classNames(defaultcss.all, sty.freeBox__ec39A)}>
            <SectionDividerIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg)}
              role={"img"}
            />
          </div>
        ) : null}
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logoHeader", "svg"],
  logoHeader: ["logoHeader"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logoHeader: typeof LogoHeader;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarStatic__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarStatic__VariantsArgs;
    args?: PlasmicNavbarStatic__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavbarStatic__Fetches;
  } & Omit<PlasmicNavbarStatic__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbarStatic__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavbarStatic__ArgProps,
      internalVariantPropNames: PlasmicNavbarStatic__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavbarStatic__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarStatic";
  } else {
    func.displayName = `PlasmicNavbarStatic.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarStatic = Object.assign(
  // Top-level PlasmicNavbarStatic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoHeader: makeNodeComponent("logoHeader"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNavbarStatic
    internalVariantProps: PlasmicNavbarStatic__VariantProps,
    internalArgProps: PlasmicNavbarStatic__ArgProps
  }
);

export default PlasmicNavbarStatic;
/* prettier-ignore-end */
