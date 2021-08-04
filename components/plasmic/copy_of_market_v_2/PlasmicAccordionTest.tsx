// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: bPKHz9RFhzIFgM
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
import * as sty from "./PlasmicAccordionTest.module.css"; // plasmic-import: bPKHz9RFhzIFgM/css

import Icon52Icon from "./icons/PlasmicIcon__Icon52"; // plasmic-import: AGciCeUjQGqKosz/icon

export type PlasmicAccordionTest__VariantMembers = {};

export type PlasmicAccordionTest__VariantsArgs = {};
type VariantPropType = keyof PlasmicAccordionTest__VariantsArgs;
export const PlasmicAccordionTest__VariantProps = new Array<VariantPropType>();

export type PlasmicAccordionTest__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAccordionTest__ArgsType;
export const PlasmicAccordionTest__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicAccordionTest__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultAccordionTestProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicAccordionTest__RenderFunc(props: {
  variants: PlasmicAccordionTest__VariantsArgs;
  args: PlasmicAccordionTest__ArgsType;
  overrides: PlasmicAccordionTest__OverridesType;
  dataFetches?: PlasmicAccordionTest__Fetches;
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
      <div className={classNames(defaultcss.all, sty.freeBox__qhdex)}>
        <div className={classNames(defaultcss.all, sty.freeBox__m1YJ)}>
          <div className={classNames(defaultcss.all, sty.freeBox___9Gwr4)}>
            {p.renderPlasmicSlot({
              defaultContents: "Overview",
              value: args.slot,
              className: classNames(sty.slotSlot)
            })}
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.freeBox__poFg)}>
          <Icon52Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox__k43Pw)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__u4K0
              )}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum porttitor faucibus viverra eget nibh aliquam. Venenatis maecenas at diam amet. Ac odio vitae morbi fermentum, morbi odio leo volutpat. Fringilla habitant nibh placerat rhoncus, turpis. Urna ipsum purus nam sapien faucibus.\n\nSit egestas faucibus mauris, lorem. Massa ultrices netus velit tempor ligula nec egestas. Netus ullamcorper varius aliquam quam ut at. Ridiculus scelerisque nunc turpis mattis malesuada fringilla viverra nunc. Turpis."
              }
            </div>
          ),

          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAccordionTest__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAccordionTest__VariantsArgs;
    args?: PlasmicAccordionTest__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAccordionTest__Fetches;
  } & Omit<PlasmicAccordionTest__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAccordionTest__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAccordionTest__ArgProps,
      internalVariantPropNames: PlasmicAccordionTest__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAccordionTest__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccordionTest";
  } else {
    func.displayName = `PlasmicAccordionTest.${nodeName}`;
  }
  return func;
}

export const PlasmicAccordionTest = Object.assign(
  // Top-level PlasmicAccordionTest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicAccordionTest
    internalVariantProps: PlasmicAccordionTest__VariantProps,
    internalArgProps: PlasmicAccordionTest__ArgProps
  }
);

export default PlasmicAccordionTest;
/* prettier-ignore-end */
