// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: kyLUbmyv_OS8Zz
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
import * as sty from "./PlasmicNavbarLogo.module.css"; // plasmic-import: kyLUbmyv_OS8Zz/css

export type PlasmicNavbarLogo__VariantMembers = {
  light: "light";
  size: "_16" | "_18" | "_24" | "_32" | "_36" | "_40" | "_48";
};

export type PlasmicNavbarLogo__VariantsArgs = {
  light?: SingleBooleanChoiceArg<"light">;
  size?: SingleChoiceArg<"_16" | "_18" | "_24" | "_32" | "_36" | "_40" | "_48">;
};

type VariantPropType = keyof PlasmicNavbarLogo__VariantsArgs;
export const PlasmicNavbarLogo__VariantProps = new Array<VariantPropType>(
  "light",
  "size"
);

export type PlasmicNavbarLogo__ArgsType = {
  destination?: string | PageHref;
};

type ArgPropType = keyof PlasmicNavbarLogo__ArgsType;
export const PlasmicNavbarLogo__ArgProps = new Array<ArgPropType>(
  "destination"
);

export type PlasmicNavbarLogo__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  navBarLogoLinkParent?: p.Flex<"div">;
  img?: p.Flex<"img">;
};

export interface DefaultNavbarLogoProps {
  destination?: string | PageHref;
  light?: SingleBooleanChoiceArg<"light">;
  size?: SingleChoiceArg<"_16" | "_18" | "_24" | "_32" | "_36" | "_40" | "_48">;
  className?: string;
}

function PlasmicNavbarLogo__RenderFunc(props: {
  variants: PlasmicNavbarLogo__VariantsArgs;
  args: PlasmicNavbarLogo__ArgsType;
  overrides: PlasmicNavbarLogo__OverridesType;
  dataFetches?: PlasmicNavbarLogo__Fetches;
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
        [sty.root__light]: hasVariant(variants, "light", "light"),
        [sty.root__size__18]: hasVariant(variants, "size", "_18")
      })}
      component={Link}
      href={args.destination}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"navBarLogoLinkParent"}
        data-plasmic-override={overrides.navBarLogoLinkParent}
        className={classNames(defaultcss.all, sty.navBarLogoLinkParent, {
          [sty.navBarLogoLinkParent__light]: hasVariant(
            variants,
            "light",
            "light"
          ),
          [sty.navBarLogoLinkParent__size__18]: hasVariant(
            variants,
            "size",
            "_18"
          )
        })}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img, {
            [sty.img__light]: hasVariant(variants, "light", "light"),
            [sty.img__size__16]: hasVariant(variants, "size", "_16"),
            [sty.img__size__18]: hasVariant(variants, "size", "_18"),
            [sty.img__size__24]: hasVariant(variants, "size", "_24"),
            [sty.img__size__32]: hasVariant(variants, "size", "_32"),
            [sty.img__size__36]: hasVariant(variants, "size", "_36"),
            [sty.img__size__40]: hasVariant(variants, "size", "_40"),
            [sty.img__size__48]: hasVariant(variants, "size", "_48")
          })}
          role={"img"}
          src={
            hasVariant(variants, "light", "light")
              ? "/plasmic/copy_of_market_v_2/images/intrepidLogo2021V2Lightsvg.svg"
              : "/plasmic/copy_of_market_v_2/images/intrepidLogo2021V2Darksvg.svg"
          }
        />
      </div>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navBarLogoLinkParent", "img"],
  navBarLogoLinkParent: ["navBarLogoLinkParent", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  navBarLogoLinkParent: "div";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarLogo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarLogo__VariantsArgs;
    args?: PlasmicNavbarLogo__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavbarLogo__Fetches;
  } & Omit<PlasmicNavbarLogo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbarLogo__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavbarLogo__ArgProps,
      internalVariantPropNames: PlasmicNavbarLogo__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavbarLogo__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarLogo";
  } else {
    func.displayName = `PlasmicNavbarLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarLogo = Object.assign(
  // Top-level PlasmicNavbarLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarLogoLinkParent: makeNodeComponent("navBarLogoLinkParent"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNavbarLogo
    internalVariantProps: PlasmicNavbarLogo__VariantProps,
    internalArgProps: PlasmicNavbarLogo__ArgProps
  }
);

export default PlasmicNavbarLogo;
/* prettier-ignore-end */
