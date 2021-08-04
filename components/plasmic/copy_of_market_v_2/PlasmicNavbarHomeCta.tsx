// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: j4e9sa8n2K5tpT
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
import NavbarLogo from "../../NavbarLogo"; // plasmic-import: kyLUbmyv_OS8Zz/component
import TextLinkUnderlinePrimary from "../../TextLinkUnderlinePrimary"; // plasmic-import: 6pY-cK_-KJMdF_/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: tSiOWgKlHR05p7/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicNavbarHomeCta.module.css"; // plasmic-import: j4e9sa8n2K5tpT/css

export type PlasmicNavbarHomeCta__VariantMembers = {
  color: "dark";
};

export type PlasmicNavbarHomeCta__VariantsArgs = {
  color?: SingleChoiceArg<"dark">;
};

type VariantPropType = keyof PlasmicNavbarHomeCta__VariantsArgs;
export const PlasmicNavbarHomeCta__VariantProps = new Array<VariantPropType>(
  "color"
);

export type PlasmicNavbarHomeCta__ArgsType = {};
type ArgPropType = keyof PlasmicNavbarHomeCta__ArgsType;
export const PlasmicNavbarHomeCta__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbarHomeCta__OverridesType = {
  root?: p.Flex<"div">;
  navbarLogo?: p.Flex<typeof NavbarLogo>;
  textLinkUnderlinePrimary?: p.Flex<typeof TextLinkUnderlinePrimary>;
  buttonLinkPrimary?: p.Flex<typeof ButtonLinkPrimary>;
};

export interface DefaultNavbarHomeCtaProps {
  color?: SingleChoiceArg<"dark">;
  className?: string;
}

function PlasmicNavbarHomeCta__RenderFunc(props: {
  variants: PlasmicNavbarHomeCta__VariantsArgs;
  args: PlasmicNavbarHomeCta__ArgsType;
  overrides: PlasmicNavbarHomeCta__OverridesType;
  dataFetches?: PlasmicNavbarHomeCta__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__color_dark]: hasVariant(variants, "color", "dark")
      })}
    >
      <NavbarLogo
        data-plasmic-name={"navbarLogo"}
        data-plasmic-override={overrides.navbarLogo}
        className={classNames("__wab_instance", sty.navbarLogo, {
          [sty.navbarLogo__color_dark]: hasVariant(variants, "color", "dark")
        })}
        destination={
          hasVariant(globalVariants, "screen", "mobile")
            ? ("/" as const)
            : hasVariant(globalVariants, "screen", "desktop")
            ? ("/" as const)
            : ("/" as const)
        }
        light={
          hasVariant(variants, "color", "dark") ? ("light" as const) : undefined
        }
      />

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__xQLf, {
            [sty.freeBox__color_dark__xQLfLk2FU]: hasVariant(
              variants,
              "color",
              "dark"
            )
          })}
        >
          {(
            hasVariant(globalVariants, "screen", "mobile")
              ? false
              : hasVariant(globalVariants, "screen", "desktop")
              ? true
              : true
          ) ? (
            <TextLinkUnderlinePrimary
              data-plasmic-name={"textLinkUnderlinePrimary"}
              data-plasmic-override={overrides.textLinkUnderlinePrimary}
              className={classNames(
                "__wab_instance",
                sty.textLinkUnderlinePrimary,
                {
                  [sty.textLinkUnderlinePrimary__color_dark]: hasVariant(
                    variants,
                    "color",
                    "dark"
                  )
                }
              )}
              color={
                hasVariant(variants, "color", "dark")
                  ? ("light" as const)
                  : undefined
              }
              destination={
                hasVariant(globalVariants, "screen", "desktop")
                  ? ("/member/pricing" as const)
                  : ("/member/pricing" as const)
              }
              size={"_14" as const}
              text={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__xTyD,
                    {
                      [sty.freeBox__color_dark__xTyDlk2FU]: hasVariant(
                        variants,
                        "color",
                        "dark"
                      )
                    }
                  )}
                >
                  {hasVariant(globalVariants, "screen", "desktop")
                    ? "Become a member"
                    : "Become a member"}
                </div>
              }
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <ButtonLinkPrimary
              data-plasmic-name={"buttonLinkPrimary"}
              data-plasmic-override={overrides.buttonLinkPrimary}
              className={classNames("__wab_instance", sty.buttonLinkPrimary)}
              color={
                hasVariant(globalVariants, "screen", "desktop")
                  ? ("brand" as const)
                  : ("brand" as const)
              }
              destination={
                hasVariant(globalVariants, "screen", "mobile")
                  ? ("/partner/pricing" as const)
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? ("/partner/pricing" as const)
                  : ("/partner/pricing" as const)
              }
              height={
                hasVariant(globalVariants, "screen", "desktop")
                  ? ("_36" as const)
                  : ("_36" as const)
              }
              text={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__cZ0Zu
                  )}
                >
                  {hasVariant(globalVariants, "screen", "desktop")
                    ? "Partner"
                    : "Partner"}
                </div>
              }
              type={
                hasVariant(globalVariants, "screen", "desktop")
                  ? ("fill" as const)
                  : ("fill" as const)
              }
              width={
                hasVariant(globalVariants, "screen", "mobile")
                  ? ("_90" as const)
                  : hasVariant(globalVariants, "screen", "desktop")
                  ? ("_140" as const)
                  : ("_140" as const)
              }
            />
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbarLogo", "textLinkUnderlinePrimary", "buttonLinkPrimary"],
  navbarLogo: ["navbarLogo"],
  textLinkUnderlinePrimary: ["textLinkUnderlinePrimary"],
  buttonLinkPrimary: ["buttonLinkPrimary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbarLogo: typeof NavbarLogo;
  textLinkUnderlinePrimary: typeof TextLinkUnderlinePrimary;
  buttonLinkPrimary: typeof ButtonLinkPrimary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarHomeCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarHomeCta__VariantsArgs;
    args?: PlasmicNavbarHomeCta__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavbarHomeCta__Fetches;
  } & Omit<PlasmicNavbarHomeCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbarHomeCta__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavbarHomeCta__ArgProps,
      internalVariantPropNames: PlasmicNavbarHomeCta__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavbarHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarHomeCta";
  } else {
    func.displayName = `PlasmicNavbarHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarHomeCta = Object.assign(
  // Top-level PlasmicNavbarHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarLogo: makeNodeComponent("navbarLogo"),
    textLinkUnderlinePrimary: makeNodeComponent("textLinkUnderlinePrimary"),
    buttonLinkPrimary: makeNodeComponent("buttonLinkPrimary"),

    // Metadata about props expected for PlasmicNavbarHomeCta
    internalVariantProps: PlasmicNavbarHomeCta__VariantProps,
    internalArgProps: PlasmicNavbarHomeCta__ArgProps
  }
);

export default PlasmicNavbarHomeCta;
/* prettier-ignore-end */
