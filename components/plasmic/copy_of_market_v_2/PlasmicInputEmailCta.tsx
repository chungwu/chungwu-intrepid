// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: c_xXitTmMJVLuI
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
import InputEmailA from "../../InputEmailA"; // plasmic-import: UmAzZG9nly83mS/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicInputEmailCta.module.css"; // plasmic-import: c_xXitTmMJVLuI/css

export type PlasmicInputEmailCta__VariantMembers = {
  size: "_360" | "_720";
};

export type PlasmicInputEmailCta__VariantsArgs = {
  size?: SingleChoiceArg<"_360" | "_720">;
};

type VariantPropType = keyof PlasmicInputEmailCta__VariantsArgs;
export const PlasmicInputEmailCta__VariantProps = new Array<VariantPropType>(
  "size"
);

export type PlasmicInputEmailCta__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInputEmailCta__ArgsType;
export const PlasmicInputEmailCta__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicInputEmailCta__OverridesType = {
  root?: p.Flex<"div">;
  parentSectionInputEmail?: p.Flex<"div">;
  inputEmailA?: p.Flex<typeof InputEmailA>;
};

export interface DefaultInputEmailCtaProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  size?: SingleChoiceArg<"_360" | "_720">;
  className?: string;
}

function PlasmicInputEmailCta__RenderFunc(props: {
  variants: PlasmicInputEmailCta__VariantsArgs;
  args: PlasmicInputEmailCta__ArgsType;
  overrides: PlasmicInputEmailCta__OverridesType;
  dataFetches?: PlasmicInputEmailCta__Fetches;
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
        [sty.root__size__360]: hasVariant(variants, "size", "_360"),
        [sty.root__size__720]: hasVariant(variants, "size", "_720")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parentSectionInputEmail"}
        data-plasmic-override={overrides.parentSectionInputEmail}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parentSectionInputEmail, {
          [sty.parentSectionInputEmail__size__720]: hasVariant(
            variants,
            "size",
            "_720"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__tu4Xh, {
            [sty.freeBox__size__720__tu4XhWo6Mm]: hasVariant(
              variants,
              "size",
              "_720"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__uLo8L, {
              [sty.freeBox__size__720__uLo8LWo6Mm]: hasVariant(
                variants,
                "size",
                "_720"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents:
                "Turn your services into a scalable & profitable business",
              value: args.children,
              className: classNames(sty.slotChildren, {
                [sty.slotChildren__size__720]: hasVariant(
                  variants,
                  "size",
                  "_720"
                )
              })
            })}

            <div className={classNames(defaultcss.all, sty.freeBox___03Nb2)}>
              {p.renderPlasmicSlot({
                defaultContents:
                  "Explore all the specialised tools and services you need to start, run, and grow a global technology and creative services business.",
                value: args.slot,
                className: classNames(sty.slotSlot, {
                  [sty.slotSlot__size__720]: hasVariant(
                    variants,
                    "size",
                    "_720"
                  )
                })
              })}
            </div>
          </p.Stack>
        </p.Stack>

        <InputEmailA
          data-plasmic-name={"inputEmailA"}
          data-plasmic-override={overrides.inputEmailA}
          className={classNames("__wab_instance", sty.inputEmailA, {
            [sty.inputEmailA__size__720]: hasVariant(variants, "size", "_720")
          })}
          size={
            hasVariant(variants, "size", "_720") ? ("_540" as const) : undefined
          }
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "parentSectionInputEmail", "inputEmailA"],
  parentSectionInputEmail: ["parentSectionInputEmail", "inputEmailA"],
  inputEmailA: ["inputEmailA"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parentSectionInputEmail: "div";
  inputEmailA: typeof InputEmailA;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputEmailCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputEmailCta__VariantsArgs;
    args?: PlasmicInputEmailCta__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInputEmailCta__Fetches;
  } & Omit<PlasmicInputEmailCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputEmailCta__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputEmailCta__ArgProps,
      internalVariantPropNames: PlasmicInputEmailCta__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicInputEmailCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputEmailCta";
  } else {
    func.displayName = `PlasmicInputEmailCta.${nodeName}`;
  }
  return func;
}

export const PlasmicInputEmailCta = Object.assign(
  // Top-level PlasmicInputEmailCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parentSectionInputEmail: makeNodeComponent("parentSectionInputEmail"),
    inputEmailA: makeNodeComponent("inputEmailA"),

    // Metadata about props expected for PlasmicInputEmailCta
    internalVariantProps: PlasmicInputEmailCta__VariantProps,
    internalArgProps: PlasmicInputEmailCta__ArgProps
  }
);

export default PlasmicInputEmailCta;
/* prettier-ignore-end */