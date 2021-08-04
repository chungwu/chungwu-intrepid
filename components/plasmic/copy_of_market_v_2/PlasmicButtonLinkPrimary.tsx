// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: tSiOWgKlHR05p7
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
import * as sty from "./PlasmicButtonLinkPrimary.module.css"; // plasmic-import: tSiOWgKlHR05p7/css

export type PlasmicButtonLinkPrimary__VariantMembers = {
  border: "border";
  type: "primary" | "fill" | "outline" | "ghost";
  color:
    | "brand"
    | "dark"
    | "light"
    | "red"
    | "yellow"
    | "blue"
    | "magenta"
    | "pink"
    | "green";
  width: "_90" | "_120" | "_140" | "_160" | "_180" | "_270" | "_360";
  height: "_32" | "_36" | "_40" | "_48";
};

export type PlasmicButtonLinkPrimary__VariantsArgs = {
  border?: SingleBooleanChoiceArg<"border">;
  type?: SingleChoiceArg<"primary" | "fill" | "outline" | "ghost">;
  color?: SingleChoiceArg<
    | "brand"
    | "dark"
    | "light"
    | "red"
    | "yellow"
    | "blue"
    | "magenta"
    | "pink"
    | "green"
  >;
  width?: SingleChoiceArg<
    "_90" | "_120" | "_140" | "_160" | "_180" | "_270" | "_360"
  >;
  height?: SingleChoiceArg<"_32" | "_36" | "_40" | "_48">;
};

type VariantPropType = keyof PlasmicButtonLinkPrimary__VariantsArgs;
export const PlasmicButtonLinkPrimary__VariantProps =
  new Array<VariantPropType>("border", "type", "color", "width", "height");

export type PlasmicButtonLinkPrimary__ArgsType = {
  destination?: string | PageHref;
  id?: string;
  text?: React.ReactNode;
};

type ArgPropType = keyof PlasmicButtonLinkPrimary__ArgsType;
export const PlasmicButtonLinkPrimary__ArgProps = new Array<ArgPropType>(
  "destination",
  "id",
  "text"
);

export type PlasmicButtonLinkPrimary__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
  textParent?: p.Flex<"div">;
};

export interface DefaultButtonLinkPrimaryProps {
  destination?: string | PageHref;
  id?: string;
  text?: React.ReactNode;
  border?: SingleBooleanChoiceArg<"border">;
  type?: SingleChoiceArg<"primary" | "fill" | "outline" | "ghost">;
  color?: SingleChoiceArg<
    | "brand"
    | "dark"
    | "light"
    | "red"
    | "yellow"
    | "blue"
    | "magenta"
    | "pink"
    | "green"
  >;
  width?: SingleChoiceArg<
    "_90" | "_120" | "_140" | "_160" | "_180" | "_270" | "_360"
  >;
  height?: SingleChoiceArg<"_32" | "_36" | "_40" | "_48">;
  className?: string;
}

function PlasmicButtonLinkPrimary__RenderFunc(props: {
  variants: PlasmicButtonLinkPrimary__VariantsArgs;
  args: PlasmicButtonLinkPrimary__ArgsType;
  overrides: PlasmicButtonLinkPrimary__OverridesType;
  dataFetches?: PlasmicButtonLinkPrimary__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__border]: hasVariant(variants, "border", "border"),
        [sty.root__height__32]: hasVariant(variants, "height", "_32"),
        [sty.root__height__36]: hasVariant(variants, "height", "_36"),
        [sty.root__height__40]: hasVariant(variants, "height", "_40"),
        [sty.root__height__48]: hasVariant(variants, "height", "_48"),
        [sty.root__type_fill]: hasVariant(variants, "type", "fill"),
        [sty.root__type_fill_color_blue]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_fill_color_brand]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_fill_color_dark]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "dark"),
        [sty.root__type_fill_color_green]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "green"),
        [sty.root__type_fill_color_light]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "light"),
        [sty.root__type_fill_color_magenta]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_fill_color_pink]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "pink"),
        [sty.root__type_fill_color_red]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "red"),
        [sty.root__type_fill_color_yellow]:
          hasVariant(variants, "type", "fill") &&
          hasVariant(variants, "color", "yellow"),
        [sty.root__type_ghost]: hasVariant(variants, "type", "ghost"),
        [sty.root__type_ghost_color_blue]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_ghost_color_brand]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_ghost_color_dark]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "dark"),
        [sty.root__type_ghost_color_green]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "green"),
        [sty.root__type_ghost_color_light]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "light"),
        [sty.root__type_ghost_color_magenta]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_ghost_color_pink]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "pink"),
        [sty.root__type_ghost_color_red]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "red"),
        [sty.root__type_ghost_color_yellow]:
          hasVariant(variants, "type", "ghost") &&
          hasVariant(variants, "color", "yellow"),
        [sty.root__type_outline]: hasVariant(variants, "type", "outline"),
        [sty.root__type_outline_color_blue]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_outline_color_brand]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_outline_color_dark]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "dark"),
        [sty.root__type_outline_color_green]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "green"),
        [sty.root__type_outline_color_light]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "light"),
        [sty.root__type_outline_color_magenta]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_outline_color_pink]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "pink"),
        [sty.root__type_outline_color_red]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "red"),
        [sty.root__type_outline_color_yellow]:
          hasVariant(variants, "type", "outline") &&
          hasVariant(variants, "color", "yellow"),
        [sty.root__type_primary_color_blue]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "blue"),
        [sty.root__type_primary_color_brand]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "brand"),
        [sty.root__type_primary_color_dark]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "dark"),
        [sty.root__type_primary_color_green]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "green"),
        [sty.root__type_primary_color_light]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "light"),
        [sty.root__type_primary_color_magenta]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "magenta"),
        [sty.root__type_primary_color_pink]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "pink"),
        [sty.root__type_primary_color_red]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "red"),
        [sty.root__type_primary_color_yellow]:
          hasVariant(variants, "type", "primary") &&
          hasVariant(variants, "color", "yellow"),
        [sty.root__width__120]: hasVariant(variants, "width", "_120"),
        [sty.root__width__140]: hasVariant(variants, "width", "_140"),
        [sty.root__width__160]: hasVariant(variants, "width", "_160"),
        [sty.root__width__180]: hasVariant(variants, "width", "_180"),
        [sty.root__width__270]: hasVariant(variants, "width", "_270"),
        [sty.root__width__360]: hasVariant(variants, "width", "_360"),
        [sty.root__width__90]: hasVariant(variants, "width", "_90")
      })}
      component={Link}
      href={args.destination}
      id={args.id}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"textParent"}
          data-plasmic-override={overrides.textParent}
          className={classNames(defaultcss.all, sty.textParent, {
            [sty.textParent__color_magenta]: hasVariant(
              variants,
              "color",
              "magenta"
            ),
            [sty.textParent__color_magenta_type_primary]:
              hasVariant(variants, "color", "magenta") &&
              hasVariant(variants, "type", "primary"),
            [sty.textParent__type_fill]: hasVariant(variants, "type", "fill"),
            [sty.textParent__type_fill_color_blue]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParent__type_fill_color_brand]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "brand"),
            [sty.textParent__type_fill_color_dark]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParent__type_fill_color_green]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "green"),
            [sty.textParent__type_fill_color_light]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "light"),
            [sty.textParent__type_fill_color_magenta]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParent__type_fill_color_pink]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParent__type_fill_color_red]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "red"),
            [sty.textParent__type_fill_color_yellow]:
              hasVariant(variants, "type", "fill") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParent__type_ghost]: hasVariant(variants, "type", "ghost"),
            [sty.textParent__type_ghost_color_blue]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParent__type_ghost_color_brand]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "brand"),
            [sty.textParent__type_ghost_color_dark]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParent__type_ghost_color_green]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "green"),
            [sty.textParent__type_ghost_color_light]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "light"),
            [sty.textParent__type_ghost_color_magenta]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParent__type_ghost_color_pink]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParent__type_ghost_color_red]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "red"),
            [sty.textParent__type_ghost_color_yellow]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParent__type_outline]: hasVariant(
              variants,
              "type",
              "outline"
            ),
            [sty.textParent__type_outline_color_blue]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParent__type_outline_color_brand]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "brand"),
            [sty.textParent__type_outline_color_dark]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParent__type_outline_color_green]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "green"),
            [sty.textParent__type_outline_color_light]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "light"),
            [sty.textParent__type_outline_color_magenta]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "magenta"),
            [sty.textParent__type_outline_color_pink]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParent__type_outline_color_red]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "red"),
            [sty.textParent__type_outline_color_yellow]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "yellow"),
            [sty.textParent__type_primary_color_blue]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "blue"),
            [sty.textParent__type_primary_color_brand]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "brand"),
            [sty.textParent__type_primary_color_dark]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "dark"),
            [sty.textParent__type_primary_color_green]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "green"),
            [sty.textParent__type_primary_color_light]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "light"),
            [sty.textParent__type_primary_color_pink]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "pink"),
            [sty.textParent__type_primary_color_red]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "red"),
            [sty.textParent__type_primary_color_yellow]:
              hasVariant(variants, "type", "primary") &&
              hasVariant(variants, "color", "yellow")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Hyper Link",
            value: args.text,
            className: classNames(sty.slotText, {
              [sty.slotText__color_magenta]: hasVariant(
                variants,
                "color",
                "magenta"
              ),
              [sty.slotText__color_magenta_type_primary]:
                hasVariant(variants, "color", "magenta") &&
                hasVariant(variants, "type", "primary"),
              [sty.slotText__type_fill]: hasVariant(variants, "type", "fill"),
              [sty.slotText__type_fill_color_blue]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotText__type_fill_color_brand]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotText__type_fill_color_dark]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotText__type_fill_color_green]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "green"),
              [sty.slotText__type_fill_color_light]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "light"),
              [sty.slotText__type_fill_color_magenta]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotText__type_fill_color_pink]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotText__type_fill_color_red]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "red"),
              [sty.slotText__type_fill_color_yellow]:
                hasVariant(variants, "type", "fill") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotText__type_ghost]: hasVariant(variants, "type", "ghost"),
              [sty.slotText__type_ghost_color_blue]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotText__type_ghost_color_brand]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotText__type_ghost_color_dark]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotText__type_ghost_color_green]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "green"),
              [sty.slotText__type_ghost_color_light]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "light"),
              [sty.slotText__type_ghost_color_magenta]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotText__type_ghost_color_pink]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotText__type_ghost_color_red]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "red"),
              [sty.slotText__type_ghost_color_yellow]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotText__type_outline]: hasVariant(
                variants,
                "type",
                "outline"
              ),
              [sty.slotText__type_outline_color_blue]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotText__type_outline_color_brand]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotText__type_outline_color_dark]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotText__type_outline_color_green]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "green"),
              [sty.slotText__type_outline_color_light]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "light"),
              [sty.slotText__type_outline_color_magenta]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotText__type_outline_color_pink]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotText__type_outline_color_red]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "red"),
              [sty.slotText__type_outline_color_yellow]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "yellow"),
              [sty.slotText__type_primary_color_blue]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotText__type_primary_color_brand]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotText__type_primary_color_dark]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "dark"),
              [sty.slotText__type_primary_color_green]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "green"),
              [sty.slotText__type_primary_color_light]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "light"),
              [sty.slotText__type_primary_color_pink]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "pink"),
              [sty.slotText__type_primary_color_red]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "red"),
              [sty.slotText__type_primary_color_yellow]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "color", "yellow")
            })
          })}
        </div>
      </div>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "textParent"],
  freeBox: ["freeBox", "textParent"],
  textParent: ["textParent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
  textParent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonLinkPrimary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonLinkPrimary__VariantsArgs;
    args?: PlasmicButtonLinkPrimary__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButtonLinkPrimary__Fetches;
  } & Omit<PlasmicButtonLinkPrimary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonLinkPrimary__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButtonLinkPrimary__ArgProps,
      internalVariantPropNames: PlasmicButtonLinkPrimary__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButtonLinkPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonLinkPrimary";
  } else {
    func.displayName = `PlasmicButtonLinkPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonLinkPrimary = Object.assign(
  // Top-level PlasmicButtonLinkPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    textParent: makeNodeComponent("textParent"),

    // Metadata about props expected for PlasmicButtonLinkPrimary
    internalVariantProps: PlasmicButtonLinkPrimary__VariantProps,
    internalArgProps: PlasmicButtonLinkPrimary__ArgProps
  }
);

export default PlasmicButtonLinkPrimary;
/* prettier-ignore-end */
