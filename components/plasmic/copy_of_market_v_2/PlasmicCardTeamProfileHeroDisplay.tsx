// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: lyUH5WLeTiKQg
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
import UserAvatar from "../../UserAvatar"; // plasmic-import: kWaJrwe3c90GY1/component
import BadgeCommunityRating from "../../BadgeCommunityRating"; // plasmic-import: pvHb6wkRxy_-nIy/component
import BadgeVerification from "../../BadgeVerification"; // plasmic-import: _0UAhyxjhw8Dnc9/component
import TagPartnerA from "../../TagPartnerA"; // plasmic-import: 72IB-zeDYisARTy/component
import AvatarGroupIncrement from "../../AvatarGroupIncrement"; // plasmic-import: _G7vIao-9ZOCHFa/component
import ElementLocationPrimary from "../../ElementLocationPrimary"; // plasmic-import: ZxMCtSSS3lPiHE/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: gpNjXfbD_ZdpPU/component
import IconPrimary from "../../IconPrimary"; // plasmic-import: leoxU5GkcMHMK8X/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: tSiOWgKlHR05p7/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicCardTeamProfileHeroDisplay.module.css"; // plasmic-import: lyUH5WLeTiKQg/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon
import BookmarkIcon from "./icons/PlasmicIcon__Bookmark"; // plasmic-import: jLuEpvSpry_1edd/icon
import Icon171Icon from "./icons/PlasmicIcon__Icon171"; // plasmic-import: L1T0WWEIfF6hPBd/icon

export type PlasmicCardTeamProfileHeroDisplay__VariantMembers = {
  userState: "loggedIn" | "loggedOut";
};

export type PlasmicCardTeamProfileHeroDisplay__VariantsArgs = {
  userState?: SingleChoiceArg<"loggedIn" | "loggedOut">;
};

type VariantPropType = keyof PlasmicCardTeamProfileHeroDisplay__VariantsArgs;
export const PlasmicCardTeamProfileHeroDisplay__VariantProps =
  new Array<VariantPropType>("userState");

export type PlasmicCardTeamProfileHeroDisplay__ArgsType = {};
type ArgPropType = keyof PlasmicCardTeamProfileHeroDisplay__ArgsType;
export const PlasmicCardTeamProfileHeroDisplay__ArgProps =
  new Array<ArgPropType>();

export type PlasmicCardTeamProfileHeroDisplay__OverridesType = {
  root?: p.Flex<"div">;
  avatarParent?: p.Flex<"div">;
  userAvatar?: p.Flex<typeof UserAvatar>;
  companyHeadline?: p.Flex<"div">;
  headline?: p.Flex<"div">;
  companyStatsParent?: p.Flex<"div">;
  badgeCommunityRating?: p.Flex<typeof BadgeCommunityRating>;
  badgeVerification?: p.Flex<typeof BadgeVerification>;
  tagPartnerA?: p.Flex<typeof TagPartnerA>;
  avatarGroupIncrement?: p.Flex<typeof AvatarGroupIncrement>;
  locationHeadlineParent?: p.Flex<"div">;
  elementLocationPrimary?: p.Flex<typeof ElementLocationPrimary>;
  companyDescription?: p.Flex<"div">;
  buttonGroup?: p.Flex<"div">;
  iconPrimary?: p.Flex<typeof IconPrimary>;
  svgIcon?: p.Flex<"svg">;
  svgIcon6?: p.Flex<"svg">;
  buttonLinkPrimary?: p.Flex<typeof ButtonLinkPrimary>;
};

export interface DefaultCardTeamProfileHeroDisplayProps {
  userState?: SingleChoiceArg<"loggedIn" | "loggedOut">;
  className?: string;
}

function PlasmicCardTeamProfileHeroDisplay__RenderFunc(props: {
  variants: PlasmicCardTeamProfileHeroDisplay__VariantsArgs;
  args: PlasmicCardTeamProfileHeroDisplay__ArgsType;
  overrides: PlasmicCardTeamProfileHeroDisplay__OverridesType;
  dataFetches?: PlasmicCardTeamProfileHeroDisplay__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
        data-plasmic-name={"avatarParent"}
        data-plasmic-override={overrides.avatarParent}
        className={classNames(defaultcss.all, sty.avatarParent)}
      >
        <UserAvatar
          data-plasmic-name={"userAvatar"}
          data-plasmic-override={overrides.userAvatar}
          size={"_80" as const}
        />
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"companyHeadline"}
        data-plasmic-override={overrides.companyHeadline}
        hasGap={true}
        className={classNames(defaultcss.all, sty.companyHeadline)}
      >
        <div
          data-plasmic-name={"headline"}
          data-plasmic-override={overrides.headline}
          className={classNames(defaultcss.all, sty.headline)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__qTwL2
            )}
          >
            {"Company or team display name"}
          </div>
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"companyStatsParent"}
          data-plasmic-override={overrides.companyStatsParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.companyStatsParent)}
        >
          <BadgeCommunityRating
            data-plasmic-name={"badgeCommunityRating"}
            data-plasmic-override={overrides.badgeCommunityRating}
            className={classNames("__wab_instance", sty.badgeCommunityRating)}
          />

          <BadgeVerification
            data-plasmic-name={"badgeVerification"}
            data-plasmic-override={overrides.badgeVerification}
          />

          <TagPartnerA
            data-plasmic-name={"tagPartnerA"}
            data-plasmic-override={overrides.tagPartnerA}
            className={classNames("__wab_instance", sty.tagPartnerA)}
          />

          <AvatarGroupIncrement
            data-plasmic-name={"avatarGroupIncrement"}
            data-plasmic-override={overrides.avatarGroupIncrement}
            className={classNames("__wab_instance", sty.avatarGroupIncrement)}
            number={"7"}
          />
        </p.Stack>

        {(hasVariant(globalVariants, "screen", "desktop") ? true : false) ? (
          <div
            data-plasmic-name={"locationHeadlineParent"}
            data-plasmic-override={overrides.locationHeadlineParent}
            className={classNames(defaultcss.all, sty.locationHeadlineParent)}
          >
            {true ? (
              <ElementLocationPrimary
                data-plasmic-name={"elementLocationPrimary"}
                data-plasmic-override={overrides.elementLocationPrimary}
                className={classNames(
                  "__wab_instance",
                  sty.elementLocationPrimary
                )}
              />
            ) : null}
          </div>
        ) : null}
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"companyDescription"}
        data-plasmic-override={overrides.companyDescription}
        hasGap={true}
        className={classNames(defaultcss.all, sty.companyDescription)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox__gedpy
          )}
        >
          {hasVariant(globalVariants, "screen", "desktop")
            ? "Company Short description 80 characters."
            : "Company tag-line short description 80 characters"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"buttonGroup"}
        data-plasmic-override={overrides.buttonGroup}
        hasGap={true}
        className={classNames(defaultcss.all, sty.buttonGroup, {
          [sty.buttonGroup__userState_loggedIn]: hasVariant(
            variants,
            "userState",
            "loggedIn"
          )
        })}
      >
        {(hasVariant(variants, "userState", "loggedIn") ? false : true) ? (
          <ButtonPrimary
            className={classNames("__wab_instance", sty.buttonPrimary__e9N4A, {
              [sty.buttonPrimary__userState_loggedIn__e9N4A5DBif]: hasVariant(
                variants,
                "userState",
                "loggedIn"
              )
            })}
            color={"brand" as const}
            size={"_120" as const}
            type={
              hasVariant(variants, "userState", "loggedIn")
                ? ("outline" as const)
                : ("primary" as const)
            }
          >
            {hasVariant(variants, "userState", "loggedIn")
              ? "Edit"
              : "Subscribe"}
          </ButtonPrimary>
        ) : null}
        {(hasVariant(variants, "userState", "loggedIn") ? true : true) ? (
          <ButtonPrimary
            className={classNames("__wab_instance", sty.buttonPrimary___2Iqy0, {
              [sty.buttonPrimary__userState_loggedIn___2Iqy05DBif]: hasVariant(
                variants,
                "userState",
                "loggedIn"
              )
            })}
            size={"_120" as const}
            type={"outline" as const}
          >
            {"Follow"}
          </ButtonPrimary>
        ) : null}
        {(hasVariant(variants, "userState", "loggedIn") ? true : true) ? (
          <IconPrimary
            data-plasmic-name={"iconPrimary"}
            data-plasmic-override={overrides.iconPrimary}
            className={classNames("__wab_instance", sty.iconPrimary, {
              [sty.iconPrimary__userState_loggedIn]: hasVariant(
                variants,
                "userState",
                "loggedIn"
              ),
              [sty.iconPrimary__userState_loggedOut]: hasVariant(
                variants,
                "userState",
                "loggedOut"
              )
            })}
            size={"_36Px" as const}
            svgIcon={
              <BookmarkIcon
                data-plasmic-name={"svgIcon"}
                data-plasmic-override={overrides.svgIcon}
                className={classNames(defaultcss.all, sty.svgIcon, {
                  [sty.svgIcon__userState_loggedIn]: hasVariant(
                    variants,
                    "userState",
                    "loggedIn"
                  )
                })}
                role={"img"}
              />
            }
            svgIcon32Px={
              <BookmarkIcon
                data-plasmic-name={"svgIcon6"}
                data-plasmic-override={overrides.svgIcon6}
                className={classNames(defaultcss.all, sty.svgIcon6)}
                role={"img"}
              />
            }
          />
        ) : null}
        {(hasVariant(variants, "userState", "loggedIn") ? true : false) ? (
          <ButtonLinkPrimary
            data-plasmic-name={"buttonLinkPrimary"}
            data-plasmic-override={overrides.buttonLinkPrimary}
            className={classNames("__wab_instance", sty.buttonLinkPrimary, {
              [sty.buttonLinkPrimary__userState_loggedIn]: hasVariant(
                variants,
                "userState",
                "loggedIn"
              )
            })}
            color={
              hasVariant(variants, "userState", "loggedIn")
                ? ("brand" as const)
                : undefined
            }
            height={
              hasVariant(variants, "userState", "loggedIn")
                ? ("_32" as const)
                : undefined
            }
            text={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__in5Jb,
                  {
                    [sty.freeBox__userState_loggedIn__in5Jb5DBif]: hasVariant(
                      variants,
                      "userState",
                      "loggedIn"
                    )
                  }
                )}
              >
                {hasVariant(variants, "userState", "loggedIn")
                  ? "Edit"
                  : "Hyper Link"}
              </div>
            }
            type={
              hasVariant(variants, "userState", "loggedIn")
                ? ("outline" as const)
                : undefined
            }
            width={
              hasVariant(variants, "userState", "loggedIn")
                ? ("_120" as const)
                : undefined
            }
          />
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "avatarParent",
    "userAvatar",
    "companyHeadline",
    "headline",
    "companyStatsParent",
    "badgeCommunityRating",
    "badgeVerification",
    "tagPartnerA",
    "avatarGroupIncrement",
    "locationHeadlineParent",
    "elementLocationPrimary",
    "companyDescription",
    "buttonGroup",
    "iconPrimary",
    "svgIcon",
    "svgIcon6",
    "buttonLinkPrimary"
  ],
  avatarParent: ["avatarParent", "userAvatar"],
  userAvatar: ["userAvatar"],
  companyHeadline: [
    "companyHeadline",
    "headline",
    "companyStatsParent",
    "badgeCommunityRating",
    "badgeVerification",
    "tagPartnerA",
    "avatarGroupIncrement",
    "locationHeadlineParent",
    "elementLocationPrimary"
  ],
  headline: ["headline"],
  companyStatsParent: [
    "companyStatsParent",
    "badgeCommunityRating",
    "badgeVerification",
    "tagPartnerA",
    "avatarGroupIncrement"
  ],
  badgeCommunityRating: ["badgeCommunityRating"],
  badgeVerification: ["badgeVerification"],
  tagPartnerA: ["tagPartnerA"],
  avatarGroupIncrement: ["avatarGroupIncrement"],
  locationHeadlineParent: ["locationHeadlineParent", "elementLocationPrimary"],
  elementLocationPrimary: ["elementLocationPrimary"],
  companyDescription: ["companyDescription"],
  buttonGroup: [
    "buttonGroup",
    "iconPrimary",
    "svgIcon",
    "svgIcon6",
    "buttonLinkPrimary"
  ],
  iconPrimary: ["iconPrimary", "svgIcon", "svgIcon6"],
  svgIcon: ["svgIcon"],
  svgIcon6: ["svgIcon6"],
  buttonLinkPrimary: ["buttonLinkPrimary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatarParent: "div";
  userAvatar: typeof UserAvatar;
  companyHeadline: "div";
  headline: "div";
  companyStatsParent: "div";
  badgeCommunityRating: typeof BadgeCommunityRating;
  badgeVerification: typeof BadgeVerification;
  tagPartnerA: typeof TagPartnerA;
  avatarGroupIncrement: typeof AvatarGroupIncrement;
  locationHeadlineParent: "div";
  elementLocationPrimary: typeof ElementLocationPrimary;
  companyDescription: "div";
  buttonGroup: "div";
  iconPrimary: typeof IconPrimary;
  svgIcon: "svg";
  svgIcon6: "svg";
  buttonLinkPrimary: typeof ButtonLinkPrimary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardTeamProfileHeroDisplay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardTeamProfileHeroDisplay__VariantsArgs;
    args?: PlasmicCardTeamProfileHeroDisplay__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCardTeamProfileHeroDisplay__Fetches;
  } & Omit<PlasmicCardTeamProfileHeroDisplay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCardTeamProfileHeroDisplay__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCardTeamProfileHeroDisplay__ArgProps,
      internalVariantPropNames: PlasmicCardTeamProfileHeroDisplay__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCardTeamProfileHeroDisplay__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardTeamProfileHeroDisplay";
  } else {
    func.displayName = `PlasmicCardTeamProfileHeroDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicCardTeamProfileHeroDisplay = Object.assign(
  // Top-level PlasmicCardTeamProfileHeroDisplay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatarParent: makeNodeComponent("avatarParent"),
    userAvatar: makeNodeComponent("userAvatar"),
    companyHeadline: makeNodeComponent("companyHeadline"),
    headline: makeNodeComponent("headline"),
    companyStatsParent: makeNodeComponent("companyStatsParent"),
    badgeCommunityRating: makeNodeComponent("badgeCommunityRating"),
    badgeVerification: makeNodeComponent("badgeVerification"),
    tagPartnerA: makeNodeComponent("tagPartnerA"),
    avatarGroupIncrement: makeNodeComponent("avatarGroupIncrement"),
    locationHeadlineParent: makeNodeComponent("locationHeadlineParent"),
    elementLocationPrimary: makeNodeComponent("elementLocationPrimary"),
    companyDescription: makeNodeComponent("companyDescription"),
    buttonGroup: makeNodeComponent("buttonGroup"),
    iconPrimary: makeNodeComponent("iconPrimary"),
    svgIcon: makeNodeComponent("svgIcon"),
    svgIcon6: makeNodeComponent("svgIcon6"),
    buttonLinkPrimary: makeNodeComponent("buttonLinkPrimary"),

    // Metadata about props expected for PlasmicCardTeamProfileHeroDisplay
    internalVariantProps: PlasmicCardTeamProfileHeroDisplay__VariantProps,
    internalArgProps: PlasmicCardTeamProfileHeroDisplay__ArgProps
  }
);

export default PlasmicCardTeamProfileHeroDisplay;
/* prettier-ignore-end */