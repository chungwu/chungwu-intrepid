// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: gpNjXfbD_ZdpPU
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
import * as sty from "./PlasmicButtonPrimary.module.css"; // plasmic-import: gpNjXfbD_ZdpPU/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicButtonPrimary__VariantMembers = {
  type:
    | "primary"
    | "secondary"
    | "outline"
    | "icon"
    | "link"
    | "ghost"
    | "light"
    | "dark";
  color:
    | "brand"
    | "success"
    | "warning"
    | "caution"
    | "alert"
    | "blue"
    | "magenta";
  size: "_90" | "_120" | "_140" | "_180" | "_270" | "_360";
  state: "error" | "warning" | "success" | "disabled";
};

export type PlasmicButtonPrimary__VariantsArgs = {
  type?: SingleChoiceArg<
    | "primary"
    | "secondary"
    | "outline"
    | "icon"
    | "link"
    | "ghost"
    | "light"
    | "dark"
  >;
  color?: SingleChoiceArg<
    "brand" | "success" | "warning" | "caution" | "alert" | "blue" | "magenta"
  >;
  size?: SingleChoiceArg<"_90" | "_120" | "_140" | "_180" | "_270" | "_360">;
  state?: SingleChoiceArg<"error" | "warning" | "success" | "disabled">;
};

type VariantPropType = keyof PlasmicButtonPrimary__VariantsArgs;
export const PlasmicButtonPrimary__VariantProps = new Array<VariantPropType>(
  "type",
  "color",
  "size",
  "state"
);

export type PlasmicButtonPrimary__ArgsType = {
  children?: React.ReactNode;
  svgIcon?: React.ReactNode;
  id?: string;
};

type ArgPropType = keyof PlasmicButtonPrimary__ArgsType;
export const PlasmicButtonPrimary__ArgProps = new Array<ArgPropType>(
  "children",
  "svgIcon",
  "id"
);

export type PlasmicButtonPrimary__OverridesType = {
  buttonPrimary?: p.Flex<"button">;
  iconTextParent?: p.Flex<"div">;
  iconParent?: p.Flex<"div">;
};

export interface DefaultButtonPrimaryProps {
  children?: React.ReactNode;
  svgIcon?: React.ReactNode;
  id?: string;
  type?: SingleChoiceArg<
    | "primary"
    | "secondary"
    | "outline"
    | "icon"
    | "link"
    | "ghost"
    | "light"
    | "dark"
  >;
  color?: SingleChoiceArg<
    "brand" | "success" | "warning" | "caution" | "alert" | "blue" | "magenta"
  >;
  size?: SingleChoiceArg<"_90" | "_120" | "_140" | "_180" | "_270" | "_360">;
  state?: SingleChoiceArg<"error" | "warning" | "success" | "disabled">;
  className?: string;
}

function PlasmicButtonPrimary__RenderFunc(props: {
  variants: PlasmicButtonPrimary__VariantsArgs;
  args: PlasmicButtonPrimary__ArgsType;
  overrides: PlasmicButtonPrimary__OverridesType;
  dataFetches?: PlasmicButtonPrimary__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <button
      data-plasmic-name={"buttonPrimary"}
      data-plasmic-override={overrides.buttonPrimary}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.button,
        projectcss.root_reset,
        sty.buttonPrimary,
        {
          [sty.buttonPrimary__color_alert]: hasVariant(
            variants,
            "color",
            "alert"
          ),
          [sty.buttonPrimary__color_blue]: hasVariant(
            variants,
            "color",
            "blue"
          ),
          [sty.buttonPrimary__color_brand]: hasVariant(
            variants,
            "color",
            "brand"
          ),
          [sty.buttonPrimary__color_caution]: hasVariant(
            variants,
            "color",
            "caution"
          ),
          [sty.buttonPrimary__color_magenta]: hasVariant(
            variants,
            "color",
            "magenta"
          ),
          [sty.buttonPrimary__color_success]: hasVariant(
            variants,
            "color",
            "success"
          ),
          [sty.buttonPrimary__color_warning]: hasVariant(
            variants,
            "color",
            "warning"
          ),
          [sty.buttonPrimary__size__120]: hasVariant(variants, "size", "_120"),
          [sty.buttonPrimary__size__140]: hasVariant(variants, "size", "_140"),
          [sty.buttonPrimary__size__180]: hasVariant(variants, "size", "_180"),
          [sty.buttonPrimary__size__270]: hasVariant(variants, "size", "_270"),
          [sty.buttonPrimary__size__360]: hasVariant(variants, "size", "_360"),
          [sty.buttonPrimary__size__90]: hasVariant(variants, "size", "_90"),
          [sty.buttonPrimary__size__90_type_icon]:
            hasVariant(variants, "size", "_90") &&
            hasVariant(variants, "type", "icon"),
          [sty.buttonPrimary__state_disabled]: hasVariant(
            variants,
            "state",
            "disabled"
          ),
          [sty.buttonPrimary__state_error]: hasVariant(
            variants,
            "state",
            "error"
          ),
          [sty.buttonPrimary__state_success]: hasVariant(
            variants,
            "state",
            "success"
          ),
          [sty.buttonPrimary__state_success_type_ghost]:
            hasVariant(variants, "state", "success") &&
            hasVariant(variants, "type", "ghost"),
          [sty.buttonPrimary__state_warning]: hasVariant(
            variants,
            "state",
            "warning"
          ),
          [sty.buttonPrimary__type_dark]: hasVariant(variants, "type", "dark"),
          [sty.buttonPrimary__type_ghost]: hasVariant(
            variants,
            "type",
            "ghost"
          ),
          [sty.buttonPrimary__type_ghost_color_alert]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "alert"),
          [sty.buttonPrimary__type_ghost_color_blue]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "blue"),
          [sty.buttonPrimary__type_ghost_color_brand]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "brand"),
          [sty.buttonPrimary__type_ghost_color_caution]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "caution"),
          [sty.buttonPrimary__type_ghost_color_magenta]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "magenta"),
          [sty.buttonPrimary__type_ghost_color_success]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "success"),
          [sty.buttonPrimary__type_ghost_color_warning]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "color", "warning"),
          [sty.buttonPrimary__type_ghost_state_error]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "state", "error"),
          [sty.buttonPrimary__type_ghost_state_warning]:
            hasVariant(variants, "type", "ghost") &&
            hasVariant(variants, "state", "warning"),
          [sty.buttonPrimary__type_icon]: hasVariant(variants, "type", "icon"),
          [sty.buttonPrimary__type_light]: hasVariant(
            variants,
            "type",
            "light"
          ),
          [sty.buttonPrimary__type_light_color_alert]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "alert"),
          [sty.buttonPrimary__type_light_color_blue]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "blue"),
          [sty.buttonPrimary__type_light_color_brand]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "brand"),
          [sty.buttonPrimary__type_light_color_caution]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "caution"),
          [sty.buttonPrimary__type_light_color_magenta]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "magenta"),
          [sty.buttonPrimary__type_light_color_success]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "success"),
          [sty.buttonPrimary__type_light_color_warning]:
            hasVariant(variants, "type", "light") &&
            hasVariant(variants, "color", "warning"),
          [sty.buttonPrimary__type_link]: hasVariant(variants, "type", "link"),
          [sty.buttonPrimary__type_link_color_alert]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "alert"),
          [sty.buttonPrimary__type_link_color_blue]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "blue"),
          [sty.buttonPrimary__type_link_color_brand]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "brand"),
          [sty.buttonPrimary__type_link_color_caution]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "caution"),
          [sty.buttonPrimary__type_link_color_magenta]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "magenta"),
          [sty.buttonPrimary__type_link_color_success]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "success"),
          [sty.buttonPrimary__type_link_color_warning]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "color", "warning"),
          [sty.buttonPrimary__type_link_state_error]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "state", "error"),
          [sty.buttonPrimary__type_link_state_success]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "state", "success"),
          [sty.buttonPrimary__type_link_state_warning]:
            hasVariant(variants, "type", "link") &&
            hasVariant(variants, "state", "warning"),
          [sty.buttonPrimary__type_outline]: hasVariant(
            variants,
            "type",
            "outline"
          ),
          [sty.buttonPrimary__type_outline_color_brand]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "brand"),
          [sty.buttonPrimary__type_outline_color_success]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "success"),
          [sty.buttonPrimary__type_outline_color_warning]:
            hasVariant(variants, "type", "outline") &&
            hasVariant(variants, "color", "warning"),
          [sty.buttonPrimary__type_primary_state_disabled]:
            hasVariant(variants, "type", "primary") &&
            hasVariant(variants, "state", "disabled"),
          [sty.buttonPrimary__type_secondary]: hasVariant(
            variants,
            "type",
            "secondary"
          ),
          [sty.buttonPrimary__type_secondary_color_alert]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "alert"),
          [sty.buttonPrimary__type_secondary_color_blue]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "blue"),
          [sty.buttonPrimary__type_secondary_color_brand]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "brand"),
          [sty.buttonPrimary__type_secondary_color_caution]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "caution"),
          [sty.buttonPrimary__type_secondary_color_magenta]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "magenta"),
          [sty.buttonPrimary__type_secondary_color_success]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "success"),
          [sty.buttonPrimary__type_secondary_color_warning]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(variants, "color", "warning")
        }
      )}
      id={args.id}
    >
      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"iconTextParent"}
          data-plasmic-override={overrides.iconTextParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.iconTextParent, {
            [sty.iconTextParent__color_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),
            [sty.iconTextParent__color_brand]: hasVariant(
              variants,
              "color",
              "brand"
            ),
            [sty.iconTextParent__color_success]: hasVariant(
              variants,
              "color",
              "success"
            ),
            [sty.iconTextParent__size__120]: hasVariant(
              variants,
              "size",
              "_120"
            ),
            [sty.iconTextParent__size__140]: hasVariant(
              variants,
              "size",
              "_140"
            ),
            [sty.iconTextParent__size__180]: hasVariant(
              variants,
              "size",
              "_180"
            ),
            [sty.iconTextParent__size__180_type_icon]:
              hasVariant(variants, "size", "_180") &&
              hasVariant(variants, "type", "icon"),
            [sty.iconTextParent__size__360]: hasVariant(
              variants,
              "size",
              "_360"
            ),
            [sty.iconTextParent__size__90]: hasVariant(variants, "size", "_90"),
            [sty.iconTextParent__state_error]: hasVariant(
              variants,
              "state",
              "error"
            ),
            [sty.iconTextParent__state_success]: hasVariant(
              variants,
              "state",
              "success"
            ),
            [sty.iconTextParent__type_ghost]: hasVariant(
              variants,
              "type",
              "ghost"
            ),
            [sty.iconTextParent__type_ghost_color_alert]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "alert"),
            [sty.iconTextParent__type_ghost_color_blue]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "blue"),
            [sty.iconTextParent__type_ghost_color_brand]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "brand"),
            [sty.iconTextParent__type_ghost_color_caution]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "caution"),
            [sty.iconTextParent__type_ghost_color_magenta]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "magenta"),
            [sty.iconTextParent__type_ghost_color_success]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "success"),
            [sty.iconTextParent__type_ghost_color_warning]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "color", "warning"),
            [sty.iconTextParent__type_ghost_state_error]:
              hasVariant(variants, "type", "ghost") &&
              hasVariant(variants, "state", "error"),
            [sty.iconTextParent__type_icon]: hasVariant(
              variants,
              "type",
              "icon"
            ),
            [sty.iconTextParent__type_icon_size__120]:
              hasVariant(variants, "type", "icon") &&
              hasVariant(variants, "size", "_120"),
            [sty.iconTextParent__type_icon_size__140]:
              hasVariant(variants, "type", "icon") &&
              hasVariant(variants, "size", "_140"),
            [sty.iconTextParent__type_icon_size__270]:
              hasVariant(variants, "type", "icon") &&
              hasVariant(variants, "size", "_270"),
            [sty.iconTextParent__type_icon_size__360]:
              hasVariant(variants, "type", "icon") &&
              hasVariant(variants, "size", "_360"),
            [sty.iconTextParent__type_light]: hasVariant(
              variants,
              "type",
              "light"
            ),
            [sty.iconTextParent__type_light_color_brand]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "brand"),
            [sty.iconTextParent__type_light_color_success]:
              hasVariant(variants, "type", "light") &&
              hasVariant(variants, "color", "success"),
            [sty.iconTextParent__type_link]: hasVariant(
              variants,
              "type",
              "link"
            ),
            [sty.iconTextParent__type_link_color_warning]:
              hasVariant(variants, "type", "link") &&
              hasVariant(variants, "color", "warning"),
            [sty.iconTextParent__type_outline]: hasVariant(
              variants,
              "type",
              "outline"
            ),
            [sty.iconTextParent__type_outline_color_brand]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "brand"),
            [sty.iconTextParent__type_outline_color_warning]:
              hasVariant(variants, "type", "outline") &&
              hasVariant(variants, "color", "warning"),
            [sty.iconTextParent__type_primary]: hasVariant(
              variants,
              "type",
              "primary"
            )
          })}
        >
          {(hasVariant(variants, "type", "icon") ? true : true) ? (
            <div
              data-plasmic-name={"iconParent"}
              data-plasmic-override={overrides.iconParent}
              className={classNames(defaultcss.all, sty.iconParent, {
                [sty.iconParent__size__180]: hasVariant(
                  variants,
                  "size",
                  "_180"
                ),
                [sty.iconParent__size__180_type_icon]:
                  hasVariant(variants, "size", "_180") &&
                  hasVariant(variants, "type", "icon"),
                [sty.iconParent__type_icon]: hasVariant(
                  variants,
                  "type",
                  "icon"
                )
              })}
            >
              {(hasVariant(variants, "type", "icon") ? true : true)
                ? p.renderPlasmicSlot({
                    defaultContents: (
                      <PlusBoldIcon
                        className={classNames(defaultcss.all, sty.svg__hZgis)}
                        role={"img"}
                      />
                    ),

                    value: args.svgIcon,
                    className: classNames(sty.slotSvgIcon, {
                      [sty.slotSvgIcon__type_icon]: hasVariant(
                        variants,
                        "type",
                        "icon"
                      )
                    })
                  })
                : null}
            </div>
          ) : null}
          {p.renderPlasmicSlot({
            defaultContents: "Button",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__color_brand]: hasVariant(
                variants,
                "color",
                "brand"
              ),
              [sty.slotChildren__color_brand_size__140]:
                hasVariant(variants, "color", "brand") &&
                hasVariant(variants, "size", "_140"),
              [sty.slotChildren__size__120]: hasVariant(
                variants,
                "size",
                "_120"
              ),
              [sty.slotChildren__size__140]: hasVariant(
                variants,
                "size",
                "_140"
              ),
              [sty.slotChildren__size__270]: hasVariant(
                variants,
                "size",
                "_270"
              ),
              [sty.slotChildren__size__360]: hasVariant(
                variants,
                "size",
                "_360"
              ),
              [sty.slotChildren__size__90]: hasVariant(variants, "size", "_90"),
              [sty.slotChildren__state_disabled]: hasVariant(
                variants,
                "state",
                "disabled"
              ),
              [sty.slotChildren__state_success_type_ghost]:
                hasVariant(variants, "state", "success") &&
                hasVariant(variants, "type", "ghost"),
              [sty.slotChildren__type_dark]: hasVariant(
                variants,
                "type",
                "dark"
              ),
              [sty.slotChildren__type_ghost]: hasVariant(
                variants,
                "type",
                "ghost"
              ),
              [sty.slotChildren__type_ghost_color_alert]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "alert"),
              [sty.slotChildren__type_ghost_color_blue]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotChildren__type_ghost_color_brand]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotChildren__type_ghost_color_caution]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "caution"),
              [sty.slotChildren__type_ghost_color_magenta]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotChildren__type_ghost_color_success]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "success"),
              [sty.slotChildren__type_ghost_color_warning]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "color", "warning"),
              [sty.slotChildren__type_ghost_state_error]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "state", "error"),
              [sty.slotChildren__type_ghost_state_warning]:
                hasVariant(variants, "type", "ghost") &&
                hasVariant(variants, "state", "warning"),
              [sty.slotChildren__type_icon]: hasVariant(
                variants,
                "type",
                "icon"
              ),
              [sty.slotChildren__type_icon_size__120]:
                hasVariant(variants, "type", "icon") &&
                hasVariant(variants, "size", "_120"),
              [sty.slotChildren__type_icon_size__90]:
                hasVariant(variants, "type", "icon") &&
                hasVariant(variants, "size", "_90"),
              [sty.slotChildren__type_light]: hasVariant(
                variants,
                "type",
                "light"
              ),
              [sty.slotChildren__type_light_color_alert]:
                hasVariant(variants, "type", "light") &&
                hasVariant(variants, "color", "alert"),
              [sty.slotChildren__type_light_color_blue]:
                hasVariant(variants, "type", "light") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotChildren__type_light_color_brand]:
                hasVariant(variants, "type", "light") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotChildren__type_light_color_caution]:
                hasVariant(variants, "type", "light") &&
                hasVariant(variants, "color", "caution"),
              [sty.slotChildren__type_light_color_magenta]:
                hasVariant(variants, "type", "light") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotChildren__type_light_color_success]:
                hasVariant(variants, "type", "light") &&
                hasVariant(variants, "color", "success"),
              [sty.slotChildren__type_light_color_warning]:
                hasVariant(variants, "type", "light") &&
                hasVariant(variants, "color", "warning"),
              [sty.slotChildren__type_link]: hasVariant(
                variants,
                "type",
                "link"
              ),
              [sty.slotChildren__type_link_color_alert]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "color", "alert"),
              [sty.slotChildren__type_link_color_blue]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotChildren__type_link_color_brand]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotChildren__type_link_color_caution]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "color", "caution"),
              [sty.slotChildren__type_link_color_magenta]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotChildren__type_link_color_success]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "color", "success"),
              [sty.slotChildren__type_link_color_warning]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "color", "warning"),
              [sty.slotChildren__type_link_state_error]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "state", "error"),
              [sty.slotChildren__type_link_state_success]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "state", "success"),
              [sty.slotChildren__type_link_state_warning]:
                hasVariant(variants, "type", "link") &&
                hasVariant(variants, "state", "warning"),
              [sty.slotChildren__type_outline]: hasVariant(
                variants,
                "type",
                "outline"
              ),
              [sty.slotChildren__type_outline_color_alert]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "alert"),
              [sty.slotChildren__type_outline_color_blue]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotChildren__type_outline_color_brand]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotChildren__type_outline_color_caution]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "caution"),
              [sty.slotChildren__type_outline_color_magenta]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotChildren__type_outline_color_success]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "success"),
              [sty.slotChildren__type_outline_color_warning]:
                hasVariant(variants, "type", "outline") &&
                hasVariant(variants, "color", "warning"),
              [sty.slotChildren__type_primary_state_disabled]:
                hasVariant(variants, "type", "primary") &&
                hasVariant(variants, "state", "disabled"),
              [sty.slotChildren__type_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              ),
              [sty.slotChildren__type_secondary_color_alert]:
                hasVariant(variants, "type", "secondary") &&
                hasVariant(variants, "color", "alert"),
              [sty.slotChildren__type_secondary_color_blue]:
                hasVariant(variants, "type", "secondary") &&
                hasVariant(variants, "color", "blue"),
              [sty.slotChildren__type_secondary_color_brand]:
                hasVariant(variants, "type", "secondary") &&
                hasVariant(variants, "color", "brand"),
              [sty.slotChildren__type_secondary_color_caution]:
                hasVariant(variants, "type", "secondary") &&
                hasVariant(variants, "color", "caution"),
              [sty.slotChildren__type_secondary_color_magenta]:
                hasVariant(variants, "type", "secondary") &&
                hasVariant(variants, "color", "magenta"),
              [sty.slotChildren__type_secondary_color_success]:
                hasVariant(variants, "type", "secondary") &&
                hasVariant(variants, "color", "success"),
              [sty.slotChildren__type_secondary_color_warning]:
                hasVariant(variants, "type", "secondary") &&
                hasVariant(variants, "color", "warning")
            })
          })}
        </p.Stack>
      ) : null}
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  buttonPrimary: ["buttonPrimary", "iconTextParent", "iconParent"],
  iconTextParent: ["iconTextParent", "iconParent"],
  iconParent: ["iconParent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  buttonPrimary: "button";
  iconTextParent: "div";
  iconParent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonPrimary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonPrimary__VariantsArgs;
    args?: PlasmicButtonPrimary__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButtonPrimary__Fetches;
  } & Omit<PlasmicButtonPrimary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonPrimary__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButtonPrimary__ArgProps,
      internalVariantPropNames: PlasmicButtonPrimary__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButtonPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "buttonPrimary") {
    func.displayName = "PlasmicButtonPrimary";
  } else {
    func.displayName = `PlasmicButtonPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonPrimary = Object.assign(
  // Top-level PlasmicButtonPrimary renders the root element
  makeNodeComponent("buttonPrimary"),
  {
    // Helper components rendering sub-elements
    iconTextParent: makeNodeComponent("iconTextParent"),
    iconParent: makeNodeComponent("iconParent"),

    // Metadata about props expected for PlasmicButtonPrimary
    internalVariantProps: PlasmicButtonPrimary__VariantProps,
    internalArgProps: PlasmicButtonPrimary__ArgProps
  }
);

export default PlasmicButtonPrimary;
/* prettier-ignore-end */
