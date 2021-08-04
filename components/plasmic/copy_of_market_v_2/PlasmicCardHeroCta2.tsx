// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: fRdRp53pLX_fg
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
import * as sty from "./PlasmicCardHeroCta2.module.css"; // plasmic-import: fRdRp53pLX_fg/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicCardHeroCta2__VariantMembers = {};

export type PlasmicCardHeroCta2__VariantsArgs = {};
type VariantPropType = keyof PlasmicCardHeroCta2__VariantsArgs;
export const PlasmicCardHeroCta2__VariantProps = new Array<VariantPropType>();

export type PlasmicCardHeroCta2__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCardHeroCta2__ArgsType;
export const PlasmicCardHeroCta2__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicCardHeroCta2__OverridesType = {
  root?: p.Flex<"div">;
  buttonPrimary?: p.Flex<typeof ButtonPrimary>;
};

export interface DefaultCardHeroCta2Props {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicCardHeroCta2__RenderFunc(props: {
  variants: PlasmicCardHeroCta2__VariantsArgs;
  args: PlasmicCardHeroCta2__ArgsType;
  overrides: PlasmicCardHeroCta2__OverridesType;
  dataFetches?: PlasmicCardHeroCta2__Fetches;
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
      <div className={classNames(defaultcss.all, sty.freeBox__rgOum)}>
        <div className={classNames(defaultcss.all, sty.freeBox__oopmq)}>
          <div className={classNames(defaultcss.all, sty.freeBox__wLfwR)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "The one-stop destination for buying, selling, and discovering creative technology services",
              value: args.children,
              className: classNames(sty.slotChildren)
            })}
          </div>
        </div>

        <ButtonPrimary
          data-plasmic-name={"buttonPrimary"}
          data-plasmic-override={overrides.buttonPrimary}
          className={classNames("__wab_instance", sty.buttonPrimary)}
          color={"brand" as const}
          size={"_140" as const}
        />
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox__rLfSy)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__yFvvm)}
              role={"img"}
            />
          ),

          value: args.slot
        })}
      </div>
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
  PlasmicCardHeroCta2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardHeroCta2__VariantsArgs;
    args?: PlasmicCardHeroCta2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCardHeroCta2__Fetches;
  } & Omit<PlasmicCardHeroCta2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCardHeroCta2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCardHeroCta2__ArgProps,
      internalVariantPropNames: PlasmicCardHeroCta2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCardHeroCta2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardHeroCta2";
  } else {
    func.displayName = `PlasmicCardHeroCta2.${nodeName}`;
  }
  return func;
}

export const PlasmicCardHeroCta2 = Object.assign(
  // Top-level PlasmicCardHeroCta2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonPrimary: makeNodeComponent("buttonPrimary"),

    // Metadata about props expected for PlasmicCardHeroCta2
    internalVariantProps: PlasmicCardHeroCta2__VariantProps,
    internalArgProps: PlasmicCardHeroCta2__ArgProps
  }
);

export default PlasmicCardHeroCta2;
/* prettier-ignore-end */
