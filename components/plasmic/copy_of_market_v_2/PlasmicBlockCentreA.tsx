// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: CnBVMeNbOCVVk0m
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
import IconPrimary from "../../IconPrimary"; // plasmic-import: leoxU5GkcMHMK8X/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: gpNjXfbD_ZdpPU/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicBlockCentreA.module.css"; // plasmic-import: CnBVMeNbOCVVk0m/css

import Icon171Icon from "./icons/PlasmicIcon__Icon171"; // plasmic-import: L1T0WWEIfF6hPBd/icon
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicBlockCentreA__VariantMembers = {};

export type PlasmicBlockCentreA__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlockCentreA__VariantsArgs;
export const PlasmicBlockCentreA__VariantProps = new Array<VariantPropType>();

export type PlasmicBlockCentreA__ArgsType = {
  button?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBlockCentreA__ArgsType;
export const PlasmicBlockCentreA__ArgProps = new Array<ArgPropType>("button");

export type PlasmicBlockCentreA__OverridesType = {
  parent?: p.Flex<"div">;
  iconElementParent?: p.Flex<"div">;
  iconBg?: p.Flex<"div">;
  iconPrimary?: p.Flex<typeof IconPrimary>;
  svgIcon80?: p.Flex<"svg">;
  headlineSubheadParent?: p.Flex<"div">;
  headlineTextParent?: p.Flex<"div">;
  headlineText?: p.Flex<"div">;
  subheadTextparent?: p.Flex<"div">;
  subheadText?: p.Flex<"div">;
  bodyTextParent?: p.Flex<"div">;
  bodyText?: p.Flex<"div">;
  buttonParent?: p.Flex<"div">;
};

export interface DefaultBlockCentreAProps {
  button?: React.ReactNode;
  className?: string;
}

function PlasmicBlockCentreA__RenderFunc(props: {
  variants: PlasmicBlockCentreA__VariantsArgs;
  args: PlasmicBlockCentreA__ArgsType;
  overrides: PlasmicBlockCentreA__OverridesType;
  dataFetches?: PlasmicBlockCentreA__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent)}
    >
      <div
        data-plasmic-name={"iconElementParent"}
        data-plasmic-override={overrides.iconElementParent}
        className={classNames(defaultcss.all, sty.iconElementParent)}
      >
        <div
          data-plasmic-name={"iconBg"}
          data-plasmic-override={overrides.iconBg}
          className={classNames(defaultcss.all, sty.iconBg)}
        >
          <IconPrimary
            data-plasmic-name={"iconPrimary"}
            data-plasmic-override={overrides.iconPrimary}
            size={"_80Px" as const}
            svgIcon80Px={
              <Icon171Icon
                data-plasmic-name={"svgIcon80"}
                data-plasmic-override={overrides.svgIcon80}
                className={classNames(defaultcss.all, sty.svgIcon80)}
                role={"img"}
              />
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"headlineSubheadParent"}
        data-plasmic-override={overrides.headlineSubheadParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.headlineSubheadParent)}
      >
        <div
          data-plasmic-name={"headlineTextParent"}
          data-plasmic-override={overrides.headlineTextParent}
          className={classNames(defaultcss.all, sty.headlineTextParent)}
        >
          <div
            data-plasmic-name={"headlineText"}
            data-plasmic-override={overrides.headlineText}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.headlineText
            )}
          >
            {"Headline"}
          </div>
        </div>

        <div
          data-plasmic-name={"subheadTextparent"}
          data-plasmic-override={overrides.subheadTextparent}
          className={classNames(defaultcss.all, sty.subheadTextparent)}
        >
          <div
            data-plasmic-name={"subheadText"}
            data-plasmic-override={overrides.subheadText}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.subheadText
            )}
          >
            {"Subhead text"}
          </div>
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"bodyTextParent"}
        data-plasmic-override={overrides.bodyTextParent}
        className={classNames(defaultcss.all, sty.bodyTextParent)}
      >
        <div
          data-plasmic-name={"bodyText"}
          data-plasmic-override={overrides.bodyText}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.bodyText
          )}
        >
          {"Body text"}
        </div>
      </div>

      <div
        data-plasmic-name={"buttonParent"}
        data-plasmic-override={overrides.buttonParent}
        className={classNames(defaultcss.all, sty.buttonParent)}
      >
        {p.renderPlasmicSlot({
          defaultContents: <ButtonPrimary size={"_360" as const} />,

          value: args.button
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "iconElementParent",
    "iconBg",
    "iconPrimary",
    "svgIcon80",
    "headlineSubheadParent",
    "headlineTextParent",
    "headlineText",
    "subheadTextparent",
    "subheadText",
    "bodyTextParent",
    "bodyText",
    "buttonParent"
  ],
  iconElementParent: [
    "iconElementParent",
    "iconBg",
    "iconPrimary",
    "svgIcon80"
  ],
  iconBg: ["iconBg", "iconPrimary", "svgIcon80"],
  iconPrimary: ["iconPrimary", "svgIcon80"],
  svgIcon80: ["svgIcon80"],
  headlineSubheadParent: [
    "headlineSubheadParent",
    "headlineTextParent",
    "headlineText",
    "subheadTextparent",
    "subheadText"
  ],
  headlineTextParent: ["headlineTextParent", "headlineText"],
  headlineText: ["headlineText"],
  subheadTextparent: ["subheadTextparent", "subheadText"],
  subheadText: ["subheadText"],
  bodyTextParent: ["bodyTextParent", "bodyText"],
  bodyText: ["bodyText"],
  buttonParent: ["buttonParent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  parent: "div";
  iconElementParent: "div";
  iconBg: "div";
  iconPrimary: typeof IconPrimary;
  svgIcon80: "svg";
  headlineSubheadParent: "div";
  headlineTextParent: "div";
  headlineText: "div";
  subheadTextparent: "div";
  subheadText: "div";
  bodyTextParent: "div";
  bodyText: "div";
  buttonParent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlockCentreA__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlockCentreA__VariantsArgs;
    args?: PlasmicBlockCentreA__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBlockCentreA__Fetches;
  } & Omit<PlasmicBlockCentreA__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBlockCentreA__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBlockCentreA__ArgProps,
      internalVariantPropNames: PlasmicBlockCentreA__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBlockCentreA__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicBlockCentreA";
  } else {
    func.displayName = `PlasmicBlockCentreA.${nodeName}`;
  }
  return func;
}

export const PlasmicBlockCentreA = Object.assign(
  // Top-level PlasmicBlockCentreA renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    iconElementParent: makeNodeComponent("iconElementParent"),
    iconBg: makeNodeComponent("iconBg"),
    iconPrimary: makeNodeComponent("iconPrimary"),
    svgIcon80: makeNodeComponent("svgIcon80"),
    headlineSubheadParent: makeNodeComponent("headlineSubheadParent"),
    headlineTextParent: makeNodeComponent("headlineTextParent"),
    headlineText: makeNodeComponent("headlineText"),
    subheadTextparent: makeNodeComponent("subheadTextparent"),
    subheadText: makeNodeComponent("subheadText"),
    bodyTextParent: makeNodeComponent("bodyTextParent"),
    bodyText: makeNodeComponent("bodyText"),
    buttonParent: makeNodeComponent("buttonParent"),

    // Metadata about props expected for PlasmicBlockCentreA
    internalVariantProps: PlasmicBlockCentreA__VariantProps,
    internalArgProps: PlasmicBlockCentreA__ArgProps
  }
);

export default PlasmicBlockCentreA;
/* prettier-ignore-end */
