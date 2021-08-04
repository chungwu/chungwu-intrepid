// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: wYTr68reWOduQcu
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
import TablePricingElementFeatureValueProp from "../../TablePricingElementFeatureValueProp"; // plasmic-import: ZADAc9O40KPQwj1/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicPricingPageElementFeaturesBlock.module.css"; // plasmic-import: wYTr68reWOduQcu/css

import Icon129Icon from "./icons/PlasmicIcon__Icon129"; // plasmic-import: 3f8NxRRxXPSDSg5/icon

export type PlasmicPricingPageElementFeaturesBlock__VariantMembers = {};

export type PlasmicPricingPageElementFeaturesBlock__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicPricingPageElementFeaturesBlock__VariantsArgs;
export const PlasmicPricingPageElementFeaturesBlock__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPricingPageElementFeaturesBlock__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPricingPageElementFeaturesBlock__ArgsType;
export const PlasmicPricingPageElementFeaturesBlock__ArgProps =
  new Array<ArgPropType>("children", "slot", "slot2", "slot3", "slot4");

export type PlasmicPricingPageElementFeaturesBlock__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  elementFeatureValueListItems?: p.Flex<"div">;
};

export interface DefaultPricingPageElementFeaturesBlockProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  className?: string;
}

function PlasmicPricingPageElementFeaturesBlock__RenderFunc(props: {
  variants: PlasmicPricingPageElementFeaturesBlock__VariantsArgs;
  args: PlasmicPricingPageElementFeaturesBlock__ArgsType;
  overrides: PlasmicPricingPageElementFeaturesBlock__OverridesType;
  dataFetches?: PlasmicPricingPageElementFeaturesBlock__Fetches;
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox
        )}
      >
        {"Features"}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"elementFeatureValueListItems"}
        data-plasmic-override={overrides.elementFeatureValueListItems}
        hasGap={true}
        className={classNames(defaultcss.all, sty.elementFeatureValueListItems)}
      >
        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp__kut7
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__jJeeD
                )}
              >
                {"feature value proposition"}
              </div>
            ),

            value: args.children
          })}
        />

        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp___4IUnV
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__ycfqz
                )}
              >
                {"feature value proposition"}
              </div>
            ),

            value: args.slot
          })}
        />

        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp__a6I0V
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: "feature value proposition",
            value: args.slot2
          })}
        />

        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp___5Vw4M
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: "feature value proposition",
            value: args.slot3
          })}
        />

        <TablePricingElementFeatureValueProp
          className={classNames(
            "__wab_instance",
            sty.tablePricingElementFeatureValueProp___1S61
          )}
          featureValueText={p.renderPlasmicSlot({
            defaultContents: "feature value proposition",
            value: args.slot4
          })}
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "elementFeatureValueListItems"],
  freeBox: ["freeBox"],
  elementFeatureValueListItems: ["elementFeatureValueListItems"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  elementFeatureValueListItems: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPricingPageElementFeaturesBlock__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPricingPageElementFeaturesBlock__VariantsArgs;
    args?: PlasmicPricingPageElementFeaturesBlock__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPricingPageElementFeaturesBlock__Fetches;
  } & Omit< // Specify variants directly as props
    PlasmicPricingPageElementFeaturesBlock__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicPricingPageElementFeaturesBlock__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPricingPageElementFeaturesBlock__ArgProps,
      internalVariantPropNames:
        PlasmicPricingPageElementFeaturesBlock__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPricingPageElementFeaturesBlock__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingPageElementFeaturesBlock";
  } else {
    func.displayName = `PlasmicPricingPageElementFeaturesBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingPageElementFeaturesBlock = Object.assign(
  // Top-level PlasmicPricingPageElementFeaturesBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    elementFeatureValueListItems: makeNodeComponent(
      "elementFeatureValueListItems"
    ),

    // Metadata about props expected for PlasmicPricingPageElementFeaturesBlock
    internalVariantProps: PlasmicPricingPageElementFeaturesBlock__VariantProps,
    internalArgProps: PlasmicPricingPageElementFeaturesBlock__ArgProps
  }
);

export default PlasmicPricingPageElementFeaturesBlock;
/* prettier-ignore-end */
