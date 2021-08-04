// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: _WEBDN4X8m4r90
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
import * as sty from "./PlasmicInputRichTextField.module.css"; // plasmic-import: _WEBDN4X8m4r90/css

export type PlasmicInputRichTextField__VariantMembers = {
  headline: "headline";
  description: "description";
  type: "primary" | "secondary";
  size: "_180" | "_270" | "_360" | "_540";
};

export type PlasmicInputRichTextField__VariantsArgs = {
  headline?: SingleBooleanChoiceArg<"headline">;
  description?: SingleBooleanChoiceArg<"description">;
  type?: SingleChoiceArg<"primary" | "secondary">;
  size?: SingleChoiceArg<"_180" | "_270" | "_360" | "_540">;
};

type VariantPropType = keyof PlasmicInputRichTextField__VariantsArgs;
export const PlasmicInputRichTextField__VariantProps =
  new Array<VariantPropType>("headline", "description", "type", "size");

export type PlasmicInputRichTextField__ArgsType = {
  children?: React.ReactNode;
  subhead?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInputRichTextField__ArgsType;
export const PlasmicInputRichTextField__ArgProps = new Array<ArgPropType>(
  "children",
  "subhead"
);

export type PlasmicInputRichTextField__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"div">;
  headlineLabelParent?: p.Flex<"div">;
  textarea?: p.Flex<"textarea">;
  subheadParent?: p.Flex<"div">;
};

export interface DefaultInputRichTextFieldProps {
  children?: React.ReactNode;
  subhead?: React.ReactNode;
  headline?: SingleBooleanChoiceArg<"headline">;
  description?: SingleBooleanChoiceArg<"description">;
  type?: SingleChoiceArg<"primary" | "secondary">;
  size?: SingleChoiceArg<"_180" | "_270" | "_360" | "_540">;
  className?: string;
}

function PlasmicInputRichTextField__RenderFunc(props: {
  variants: PlasmicInputRichTextField__VariantsArgs;
  args: PlasmicInputRichTextField__ArgsType;
  overrides: PlasmicInputRichTextField__OverridesType;
  dataFetches?: PlasmicInputRichTextField__Fetches;
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
        [sty.root__size__270]: hasVariant(variants, "size", "_270"),
        [sty.root__size__540]: hasVariant(variants, "size", "_540"),
        [sty.root__type_secondary]: hasVariant(variants, "type", "secondary")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__size__180]: hasVariant(variants, "size", "_180"),
          [sty.parent__size__270]: hasVariant(variants, "size", "_270"),
          [sty.parent__size__360]: hasVariant(variants, "size", "_360"),
          [sty.parent__size__540]: hasVariant(variants, "size", "_540")
        })}
      >
        {(hasVariant(variants, "headline", "headline") ? false : true) ? (
          <div
            data-plasmic-name={"headlineLabelParent"}
            data-plasmic-override={overrides.headlineLabelParent}
            className={classNames(defaultcss.all, sty.headlineLabelParent, {
              [sty.headlineLabelParent__description]: hasVariant(
                variants,
                "description",
                "description"
              ),
              [sty.headlineLabelParent__headline]: hasVariant(
                variants,
                "headline",
                "headline"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Sub Headline",
              value: args.children,
              className: classNames(sty.slotChildren, {
                [sty.slotChildren__headline]: hasVariant(
                  variants,
                  "headline",
                  "headline"
                )
              })
            })}
          </div>
        ) : null}

        <textarea
          data-plasmic-name={"textarea"}
          data-plasmic-override={overrides.textarea}
          className={classNames(defaultcss.textarea, sty.textarea, {
            [sty.textarea__size__180]: hasVariant(variants, "size", "_180"),
            [sty.textarea__size__270]: hasVariant(variants, "size", "_270"),
            [sty.textarea__size__360]: hasVariant(variants, "size", "_360"),
            [sty.textarea__size__540]: hasVariant(variants, "size", "_540"),
            [sty.textarea__type_primary]: hasVariant(
              variants,
              "type",
              "primary"
            ),
            [sty.textarea__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            )
          })}
          placeholder={"Describe" as const}
          value={"" as const}
        />

        {(hasVariant(variants, "description", "description") ? false : true) ? (
          <div
            data-plasmic-name={"subheadParent"}
            data-plasmic-override={overrides.subheadParent}
            className={classNames(defaultcss.all, sty.subheadParent, {
              [sty.subheadParent__description]: hasVariant(
                variants,
                "description",
                "description"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Sub body",
              value: args.subhead,
              className: classNames(sty.slotSubhead, {
                [sty.slotSubhead__description]: hasVariant(
                  variants,
                  "description",
                  "description"
                )
              })
            })}
          </div>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "parent", "headlineLabelParent", "textarea", "subheadParent"],
  parent: ["parent", "headlineLabelParent", "textarea", "subheadParent"],
  headlineLabelParent: ["headlineLabelParent"],
  textarea: ["textarea"],
  subheadParent: ["subheadParent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parent: "div";
  headlineLabelParent: "div";
  textarea: "textarea";
  subheadParent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputRichTextField__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputRichTextField__VariantsArgs;
    args?: PlasmicInputRichTextField__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInputRichTextField__Fetches;
  } & Omit<PlasmicInputRichTextField__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputRichTextField__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputRichTextField__ArgProps,
      internalVariantPropNames: PlasmicInputRichTextField__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicInputRichTextField__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputRichTextField";
  } else {
    func.displayName = `PlasmicInputRichTextField.${nodeName}`;
  }
  return func;
}

export const PlasmicInputRichTextField = Object.assign(
  // Top-level PlasmicInputRichTextField renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    headlineLabelParent: makeNodeComponent("headlineLabelParent"),
    textarea: makeNodeComponent("textarea"),
    subheadParent: makeNodeComponent("subheadParent"),

    // Metadata about props expected for PlasmicInputRichTextField
    internalVariantProps: PlasmicInputRichTextField__VariantProps,
    internalArgProps: PlasmicInputRichTextField__ArgProps
  }
);

export default PlasmicInputRichTextField;
/* prettier-ignore-end */
