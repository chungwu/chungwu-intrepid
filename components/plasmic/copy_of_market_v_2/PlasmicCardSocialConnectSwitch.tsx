// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: 9czIbo_1TSRssu
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
import IconSocialProfile from "../../IconSocialProfile"; // plasmic-import: _qRaKUFCQia4l9Z/component
import SwitchPrimary from "../../SwitchPrimary"; // plasmic-import: NI4mgAsheQjrPj/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicCardSocialConnectSwitch.module.css"; // plasmic-import: 9czIbo_1TSRssu/css

export type PlasmicCardSocialConnectSwitch__VariantMembers = {
  connected: "connected";
  width: "_360" | "_540" | "_720";
  socialNetwork:
    | "instagram"
    | "facebook"
    | "linkedin"
    | "twitter"
    | "youtube"
    | "tikTok"
    | "twitch"
    | "discord"
    | "soundcloud"
    | "spotify"
    | "hackernews"
    | "dribbble"
    | "productHunt"
    | "angellist"
    | "github"
    | "pinterest"
    | "reddit"
    | "slack"
    | "snapchat"
    | "whatsapp"
    | "line"
    | "wechat"
    | "google";
  accounting: "xero" | "quickbooks";
};

export type PlasmicCardSocialConnectSwitch__VariantsArgs = {
  connected?: SingleBooleanChoiceArg<"connected">;
  width?: SingleChoiceArg<"_360" | "_540" | "_720">;
  socialNetwork?: SingleChoiceArg<
    | "instagram"
    | "facebook"
    | "linkedin"
    | "twitter"
    | "youtube"
    | "tikTok"
    | "twitch"
    | "discord"
    | "soundcloud"
    | "spotify"
    | "hackernews"
    | "dribbble"
    | "productHunt"
    | "angellist"
    | "github"
    | "pinterest"
    | "reddit"
    | "slack"
    | "snapchat"
    | "whatsapp"
    | "line"
    | "wechat"
    | "google"
  >;
  accounting?: SingleChoiceArg<"xero" | "quickbooks">;
};

type VariantPropType = keyof PlasmicCardSocialConnectSwitch__VariantsArgs;
export const PlasmicCardSocialConnectSwitch__VariantProps =
  new Array<VariantPropType>(
    "connected",
    "width",
    "socialNetwork",
    "accounting"
  );

export type PlasmicCardSocialConnectSwitch__ArgsType = {};
type ArgPropType = keyof PlasmicCardSocialConnectSwitch__ArgsType;
export const PlasmicCardSocialConnectSwitch__ArgProps =
  new Array<ArgPropType>();

export type PlasmicCardSocialConnectSwitch__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"div">;
  iconSocialProfile?: p.Flex<typeof IconSocialProfile>;
  switchPrimary?: p.Flex<typeof SwitchPrimary>;
};

export interface DefaultCardSocialConnectSwitchProps {
  connected?: SingleBooleanChoiceArg<"connected">;
  width?: SingleChoiceArg<"_360" | "_540" | "_720">;
  socialNetwork?: SingleChoiceArg<
    | "instagram"
    | "facebook"
    | "linkedin"
    | "twitter"
    | "youtube"
    | "tikTok"
    | "twitch"
    | "discord"
    | "soundcloud"
    | "spotify"
    | "hackernews"
    | "dribbble"
    | "productHunt"
    | "angellist"
    | "github"
    | "pinterest"
    | "reddit"
    | "slack"
    | "snapchat"
    | "whatsapp"
    | "line"
    | "wechat"
    | "google"
  >;
  accounting?: SingleChoiceArg<"xero" | "quickbooks">;
  className?: string;
}

function PlasmicCardSocialConnectSwitch__RenderFunc(props: {
  variants: PlasmicCardSocialConnectSwitch__VariantsArgs;
  args: PlasmicCardSocialConnectSwitch__ArgsType;
  overrides: PlasmicCardSocialConnectSwitch__OverridesType;
  dataFetches?: PlasmicCardSocialConnectSwitch__Fetches;
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__width__360]: hasVariant(variants, "width", "_360"),
          [sty.parent__width__540]: hasVariant(variants, "width", "_540"),
          [sty.parent__width__720]: hasVariant(variants, "width", "_720")
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__n7L5D)}
        >
          <IconSocialProfile
            data-plasmic-name={"iconSocialProfile"}
            data-plasmic-override={overrides.iconSocialProfile}
            accounting={
              hasVariant(variants, "accounting", "quickbooks")
                ? ("quickbooks" as const)
                : hasVariant(variants, "accounting", "xero")
                ? ("xero" as const)
                : undefined
            }
            className={classNames("__wab_instance", sty.iconSocialProfile, {
              [sty.iconSocialProfile__accounting_quickbooks]: hasVariant(
                variants,
                "accounting",
                "quickbooks"
              ),
              [sty.iconSocialProfile__accounting_xero]: hasVariant(
                variants,
                "accounting",
                "xero"
              ),
              [sty.iconSocialProfile__socialNetwork_angellist]: hasVariant(
                variants,
                "socialNetwork",
                "angellist"
              ),
              [sty.iconSocialProfile__socialNetwork_discord]: hasVariant(
                variants,
                "socialNetwork",
                "discord"
              ),
              [sty.iconSocialProfile__socialNetwork_dribbble]: hasVariant(
                variants,
                "socialNetwork",
                "dribbble"
              ),
              [sty.iconSocialProfile__socialNetwork_facebook]: hasVariant(
                variants,
                "socialNetwork",
                "facebook"
              ),
              [sty.iconSocialProfile__socialNetwork_github]: hasVariant(
                variants,
                "socialNetwork",
                "github"
              ),
              [sty.iconSocialProfile__socialNetwork_google]: hasVariant(
                variants,
                "socialNetwork",
                "google"
              ),
              [sty.iconSocialProfile__socialNetwork_hackernews]: hasVariant(
                variants,
                "socialNetwork",
                "hackernews"
              ),
              [sty.iconSocialProfile__socialNetwork_instagram]: hasVariant(
                variants,
                "socialNetwork",
                "instagram"
              ),
              [sty.iconSocialProfile__socialNetwork_line]: hasVariant(
                variants,
                "socialNetwork",
                "line"
              ),
              [sty.iconSocialProfile__socialNetwork_linkedin]: hasVariant(
                variants,
                "socialNetwork",
                "linkedin"
              ),
              [sty.iconSocialProfile__socialNetwork_pinterest]: hasVariant(
                variants,
                "socialNetwork",
                "pinterest"
              ),
              [sty.iconSocialProfile__socialNetwork_productHunt]: hasVariant(
                variants,
                "socialNetwork",
                "productHunt"
              ),
              [sty.iconSocialProfile__socialNetwork_reddit]: hasVariant(
                variants,
                "socialNetwork",
                "reddit"
              ),
              [sty.iconSocialProfile__socialNetwork_slack]: hasVariant(
                variants,
                "socialNetwork",
                "slack"
              ),
              [sty.iconSocialProfile__socialNetwork_snapchat]: hasVariant(
                variants,
                "socialNetwork",
                "snapchat"
              ),
              [sty.iconSocialProfile__socialNetwork_soundcloud]: hasVariant(
                variants,
                "socialNetwork",
                "soundcloud"
              ),
              [sty.iconSocialProfile__socialNetwork_spotify]: hasVariant(
                variants,
                "socialNetwork",
                "spotify"
              ),
              [sty.iconSocialProfile__socialNetwork_tikTok]: hasVariant(
                variants,
                "socialNetwork",
                "tikTok"
              ),
              [sty.iconSocialProfile__socialNetwork_twitch]: hasVariant(
                variants,
                "socialNetwork",
                "twitch"
              ),
              [sty.iconSocialProfile__socialNetwork_twitter]: hasVariant(
                variants,
                "socialNetwork",
                "twitter"
              ),
              [sty.iconSocialProfile__socialNetwork_wechat]: hasVariant(
                variants,
                "socialNetwork",
                "wechat"
              ),
              [sty.iconSocialProfile__socialNetwork_whatsapp]: hasVariant(
                variants,
                "socialNetwork",
                "whatsapp"
              ),
              [sty.iconSocialProfile__socialNetwork_youtube]: hasVariant(
                variants,
                "socialNetwork",
                "youtube"
              )
            })}
            size={"_45X45" as const}
            social={
              hasVariant(variants, "socialNetwork", "youtube")
                ? ("youtube" as const)
                : hasVariant(variants, "socialNetwork", "twitter")
                ? ("twitter" as const)
                : hasVariant(variants, "socialNetwork", "linkedin")
                ? ("linkedin" as const)
                : hasVariant(variants, "socialNetwork", "facebook")
                ? ("facebook" as const)
                : hasVariant(variants, "socialNetwork", "instagram")
                ? ("instagram" as const)
                : hasVariant(variants, "socialNetwork", "google")
                ? ("google" as const)
                : hasVariant(variants, "socialNetwork", "wechat")
                ? ("wechat" as const)
                : hasVariant(variants, "socialNetwork", "line")
                ? ("line" as const)
                : hasVariant(variants, "socialNetwork", "whatsapp")
                ? ("whatsapp" as const)
                : hasVariant(variants, "socialNetwork", "snapchat")
                ? ("snapchat" as const)
                : hasVariant(variants, "socialNetwork", "slack")
                ? ("slack" as const)
                : hasVariant(variants, "socialNetwork", "reddit")
                ? ("reddit" as const)
                : hasVariant(variants, "socialNetwork", "pinterest")
                ? ("pinterest" as const)
                : hasVariant(variants, "socialNetwork", "github")
                ? ("github" as const)
                : hasVariant(variants, "socialNetwork", "angellist")
                ? ("angellist" as const)
                : hasVariant(variants, "socialNetwork", "productHunt")
                ? ("productHunt" as const)
                : hasVariant(variants, "socialNetwork", "dribbble")
                ? ("dribbble" as const)
                : hasVariant(variants, "socialNetwork", "hackernews")
                ? ("hackerNews" as const)
                : hasVariant(variants, "socialNetwork", "spotify")
                ? ("spotify" as const)
                : hasVariant(variants, "socialNetwork", "soundcloud")
                ? ("soundcloud" as const)
                : hasVariant(variants, "socialNetwork", "discord")
                ? ("discord" as const)
                : hasVariant(variants, "socialNetwork", "twitch")
                ? ("twitch" as const)
                : hasVariant(variants, "socialNetwork", "tikTok")
                ? ("tikTok" as const)
                : undefined
            }
          />

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__teznH,
              {
                [sty.freeBox__accounting_quickbooks__teznHpIlsY]: hasVariant(
                  variants,
                  "accounting",
                  "quickbooks"
                ),
                [sty.freeBox__accounting_xero__teznHrgptb]: hasVariant(
                  variants,
                  "accounting",
                  "xero"
                ),
                [sty.freeBox__socialNetwork_angellist__teznHsBt1X]: hasVariant(
                  variants,
                  "socialNetwork",
                  "angellist"
                ),
                [sty.freeBox__socialNetwork_discord__teznHhFJx]: hasVariant(
                  variants,
                  "socialNetwork",
                  "discord"
                ),
                [sty.freeBox__socialNetwork_dribbble__teznHxtf77]: hasVariant(
                  variants,
                  "socialNetwork",
                  "dribbble"
                ),
                [sty.freeBox__socialNetwork_facebook__teznH21Oc]: hasVariant(
                  variants,
                  "socialNetwork",
                  "facebook"
                ),
                [sty.freeBox__socialNetwork_github__teznHhMUjQ]: hasVariant(
                  variants,
                  "socialNetwork",
                  "github"
                ),
                [sty.freeBox__socialNetwork_google__teznHGLwX]: hasVariant(
                  variants,
                  "socialNetwork",
                  "google"
                ),
                [sty.freeBox__socialNetwork_hackernews__teznHihOYv]: hasVariant(
                  variants,
                  "socialNetwork",
                  "hackernews"
                ),
                [sty.freeBox__socialNetwork_instagram__teznHDviN]: hasVariant(
                  variants,
                  "socialNetwork",
                  "instagram"
                ),
                [sty.freeBox__socialNetwork_line__teznHlu57S]: hasVariant(
                  variants,
                  "socialNetwork",
                  "line"
                ),
                [sty.freeBox__socialNetwork_linkedin__teznHiV9Tb]: hasVariant(
                  variants,
                  "socialNetwork",
                  "linkedin"
                ),
                [sty.freeBox__socialNetwork_pinterest__teznHcAssm]: hasVariant(
                  variants,
                  "socialNetwork",
                  "pinterest"
                ),
                [sty.freeBox__socialNetwork_productHunt__teznH4ZLqu]:
                  hasVariant(variants, "socialNetwork", "productHunt"),
                [sty.freeBox__socialNetwork_reddit__teznHmR584]: hasVariant(
                  variants,
                  "socialNetwork",
                  "reddit"
                ),
                [sty.freeBox__socialNetwork_slack__teznH1Qj6A]: hasVariant(
                  variants,
                  "socialNetwork",
                  "slack"
                ),
                [sty.freeBox__socialNetwork_snapchat__teznHLH6B]: hasVariant(
                  variants,
                  "socialNetwork",
                  "snapchat"
                ),
                [sty.freeBox__socialNetwork_soundcloud__teznHMnOlv]: hasVariant(
                  variants,
                  "socialNetwork",
                  "soundcloud"
                ),
                [sty.freeBox__socialNetwork_spotify__teznHjGyp2]: hasVariant(
                  variants,
                  "socialNetwork",
                  "spotify"
                ),
                [sty.freeBox__socialNetwork_tikTok__teznH3Gbr9]: hasVariant(
                  variants,
                  "socialNetwork",
                  "tikTok"
                ),
                [sty.freeBox__socialNetwork_twitch__teznHbHeT]: hasVariant(
                  variants,
                  "socialNetwork",
                  "twitch"
                ),
                [sty.freeBox__socialNetwork_twitter__teznH2U5CS]: hasVariant(
                  variants,
                  "socialNetwork",
                  "twitter"
                ),
                [sty.freeBox__socialNetwork_wechat__teznHUbA6]: hasVariant(
                  variants,
                  "socialNetwork",
                  "wechat"
                ),
                [sty.freeBox__socialNetwork_whatsapp__teznHhZb7]: hasVariant(
                  variants,
                  "socialNetwork",
                  "whatsapp"
                ),
                [sty.freeBox__socialNetwork_youtube__teznHq8JRj]: hasVariant(
                  variants,
                  "socialNetwork",
                  "youtube"
                )
              }
            )}
          >
            {hasVariant(variants, "socialNetwork", "youtube")
              ? "Youtube"
              : hasVariant(variants, "socialNetwork", "twitter")
              ? "Twitter"
              : hasVariant(variants, "socialNetwork", "linkedin")
              ? "Linkedin"
              : hasVariant(variants, "socialNetwork", "facebook")
              ? "Facebook"
              : hasVariant(variants, "socialNetwork", "instagram")
              ? "Instagram"
              : hasVariant(variants, "accounting", "quickbooks")
              ? "Quickbooks"
              : hasVariant(variants, "accounting", "xero")
              ? "Xero"
              : hasVariant(variants, "socialNetwork", "google")
              ? "Google"
              : hasVariant(variants, "socialNetwork", "wechat")
              ? "Wechat"
              : hasVariant(variants, "socialNetwork", "line")
              ? "Line"
              : hasVariant(variants, "socialNetwork", "whatsapp")
              ? "Whatsapp"
              : hasVariant(variants, "socialNetwork", "snapchat")
              ? "Snapchat"
              : hasVariant(variants, "socialNetwork", "slack")
              ? "Slack"
              : hasVariant(variants, "socialNetwork", "reddit")
              ? "Reddit"
              : hasVariant(variants, "socialNetwork", "pinterest")
              ? "Pinterest"
              : hasVariant(variants, "socialNetwork", "github")
              ? "Github"
              : hasVariant(variants, "socialNetwork", "angellist")
              ? "Angellist"
              : hasVariant(variants, "socialNetwork", "productHunt")
              ? "Product Hunt"
              : hasVariant(variants, "socialNetwork", "dribbble")
              ? "Dribbble"
              : hasVariant(variants, "socialNetwork", "hackernews")
              ? "Hackernews"
              : hasVariant(variants, "socialNetwork", "spotify")
              ? "Spotify"
              : hasVariant(variants, "socialNetwork", "soundcloud")
              ? "Soundcloud"
              : hasVariant(variants, "socialNetwork", "discord")
              ? "Discord"
              : hasVariant(variants, "socialNetwork", "twitch")
              ? "Twitch"
              : hasVariant(variants, "socialNetwork", "tikTok")
              ? "TikTok"
              : "Social network"}
          </div>
        </p.Stack>

        <SwitchPrimary
          data-plasmic-name={"switchPrimary"}
          data-plasmic-override={overrides.switchPrimary}
          _switch={
            hasVariant(variants, "connected", "connected")
              ? ("_switch" as const)
              : undefined
          }
          className={classNames("__wab_instance", sty.switchPrimary, {
            [sty.switchPrimary__connected]: hasVariant(
              variants,
              "connected",
              "connected"
            )
          })}
          color={[]}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "parent", "iconSocialProfile", "switchPrimary"],
  parent: ["parent", "iconSocialProfile", "switchPrimary"],
  iconSocialProfile: ["iconSocialProfile"],
  switchPrimary: ["switchPrimary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parent: "div";
  iconSocialProfile: typeof IconSocialProfile;
  switchPrimary: typeof SwitchPrimary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardSocialConnectSwitch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardSocialConnectSwitch__VariantsArgs;
    args?: PlasmicCardSocialConnectSwitch__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCardSocialConnectSwitch__Fetches;
  } & Omit<PlasmicCardSocialConnectSwitch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCardSocialConnectSwitch__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCardSocialConnectSwitch__ArgProps,
      internalVariantPropNames: PlasmicCardSocialConnectSwitch__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCardSocialConnectSwitch__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardSocialConnectSwitch";
  } else {
    func.displayName = `PlasmicCardSocialConnectSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicCardSocialConnectSwitch = Object.assign(
  // Top-level PlasmicCardSocialConnectSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    iconSocialProfile: makeNodeComponent("iconSocialProfile"),
    switchPrimary: makeNodeComponent("switchPrimary"),

    // Metadata about props expected for PlasmicCardSocialConnectSwitch
    internalVariantProps: PlasmicCardSocialConnectSwitch__VariantProps,
    internalArgProps: PlasmicCardSocialConnectSwitch__ArgProps
  }
);

export default PlasmicCardSocialConnectSwitch;
/* prettier-ignore-end */