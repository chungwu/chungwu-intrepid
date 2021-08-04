// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: Jv5vBYbBa10t-ne
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
import InputTextPrimary from "../../InputTextPrimary"; // plasmic-import: 3HTlzeJK29QS8Vu/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicInputTextFormSecondary.module.css"; // plasmic-import: Jv5vBYbBa10t-ne/css

export type PlasmicInputTextFormSecondary__VariantMembers = {
  size: "_270" | "_360" | "_540" | "_720";
  color: "light" | "dark" | "underlinePrimary" | "underlineLight";
  subhead: "subhead";
};

export type PlasmicInputTextFormSecondary__VariantsArgs = {
  size?: SingleChoiceArg<"_270" | "_360" | "_540" | "_720">;
  color?: SingleChoiceArg<
    "light" | "dark" | "underlinePrimary" | "underlineLight"
  >;
  subhead?: SingleBooleanChoiceArg<"subhead">;
};

type VariantPropType = keyof PlasmicInputTextFormSecondary__VariantsArgs;
export const PlasmicInputTextFormSecondary__VariantProps =
  new Array<VariantPropType>("size", "color", "subhead");

export type PlasmicInputTextFormSecondary__ArgsType = {
  label?: React.ReactNode;
  description?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInputTextFormSecondary__ArgsType;
export const PlasmicInputTextFormSecondary__ArgProps = new Array<ArgPropType>(
  "label",
  "description"
);

export type PlasmicInputTextFormSecondary__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"div">;
  headlineLabelParent?: p.Flex<"label">;
  headlineLabel?: p.Flex<"div">;
  inputTextPrimary?: p.Flex<typeof InputTextPrimary>;
  descriptionParent?: p.Flex<"div">;
  descriptionTextParent?: p.Flex<"div">;
};

export interface DefaultInputTextFormSecondaryProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  size?: SingleChoiceArg<"_270" | "_360" | "_540" | "_720">;
  color?: SingleChoiceArg<
    "light" | "dark" | "underlinePrimary" | "underlineLight"
  >;
  subhead?: SingleBooleanChoiceArg<"subhead">;
  className?: string;
}

function PlasmicInputTextFormSecondary__RenderFunc(props: {
  variants: PlasmicInputTextFormSecondary__VariantsArgs;
  args: PlasmicInputTextFormSecondary__ArgsType;
  overrides: PlasmicInputTextFormSecondary__OverridesType;
  dataFetches?: PlasmicInputTextFormSecondary__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent)}
      >
        <label
          data-plasmic-name={"headlineLabelParent"}
          data-plasmic-override={overrides.headlineLabelParent}
          className={classNames(defaultcss.all, sty.headlineLabelParent)}
        >
          <div
            data-plasmic-name={"headlineLabel"}
            data-plasmic-override={overrides.headlineLabel}
            className={classNames(defaultcss.all, sty.headlineLabel)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.label,
              className: classNames(sty.slotLabel)
            })}
          </div>
        </label>

        <InputTextPrimary
          data-plasmic-name={"inputTextPrimary"}
          data-plasmic-override={overrides.inputTextPrimary}
          background={
            hasVariant(variants, "color", "underlineLight")
              ? ("white" as const)
              : undefined
          }
          className={classNames("__wab_instance", sty.inputTextPrimary, {
            [sty.inputTextPrimary__color_dark]: hasVariant(
              variants,
              "color",
              "dark"
            ),
            [sty.inputTextPrimary__color_light]: hasVariant(
              variants,
              "color",
              "light"
            ),
            [sty.inputTextPrimary__color_underlineLight]: hasVariant(
              variants,
              "color",
              "underlineLight"
            ),
            [sty.inputTextPrimary__color_underlinePrimary]: hasVariant(
              variants,
              "color",
              "underlinePrimary"
            ),
            [sty.inputTextPrimary__size__270]: hasVariant(
              variants,
              "size",
              "_270"
            ),
            [sty.inputTextPrimary__size__360]: hasVariant(
              variants,
              "size",
              "_360"
            ),
            [sty.inputTextPrimary__size__540]: hasVariant(
              variants,
              "size",
              "_540"
            ),
            [sty.inputTextPrimary__size__720]: hasVariant(
              variants,
              "size",
              "_720"
            )
          })}
          type={
            hasVariant(variants, "color", "underlineLight")
              ? ("underline" as const)
              : hasVariant(variants, "color", "underlinePrimary")
              ? ("underline" as const)
              : hasVariant(variants, "color", "dark")
              ? ("primary" as const)
              : hasVariant(variants, "color", "light")
              ? ("secondary" as const)
              : undefined
          }
          width={
            hasVariant(variants, "size", "_720")
              ? ("_720" as const)
              : hasVariant(variants, "size", "_540")
              ? ("_540" as const)
              : hasVariant(variants, "size", "_360")
              ? ("_360" as const)
              : ("_270" as const)
          }
        />

        {(hasVariant(variants, "subhead", "subhead") ? true : true) ? (
          <div
            data-plasmic-name={"descriptionParent"}
            data-plasmic-override={overrides.descriptionParent}
            className={classNames(defaultcss.all, sty.descriptionParent, {
              [sty.descriptionParent__subhead]: hasVariant(
                variants,
                "subhead",
                "subhead"
              )
            })}
          >
            <div
              data-plasmic-name={"descriptionTextParent"}
              data-plasmic-override={overrides.descriptionTextParent}
              className={classNames(defaultcss.all, sty.descriptionTextParent)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Description",
                value: args.description,
                className: classNames(sty.slotDescription, {
                  [sty.slotDescription__subhead]: hasVariant(
                    variants,
                    "subhead",
                    "subhead"
                  )
                })
              })}
            </div>
          </div>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "headlineLabelParent",
    "headlineLabel",
    "inputTextPrimary",
    "descriptionParent",
    "descriptionTextParent"
  ],
  parent: [
    "parent",
    "headlineLabelParent",
    "headlineLabel",
    "inputTextPrimary",
    "descriptionParent",
    "descriptionTextParent"
  ],
  headlineLabelParent: ["headlineLabelParent", "headlineLabel"],
  headlineLabel: ["headlineLabel"],
  inputTextPrimary: ["inputTextPrimary"],
  descriptionParent: ["descriptionParent", "descriptionTextParent"],
  descriptionTextParent: ["descriptionTextParent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parent: "div";
  headlineLabelParent: "label";
  headlineLabel: "div";
  inputTextPrimary: typeof InputTextPrimary;
  descriptionParent: "div";
  descriptionTextParent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputTextFormSecondary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputTextFormSecondary__VariantsArgs;
    args?: PlasmicInputTextFormSecondary__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInputTextFormSecondary__Fetches;
  } & Omit<PlasmicInputTextFormSecondary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputTextFormSecondary__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputTextFormSecondary__ArgProps,
      internalVariantPropNames: PlasmicInputTextFormSecondary__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicInputTextFormSecondary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextFormSecondary";
  } else {
    func.displayName = `PlasmicInputTextFormSecondary.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextFormSecondary = Object.assign(
  // Top-level PlasmicInputTextFormSecondary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    headlineLabelParent: makeNodeComponent("headlineLabelParent"),
    headlineLabel: makeNodeComponent("headlineLabel"),
    inputTextPrimary: makeNodeComponent("inputTextPrimary"),
    descriptionParent: makeNodeComponent("descriptionParent"),
    descriptionTextParent: makeNodeComponent("descriptionTextParent"),

    // Metadata about props expected for PlasmicInputTextFormSecondary
    internalVariantProps: PlasmicInputTextFormSecondary__VariantProps,
    internalArgProps: PlasmicInputTextFormSecondary__ArgProps
  }
);

export default PlasmicInputTextFormSecondary;
/* prettier-ignore-end */
