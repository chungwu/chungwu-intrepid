// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: UmAzZG9nly83mS
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
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: gpNjXfbD_ZdpPU/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicInputEmailA.module.css"; // plasmic-import: UmAzZG9nly83mS/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicInputEmailA__VariantMembers = {
  size: "_360" | "_540" | "_720";
};

export type PlasmicInputEmailA__VariantsArgs = {
  size?: SingleChoiceArg<"_360" | "_540" | "_720">;
};

type VariantPropType = keyof PlasmicInputEmailA__VariantsArgs;
export const PlasmicInputEmailA__VariantProps = new Array<VariantPropType>(
  "size"
);

export type PlasmicInputEmailA__ArgsType = {};
type ArgPropType = keyof PlasmicInputEmailA__ArgsType;
export const PlasmicInputEmailA__ArgProps = new Array<ArgPropType>();

export type PlasmicInputEmailA__OverridesType = {
  root?: p.Flex<"div">;
  inputEmailParent?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  buttonPrimary?: p.Flex<typeof ButtonPrimary>;
};

export interface DefaultInputEmailAProps {
  size?: SingleChoiceArg<"_360" | "_540" | "_720">;
  className?: string;
}

function PlasmicInputEmailA__RenderFunc(props: {
  variants: PlasmicInputEmailA__VariantsArgs;
  args: PlasmicInputEmailA__ArgsType;
  overrides: PlasmicInputEmailA__OverridesType;
  dataFetches?: PlasmicInputEmailA__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"inputEmailParent"}
        data-plasmic-override={overrides.inputEmailParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.inputEmailParent, {
          [sty.inputEmailParent__size__360]: hasVariant(
            variants,
            "size",
            "_360"
          ),
          [sty.inputEmailParent__size__540]: hasVariant(
            variants,
            "size",
            "_540"
          ),
          [sty.inputEmailParent__size__720]: hasVariant(
            variants,
            "size",
            "_720"
          )
        })}
      >
        <input
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          className={classNames(defaultcss.input, sty.textbox, {
            [sty.textbox__size__360]: hasVariant(variants, "size", "_360"),
            [sty.textbox__size__540]: hasVariant(variants, "size", "_540"),
            [sty.textbox__size__720]: hasVariant(variants, "size", "_720")
          })}
          placeholder={"Enter your email address" as const}
          size={1 as const}
          type={"text" as const}
          value={"" as const}
        />

        <ButtonPrimary
          data-plasmic-name={"buttonPrimary"}
          data-plasmic-override={overrides.buttonPrimary}
          className={classNames("__wab_instance", sty.buttonPrimary, {
            [sty.buttonPrimary__size__360]: hasVariant(
              variants,
              "size",
              "_360"
            ),
            [sty.buttonPrimary__size__540]: hasVariant(
              variants,
              "size",
              "_540"
            ),
            [sty.buttonPrimary__size__720]: hasVariant(variants, "size", "_720")
          })}
          color={
            hasVariant(variants, "size", "_720")
              ? undefined
              : hasVariant(variants, "size", "_540")
              ? undefined
              : hasVariant(variants, "size", "_360")
              ? undefined
              : hasVariant(globalVariants, "screen", "desktop")
              ? ("brand" as const)
              : undefined
          }
          size={
            hasVariant(variants, "size", "_720")
              ? ("_270" as const)
              : hasVariant(variants, "size", "_540")
              ? ("_180" as const)
              : ("_120" as const)
          }
        >
          {hasVariant(globalVariants, "screen", "desktop")
            ? "Apply to join"
            : "Enter"}
        </ButtonPrimary>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "inputEmailParent", "textbox", "buttonPrimary"],
  inputEmailParent: ["inputEmailParent", "textbox", "buttonPrimary"],
  textbox: ["textbox"],
  buttonPrimary: ["buttonPrimary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  inputEmailParent: "div";
  textbox: "input";
  buttonPrimary: typeof ButtonPrimary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputEmailA__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputEmailA__VariantsArgs;
    args?: PlasmicInputEmailA__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInputEmailA__Fetches;
  } & Omit<PlasmicInputEmailA__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputEmailA__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputEmailA__ArgProps,
      internalVariantPropNames: PlasmicInputEmailA__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicInputEmailA__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputEmailA";
  } else {
    func.displayName = `PlasmicInputEmailA.${nodeName}`;
  }
  return func;
}

export const PlasmicInputEmailA = Object.assign(
  // Top-level PlasmicInputEmailA renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    inputEmailParent: makeNodeComponent("inputEmailParent"),
    textbox: makeNodeComponent("textbox"),
    buttonPrimary: makeNodeComponent("buttonPrimary"),

    // Metadata about props expected for PlasmicInputEmailA
    internalVariantProps: PlasmicInputEmailA__VariantProps,
    internalArgProps: PlasmicInputEmailA__ArgProps
  }
);

export default PlasmicInputEmailA;
/* prettier-ignore-end */
