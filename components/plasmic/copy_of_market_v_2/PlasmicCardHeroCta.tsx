// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: 3-Fj2P0sS85MZM
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicCardHeroCta.module.css"; // plasmic-import: 3-Fj2P0sS85MZM/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicCardHeroCta__VariantMembers = {};

export type PlasmicCardHeroCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicCardHeroCta__VariantsArgs;
export const PlasmicCardHeroCta__VariantProps = new Array<VariantPropType>();

export type PlasmicCardHeroCta__ArgsType = {
  slot2?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCardHeroCta__ArgsType;
export const PlasmicCardHeroCta__ArgProps = new Array<ArgPropType>(
  "slot2",
  "children"
);

export type PlasmicCardHeroCta__OverridesType = {
  root?: p.Flex<"div">;
  buttonPrimary?: p.Flex<typeof ButtonPrimary>;
};

export interface DefaultCardHeroCtaProps {
  slot2?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicCardHeroCta__RenderFunc(props: {
  variants: PlasmicCardHeroCta__VariantsArgs;
  args: PlasmicCardHeroCta__ArgsType;
  overrides: PlasmicCardHeroCta__OverridesType;
  dataFetches?: PlasmicCardHeroCta__Fetches;
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
      <div className={classNames(defaultcss.all, sty.freeBox__dhkQ)}>
        <div className={classNames(defaultcss.all, sty.freeBox__fIbpf)}>
          <div className={classNames(defaultcss.all, sty.freeBox__lU1Q)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Everything an entrepreneur needs to start and grow a global business.",
              value: args.slot2,
              className: classNames(sty.slotSlot2)
            })}
          </div>
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox__xEwQ
          )}
        >
          {"Creative technology services to do business beyond borders"}
        </div>

        <ButtonPrimary
          data-plasmic-name={"buttonPrimary"}
          data-plasmic-override={overrides.buttonPrimary}
          className={classNames("__wab_instance", sty.buttonPrimary)}
          color={"brand" as const}
          size={"_140" as const}
        >
          {"Start free trial"}
        </ButtonPrimary>
      </div>

      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img___2U9G4)}
            role={"img"}
          />
        ),

        value: args.children
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "buttonPrimary"],
  buttonPrimary: ["buttonPrimary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  buttonPrimary: typeof ButtonPrimary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardHeroCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardHeroCta__VariantsArgs;
    args?: PlasmicCardHeroCta__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCardHeroCta__Fetches;
  } & Omit<PlasmicCardHeroCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCardHeroCta__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCardHeroCta__ArgProps,
      internalVariantPropNames: PlasmicCardHeroCta__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCardHeroCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardHeroCta";
  } else {
    func.displayName = `PlasmicCardHeroCta.${nodeName}`;
  }
  return func;
}

export const PlasmicCardHeroCta = Object.assign(
  // Top-level PlasmicCardHeroCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonPrimary: makeNodeComponent("buttonPrimary"),

    // Metadata about props expected for PlasmicCardHeroCta
    internalVariantProps: PlasmicCardHeroCta__VariantProps,
    internalArgProps: PlasmicCardHeroCta__ArgProps
  }
);

export default PlasmicCardHeroCta;
/* prettier-ignore-end */
