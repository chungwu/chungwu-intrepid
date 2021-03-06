// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: EsPgxjilKctrq8
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
import TagNotification from "../../TagNotification"; // plasmic-import: jhsrWhrcFUyNbZy/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicButtonIconNotificationBell.module.css"; // plasmic-import: EsPgxjilKctrq8/css

import NotificationBellIcon from "./icons/PlasmicIcon__NotificationBell"; // plasmic-import: YdmIVyNk9n_x3wq/icon

export type PlasmicButtonIconNotificationBell__VariantMembers = {
  inactive: "inactive";
  state: "silent" | "alert";
  size: "_16" | "_24" | "_32" | "_36" | "_40" | "_48";
};

export type PlasmicButtonIconNotificationBell__VariantsArgs = {
  inactive?: SingleBooleanChoiceArg<"inactive">;
  state?: SingleChoiceArg<"silent" | "alert">;
  size?: SingleChoiceArg<"_16" | "_24" | "_32" | "_36" | "_40" | "_48">;
};

type VariantPropType = keyof PlasmicButtonIconNotificationBell__VariantsArgs;
export const PlasmicButtonIconNotificationBell__VariantProps =
  new Array<VariantPropType>("inactive", "state", "size");

export type PlasmicButtonIconNotificationBell__ArgsType = {
  target?: string;
};

type ArgPropType = keyof PlasmicButtonIconNotificationBell__ArgsType;
export const PlasmicButtonIconNotificationBell__ArgProps =
  new Array<ArgPropType>("target");

export type PlasmicButtonIconNotificationBell__OverridesType = {
  root?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
  elementSidebarHeadlineNotificationIndicator?: p.Flex<typeof TagNotification>;
};

export interface DefaultButtonIconNotificationBellProps {
  target?: string;
  inactive?: SingleBooleanChoiceArg<"inactive">;
  state?: SingleChoiceArg<"silent" | "alert">;
  size?: SingleChoiceArg<"_16" | "_24" | "_32" | "_36" | "_40" | "_48">;
  className?: string;
}

function PlasmicButtonIconNotificationBell__RenderFunc(props: {
  variants: PlasmicButtonIconNotificationBell__VariantsArgs;
  args: PlasmicButtonIconNotificationBell__ArgsType;
  overrides: PlasmicButtonIconNotificationBell__OverridesType;
  dataFetches?: PlasmicButtonIconNotificationBell__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.button,
        projectcss.root_reset,
        sty.root,
        { [sty.root__state_alert]: hasVariant(variants, "state", "alert") }
      )}
    >
      <NotificationBellIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg, {
          [sty.svg__inactive]: hasVariant(variants, "inactive", "inactive"),
          [sty.svg__size__16]: hasVariant(variants, "size", "_16"),
          [sty.svg__size__24]: hasVariant(variants, "size", "_24"),
          [sty.svg__size__32]: hasVariant(variants, "size", "_32"),
          [sty.svg__size__36]: hasVariant(variants, "size", "_36"),
          [sty.svg__size__40]: hasVariant(variants, "size", "_40"),
          [sty.svg__size__48]: hasVariant(variants, "size", "_48"),
          [sty.svg__state_alert]: hasVariant(variants, "state", "alert"),
          [sty.svg__state_silent]: hasVariant(variants, "state", "silent")
        })}
        role={"img"}
      />

      {(
        hasVariant(variants, "state", "silent")
          ? false
          : hasVariant(variants, "inactive", "inactive")
          ? false
          : true
      ) ? (
        <TagNotification
          data-plasmic-name={"elementSidebarHeadlineNotificationIndicator"}
          data-plasmic-override={
            overrides.elementSidebarHeadlineNotificationIndicator
          }
          className={classNames(
            "__wab_instance",
            sty.elementSidebarHeadlineNotificationIndicator,
            {
              [sty.elementSidebarHeadlineNotificationIndicator__inactive]:
                hasVariant(variants, "inactive", "inactive"),
              [sty.elementSidebarHeadlineNotificationIndicator__size__16]:
                hasVariant(variants, "size", "_16"),
              [sty.elementSidebarHeadlineNotificationIndicator__size__24]:
                hasVariant(variants, "size", "_24"),
              [sty.elementSidebarHeadlineNotificationIndicator__size__32]:
                hasVariant(variants, "size", "_32"),
              [sty.elementSidebarHeadlineNotificationIndicator__size__36]:
                hasVariant(variants, "size", "_36"),
              [sty.elementSidebarHeadlineNotificationIndicator__size__40]:
                hasVariant(variants, "size", "_40"),
              [sty.elementSidebarHeadlineNotificationIndicator__size__48]:
                hasVariant(variants, "size", "_48"),
              [sty.elementSidebarHeadlineNotificationIndicator__state_alert]:
                hasVariant(variants, "state", "alert"),
              [sty.elementSidebarHeadlineNotificationIndicator__state_silent]:
                hasVariant(variants, "state", "silent")
            }
          )}
          size={
            hasVariant(variants, "size", "_48")
              ? ("_16" as const)
              : hasVariant(variants, "size", "_40")
              ? ("_16" as const)
              : hasVariant(variants, "size", "_36")
              ? ("_16" as const)
              : hasVariant(variants, "size", "_32")
              ? ("_16" as const)
              : hasVariant(variants, "size", "_24")
              ? ("_12" as const)
              : undefined
          }
        />
      ) : null}
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "elementSidebarHeadlineNotificationIndicator"],
  svg: ["svg"],
  elementSidebarHeadlineNotificationIndicator: [
    "elementSidebarHeadlineNotificationIndicator"
  ]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  svg: "svg";
  elementSidebarHeadlineNotificationIndicator: typeof TagNotification;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonIconNotificationBell__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonIconNotificationBell__VariantsArgs;
    args?: PlasmicButtonIconNotificationBell__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButtonIconNotificationBell__Fetches;
  } & Omit<PlasmicButtonIconNotificationBell__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonIconNotificationBell__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButtonIconNotificationBell__ArgProps,
      internalVariantPropNames: PlasmicButtonIconNotificationBell__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButtonIconNotificationBell__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonIconNotificationBell";
  } else {
    func.displayName = `PlasmicButtonIconNotificationBell.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonIconNotificationBell = Object.assign(
  // Top-level PlasmicButtonIconNotificationBell renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    elementSidebarHeadlineNotificationIndicator: makeNodeComponent(
      "elementSidebarHeadlineNotificationIndicator"
    ),

    // Metadata about props expected for PlasmicButtonIconNotificationBell
    internalVariantProps: PlasmicButtonIconNotificationBell__VariantProps,
    internalArgProps: PlasmicButtonIconNotificationBell__ArgProps
  }
);

export default PlasmicButtonIconNotificationBell;
/* prettier-ignore-end */
