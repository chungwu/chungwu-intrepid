// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: ufYw6r4OfnNRx1
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
import * as sty from "./PlasmicInputProcess.module.css"; // plasmic-import: ufYw6r4OfnNRx1/css

import Icon107Icon from "./icons/PlasmicIcon__Icon107"; // plasmic-import: Bluvx2OeXhCzQlw/icon

export type PlasmicInputProcess__VariantMembers = {
  add: "add";
  _delete: "_delete";
  size: "_540";
};

export type PlasmicInputProcess__VariantsArgs = {
  add?: SingleBooleanChoiceArg<"add">;
  _delete?: SingleBooleanChoiceArg<"_delete">;
  size?: SingleChoiceArg<"_540">;
};

type VariantPropType = keyof PlasmicInputProcess__VariantsArgs;
export const PlasmicInputProcess__VariantProps = new Array<VariantPropType>(
  "add",
  "_delete",
  "size"
);

export type PlasmicInputProcess__ArgsType = {};
type ArgPropType = keyof PlasmicInputProcess__ArgsType;
export const PlasmicInputProcess__ArgProps = new Array<ArgPropType>();

export type PlasmicInputProcess__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  textarea?: p.Flex<"textarea">;
  svg?: p.Flex<"svg">;
};

export interface DefaultInputProcessProps {
  add?: SingleBooleanChoiceArg<"add">;
  _delete?: SingleBooleanChoiceArg<"_delete">;
  size?: SingleChoiceArg<"_540">;
  className?: string;
}

function PlasmicInputProcess__RenderFunc(props: {
  variants: PlasmicInputProcess__VariantsArgs;
  args: PlasmicInputProcess__ArgsType;
  overrides: PlasmicInputProcess__OverridesType;
  dataFetches?: PlasmicInputProcess__Fetches;
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
        [sty.root__size__540]: hasVariant(variants, "size", "_540")
      })}
    >
      <input
        data-plasmic-name={"textbox"}
        data-plasmic-override={overrides.textbox}
        className={classNames(defaultcss.input, sty.textbox, {
          [sty.textbox__size__540]: hasVariant(variants, "size", "_540")
        })}
        placeholder={"Process title, eg. step 1" as const}
        size={1 as const}
        type={"text" as const}
        value={"" as const}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___1R5Fc)}
      >
        <textarea
          data-plasmic-name={"textarea"}
          data-plasmic-override={overrides.textarea}
          className={classNames(defaultcss.textarea, sty.textarea, {
            [sty.textarea__size__540]: hasVariant(variants, "size", "_540")
          })}
          placeholder={"Describe your process" as const}
          value={"" as const}
        />

        <div
          className={classNames(defaultcss.all, sty.freeBox__fzF99, {
            [sty.freeBox__add__fzF99Zltrt]: hasVariant(variants, "add", "add")
          })}
        >
          {(hasVariant(variants, "add", "add") ? false : true) ? (
            <div
              className={classNames(defaultcss.all, sty.freeBox___1E2NY, {
                [sty.freeBox__add___1E2NYzltrt]: hasVariant(
                  variants,
                  "add",
                  "add"
                )
              })}
            >
              <Icon107Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(defaultcss.all, sty.svg, {
                  [sty.svg__add]: hasVariant(variants, "add", "add"),
                  [sty.svg__size__540]: hasVariant(variants, "size", "_540")
                })}
                role={"img"}
              />
            </div>
          ) : null}
          {(hasVariant(variants, "_delete", "_delete") ? false : true) ? (
            <div
              className={classNames(defaultcss.all, sty.freeBox__k7Hah, {
                [sty.freeBox___delete__k7Hah1Yx]: hasVariant(
                  variants,
                  "_delete",
                  "_delete"
                ),
                [sty.freeBox__add__k7Hahzltrt]: hasVariant(
                  variants,
                  "add",
                  "add"
                )
              })}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox___2SdM0,
                  {
                    [sty.freeBox___delete___2SdM01Yx]: hasVariant(
                      variants,
                      "_delete",
                      "_delete"
                    ),
                    [sty.freeBox__add___2SdM0Zltrt]: hasVariant(
                      variants,
                      "add",
                      "add"
                    ),
                    [sty.freeBox__size__540___2SdM0GkITf]: hasVariant(
                      variants,
                      "size",
                      "_540"
                    )
                  }
                )}
              >
                {"Delete"}
              </div>
            </div>
          ) : null}
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "textarea", "svg"],
  textbox: ["textbox"],
  textarea: ["textarea"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  textarea: "textarea";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputProcess__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputProcess__VariantsArgs;
    args?: PlasmicInputProcess__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInputProcess__Fetches;
  } & Omit<PlasmicInputProcess__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputProcess__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputProcess__ArgProps,
      internalVariantPropNames: PlasmicInputProcess__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicInputProcess__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputProcess";
  } else {
    func.displayName = `PlasmicInputProcess.${nodeName}`;
  }
  return func;
}

export const PlasmicInputProcess = Object.assign(
  // Top-level PlasmicInputProcess renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    textarea: makeNodeComponent("textarea"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicInputProcess
    internalVariantProps: PlasmicInputProcess__VariantProps,
    internalArgProps: PlasmicInputProcess__ArgProps
  }
);

export default PlasmicInputProcess;
/* prettier-ignore-end */
