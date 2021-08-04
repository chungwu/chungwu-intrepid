// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: mRuNfrL7Pl0W2gW
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
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: 6pY-cK_-KJMdF_/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: gpNjXfbD_ZdpPU/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicElementListingEditCard.module.css"; // plasmic-import: mRuNfrL7Pl0W2gW/css

import CircleCheckedIcon from "./icons/PlasmicIcon__CircleChecked"; // plasmic-import: Rx_TV1hYzOOAuX3/icon
import Icon176Icon from "./icons/PlasmicIcon__Icon176"; // plasmic-import: pztbm3RWMG3Ggxk/icon
import Icon177Icon from "./icons/PlasmicIcon__Icon177"; // plasmic-import: NOfWrFOMKMx_mTF/icon
import Icon111Icon from "./icons/PlasmicIcon__Icon111"; // plasmic-import: bs7hcDR6K9Xgoi3/icon
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicElementListingEditCard__VariantMembers = {
  icon: "icon";
  button: "button";
  toolTip: "alert" | "question" | "check";
};

export type PlasmicElementListingEditCard__VariantsArgs = {
  icon?: SingleBooleanChoiceArg<"icon">;
  button?: SingleBooleanChoiceArg<"button">;
  toolTip?: SingleChoiceArg<"alert" | "question" | "check">;
};

type VariantPropType = keyof PlasmicElementListingEditCard__VariantsArgs;
export const PlasmicElementListingEditCard__VariantProps =
  new Array<VariantPropType>("icon", "button", "toolTip");

export type PlasmicElementListingEditCard__ArgsType = {
  children?: React.ReactNode;
  buttonParent?: React.ReactNode;
  alert?: React.ReactNode;
  question?: React.ReactNode;
  check?: React.ReactNode;
  textLink?: React.ReactNode;
};

type ArgPropType = keyof PlasmicElementListingEditCard__ArgsType;
export const PlasmicElementListingEditCard__ArgProps = new Array<ArgPropType>(
  "children",
  "buttonParent",
  "alert",
  "question",
  "check",
  "textLink"
);

export type PlasmicElementListingEditCard__OverridesType = {
  root?: p.Flex<"div">;
  editHeadlineTitleParent?: p.Flex<"div">;
  svgParent?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  buttonParent?: p.Flex<"div">;
};

export interface DefaultElementListingEditCardProps {
  children?: React.ReactNode;
  buttonParent?: React.ReactNode;
  alert?: React.ReactNode;
  question?: React.ReactNode;
  check?: React.ReactNode;
  textLink?: React.ReactNode;
  icon?: SingleBooleanChoiceArg<"icon">;
  button?: SingleBooleanChoiceArg<"button">;
  toolTip?: SingleChoiceArg<"alert" | "question" | "check">;
  className?: string;
}

function PlasmicElementListingEditCard__RenderFunc(props: {
  variants: PlasmicElementListingEditCard__VariantsArgs;
  args: PlasmicElementListingEditCard__ArgsType;
  overrides: PlasmicElementListingEditCard__OverridesType;
  dataFetches?: PlasmicElementListingEditCard__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__button]: hasVariant(variants, "button", "button"),
        [sty.root__icon]: hasVariant(variants, "icon", "icon"),
        [sty.root__toolTip_check]: hasVariant(variants, "toolTip", "check")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"editHeadlineTitleParent"}
        data-plasmic-override={overrides.editHeadlineTitleParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.editHeadlineTitleParent, {
          [sty.editHeadlineTitleParent__toolTip_check]: hasVariant(
            variants,
            "toolTip",
            "check"
          )
        })}
      >
        <div
          data-plasmic-name={"svgParent"}
          data-plasmic-override={overrides.svgParent}
          className={classNames(defaultcss.all, sty.svgParent, {
            [sty.svgParent__icon]: hasVariant(variants, "icon", "icon"),
            [sty.svgParent__toolTip_alert]: hasVariant(
              variants,
              "toolTip",
              "alert"
            ),
            [sty.svgParent__toolTip_check]: hasVariant(
              variants,
              "toolTip",
              "check"
            ),
            [sty.svgParent__toolTip_question]: hasVariant(
              variants,
              "toolTip",
              "question"
            )
          })}
        >
          {(
            hasVariant(variants, "toolTip", "check")
              ? false
              : hasVariant(variants, "toolTip", "question")
              ? false
              : hasVariant(variants, "toolTip", "alert")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <CircleCheckedIcon
                    className={classNames(defaultcss.all, sty.svg__aow1K)}
                    role={"img"}
                  />
                ),

                value: args.children
              })
            : null}
          {(hasVariant(variants, "toolTip", "alert") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon176Icon
                    className={classNames(defaultcss.all, sty.svg__dx5Fc)}
                    role={"img"}
                  />
                ),

                value: args.alert
              })
            : null}
          {(
            hasVariant(variants, "toolTip", "question")
              ? true
              : hasVariant(variants, "toolTip", "alert")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon177Icon
                    className={classNames(defaultcss.all, sty.svg__uswo9)}
                    role={"img"}
                  />
                ),

                value: args.question
              })
            : null}
          {(
            hasVariant(variants, "toolTip", "check")
              ? true
              : hasVariant(variants, "toolTip", "question")
              ? false
              : hasVariant(variants, "toolTip", "alert")
              ? false
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Icon111Icon
                    className={classNames(defaultcss.all, sty.svg__zNgOo)}
                    role={"img"}
                  />
                ),

                value: args.check
              })
            : null}
        </div>

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(defaultcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: <TextLinkUnderlinePrimary size={"_32" as const} />,

            value: args.textLink
          })}
        </div>
      </p.Stack>

      <div
        data-plasmic-name={"buttonParent"}
        data-plasmic-override={overrides.buttonParent}
        className={classNames(defaultcss.all, sty.buttonParent, {
          [sty.buttonParent__button]: hasVariant(variants, "button", "button"),
          [sty.buttonParent__icon]: hasVariant(variants, "icon", "icon")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: true ? (
            <ButtonPrimary
              className={classNames(
                "__wab_instance",
                sty.buttonPrimary___7EBhe
              )}
              size={"_90" as const}
              type={"ghost" as const}
            />
          ) : null,
          value: args.buttonParent
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "editHeadlineTitleParent",
    "svgParent",
    "freeBox",
    "buttonParent"
  ],
  editHeadlineTitleParent: ["editHeadlineTitleParent", "svgParent", "freeBox"],
  svgParent: ["svgParent"],
  freeBox: ["freeBox"],
  buttonParent: ["buttonParent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  editHeadlineTitleParent: "div";
  svgParent: "div";
  freeBox: "div";
  buttonParent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicElementListingEditCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicElementListingEditCard__VariantsArgs;
    args?: PlasmicElementListingEditCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicElementListingEditCard__Fetches;
  } & Omit<PlasmicElementListingEditCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicElementListingEditCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicElementListingEditCard__ArgProps,
      internalVariantPropNames: PlasmicElementListingEditCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicElementListingEditCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementListingEditCard";
  } else {
    func.displayName = `PlasmicElementListingEditCard.${nodeName}`;
  }
  return func;
}

export const PlasmicElementListingEditCard = Object.assign(
  // Top-level PlasmicElementListingEditCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editHeadlineTitleParent: makeNodeComponent("editHeadlineTitleParent"),
    svgParent: makeNodeComponent("svgParent"),
    freeBox: makeNodeComponent("freeBox"),
    buttonParent: makeNodeComponent("buttonParent"),

    // Metadata about props expected for PlasmicElementListingEditCard
    internalVariantProps: PlasmicElementListingEditCard__VariantProps,
    internalArgProps: PlasmicElementListingEditCard__ArgProps
  }
);

export default PlasmicElementListingEditCard;
/* prettier-ignore-end */