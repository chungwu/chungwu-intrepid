// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: nBfIHHqHvjUywN9
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
import NavbarSwitch from "../../NavbarSwitch"; // plasmic-import: OecOEfFFIUzxZ0j/component
import NavbarLogo from "../../NavbarLogo"; // plasmic-import: kyLUbmyv_OS8Zz/component
import SearchbarPrimary from "../../SearchbarPrimary"; // plasmic-import: i9y9X99bmAqsmFE/component
import NavbarSave from "../../NavbarSave"; // plasmic-import: _VghiGnQc_t1aT/component
import NavbarBrief from "../../NavbarBrief"; // plasmic-import: gY-azC_pqF0jjM/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: kWaJrwe3c90GY1/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicNavbarInternal.module.css"; // plasmic-import: nBfIHHqHvjUywN9/css

import ListingIcon from "./icons/PlasmicIcon__Listing"; // plasmic-import: V-Z6DuZPre8UBS6/icon
import BoostIcon from "./icons/PlasmicIcon__Boost"; // plasmic-import: zTeN8PzxWbg23t7/icon

export type PlasmicNavbarInternal__VariantMembers = {
  user: "member" | "partner";
  state: "loggedIn" | "loggedOut";
  search: "search";
};

export type PlasmicNavbarInternal__VariantsArgs = {
  user?: SingleChoiceArg<"member" | "partner">;
  state?: SingleChoiceArg<"loggedIn" | "loggedOut">;
  search?: SingleBooleanChoiceArg<"search">;
};

type VariantPropType = keyof PlasmicNavbarInternal__VariantsArgs;
export const PlasmicNavbarInternal__VariantProps = new Array<VariantPropType>(
  "user",
  "state",
  "search"
);

export type PlasmicNavbarInternal__ArgsType = {};
type ArgPropType = keyof PlasmicNavbarInternal__ArgsType;
export const PlasmicNavbarInternal__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbarInternal__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"div">;
  sidebarHeaderClosed?: p.Flex<"div">;
  navbarSwitch?: p.Flex<typeof NavbarSwitch>;
  navbarLogo?: p.Flex<typeof NavbarLogo>;
  searchBox?: p.Flex<"div">;
  searchbarPrimary?: p.Flex<typeof SearchbarPrimary>;
  navbarListButton?: p.Flex<"button">;
  navbarListButtonTextParent?: p.Flex<"div">;
  navbarListButtonSvg?: p.Flex<"svg">;
  navbarListButtonText?: p.Flex<"div">;
  navbarListButton22?: p.Flex<"button">;
  navbarListButtonTextParent22?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  navbarListButtonText22?: p.Flex<"div">;
  navbarSave?: p.Flex<typeof NavbarSave>;
  navbarBrief?: p.Flex<typeof NavbarBrief>;
  userAvatar?: p.Flex<typeof UserAvatar>;
  navUserAvatar32?: p.Flex<"img">;
};

export interface DefaultNavbarInternalProps {
  user?: SingleChoiceArg<"member" | "partner">;
  state?: SingleChoiceArg<"loggedIn" | "loggedOut">;
  search?: SingleBooleanChoiceArg<"search">;
  className?: string;
}

function PlasmicNavbarInternal__RenderFunc(props: {
  variants: PlasmicNavbarInternal__VariantsArgs;
  args: PlasmicNavbarInternal__ArgsType;
  overrides: PlasmicNavbarInternal__OverridesType;
  dataFetches?: PlasmicNavbarInternal__Fetches;
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__state_loggedOut]: hasVariant(
            variants,
            "state",
            "loggedOut"
          ),
          [sty.parent__user_partner_state_loggedIn]:
            hasVariant(variants, "user", "partner") &&
            hasVariant(variants, "state", "loggedIn")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"sidebarHeaderClosed"}
          data-plasmic-override={overrides.sidebarHeaderClosed}
          hasGap={true}
          className={classNames(defaultcss.all, sty.sidebarHeaderClosed)}
        >
          <NavbarSwitch
            data-plasmic-name={"navbarSwitch"}
            data-plasmic-override={overrides.navbarSwitch}
            className={classNames("__wab_instance", sty.navbarSwitch)}
            target={"side-bar" as const}
          />

          <NavbarLogo
            data-plasmic-name={"navbarLogo"}
            data-plasmic-override={overrides.navbarLogo}
            className={classNames("__wab_instance", sty.navbarLogo)}
            size={"_16" as const}
          />
        </p.Stack>

        {(
          hasVariant(variants, "user", "partner") &&
          hasVariant(variants, "state", "loggedOut")
            ? false
            : hasVariant(variants, "user", "member") &&
              hasVariant(variants, "state", "loggedOut")
            ? false
            : hasVariant(variants, "search", "search")
            ? true
            : hasVariant(globalVariants, "screen", "mobile")
            ? false
            : true
        ) ? (
          <div
            data-plasmic-name={"searchBox"}
            data-plasmic-override={overrides.searchBox}
            className={classNames(defaultcss.all, sty.searchBox, {
              [sty.searchBox__search]: hasVariant(variants, "search", "search"),
              [sty.searchBox__user_member_state_loggedOut]:
                hasVariant(variants, "user", "member") &&
                hasVariant(variants, "state", "loggedOut"),
              [sty.searchBox__user_partner_state_loggedOut]:
                hasVariant(variants, "user", "partner") &&
                hasVariant(variants, "state", "loggedOut")
            })}
          >
            <SearchbarPrimary
              data-plasmic-name={"searchbarPrimary"}
              data-plasmic-override={overrides.searchbarPrimary}
              className={classNames("__wab_instance", sty.searchbarPrimary, {
                [sty.searchbarPrimary__search]: hasVariant(
                  variants,
                  "search",
                  "search"
                ),
                [sty.searchbarPrimary__user_member_state_loggedOut]:
                  hasVariant(variants, "user", "member") &&
                  hasVariant(variants, "state", "loggedOut")
              })}
              height={"_36" as const}
              width={"_540" as const}
            />
          </div>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox___9GBwH, {
            [sty.freeBox__user_member_state_loggedIn___9GBwHpYhDq3TBkq]:
              hasVariant(variants, "user", "member") &&
              hasVariant(variants, "state", "loggedIn")
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__iyhy8, {
              [sty.freeBox__user_member__iyhy8PYhDq]: hasVariant(
                variants,
                "user",
                "member"
              ),
              [sty.freeBox__user_member_state_loggedIn__iyhy8PYhDq3TBkq]:
                hasVariant(variants, "user", "member") &&
                hasVariant(variants, "state", "loggedIn"),
              [sty.freeBox__user_member_state_loggedOut__iyhy8PYhDqZg0BI]:
                hasVariant(variants, "user", "member") &&
                hasVariant(variants, "state", "loggedOut")
            })}
          >
            {(
              hasVariant(variants, "user", "partner") &&
              hasVariant(variants, "state", "loggedOut")
                ? false
                : hasVariant(variants, "user", "partner") &&
                  hasVariant(variants, "state", "loggedIn")
                ? true
                : hasVariant(variants, "user", "member") &&
                  hasVariant(variants, "state", "loggedOut")
                ? false
                : hasVariant(variants, "user", "member") &&
                  hasVariant(variants, "state", "loggedIn")
                ? true
                : false
            ) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__rrhgw, {
                  [sty.freeBox__user_member__rrhgwpYhDq]: hasVariant(
                    variants,
                    "user",
                    "member"
                  ),
                  [sty.freeBox__user_member_state_loggedIn__rrhgwpYhDq3TBkq]:
                    hasVariant(variants, "user", "member") &&
                    hasVariant(variants, "state", "loggedIn"),
                  [sty.freeBox__user_member_state_loggedOut__rrhgwpYhDqZg0BI]:
                    hasVariant(variants, "user", "member") &&
                    hasVariant(variants, "state", "loggedOut"),
                  [sty.freeBox__user_partner__rrhgwCBnHo]: hasVariant(
                    variants,
                    "user",
                    "partner"
                  ),
                  [sty.freeBox__user_partner_state_loggedIn__rrhgwCBnHo3TBkq]:
                    hasVariant(variants, "user", "partner") &&
                    hasVariant(variants, "state", "loggedIn"),
                  [sty.freeBox__user_partner_state_loggedOut__rrhgwCBnHoZg0BI]:
                    hasVariant(variants, "user", "partner") &&
                    hasVariant(variants, "state", "loggedOut")
                })}
              >
                {(hasVariant(variants, "user", "partner") ? true : false) ? (
                  <button
                    data-plasmic-name={"navbarListButton"}
                    data-plasmic-override={overrides.navbarListButton}
                    className={classNames(
                      defaultcss.button,
                      sty.navbarListButton,
                      {
                        [sty.navbarListButton__user_partner]: hasVariant(
                          variants,
                          "user",
                          "partner"
                        )
                      }
                    )}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"navbarListButtonTextParent"}
                      data-plasmic-override={
                        overrides.navbarListButtonTextParent
                      }
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.navbarListButtonTextParent
                      )}
                    >
                      <ListingIcon
                        data-plasmic-name={"navbarListButtonSvg"}
                        data-plasmic-override={overrides.navbarListButtonSvg}
                        className={classNames(
                          defaultcss.all,
                          sty.navbarListButtonSvg
                        )}
                        role={"img"}
                      />

                      <div
                        data-plasmic-name={"navbarListButtonText"}
                        data-plasmic-override={overrides.navbarListButtonText}
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.navbarListButtonText
                        )}
                      >
                        {"New listing"}
                      </div>
                    </p.Stack>
                  </button>
                ) : null}
                {(hasVariant(variants, "user", "member") ? true : false) ? (
                  <button
                    data-plasmic-name={"navbarListButton22"}
                    data-plasmic-override={overrides.navbarListButton22}
                    className={classNames(
                      defaultcss.button,
                      sty.navbarListButton22,
                      {
                        [sty.navbarListButton22__user_member]: hasVariant(
                          variants,
                          "user",
                          "member"
                        )
                      }
                    )}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"navbarListButtonTextParent22"}
                      data-plasmic-override={
                        overrides.navbarListButtonTextParent22
                      }
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.navbarListButtonTextParent22
                      )}
                    >
                      <BoostIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(defaultcss.all, sty.svg)}
                        role={"img"}
                      />

                      <div
                        data-plasmic-name={"navbarListButtonText22"}
                        data-plasmic-override={overrides.navbarListButtonText22}
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.navbarListButtonText22
                        )}
                      >
                        {"Power up"}
                      </div>
                    </p.Stack>
                  </button>
                ) : null}
              </p.Stack>
            ) : null}
            {(
              hasVariant(variants, "user", "partner") &&
              hasVariant(variants, "state", "loggedOut")
                ? false
                : hasVariant(variants, "user", "partner") &&
                  hasVariant(variants, "state", "loggedIn")
                ? true
                : hasVariant(variants, "user", "member") &&
                  hasVariant(variants, "state", "loggedOut")
                ? false
                : hasVariant(variants, "user", "member") &&
                  hasVariant(variants, "state", "loggedIn")
                ? true
                : false
            ) ? (
              <NavbarSave
                data-plasmic-name={"navbarSave"}
                data-plasmic-override={overrides.navbarSave}
                className={classNames("__wab_instance", sty.navbarSave, {
                  [sty.navbarSave__user_member]: hasVariant(
                    variants,
                    "user",
                    "member"
                  ),
                  [sty.navbarSave__user_member_state_loggedIn]:
                    hasVariant(variants, "user", "member") &&
                    hasVariant(variants, "state", "loggedIn"),
                  [sty.navbarSave__user_member_state_loggedOut]:
                    hasVariant(variants, "user", "member") &&
                    hasVariant(variants, "state", "loggedOut"),
                  [sty.navbarSave__user_partner]: hasVariant(
                    variants,
                    "user",
                    "partner"
                  ),
                  [sty.navbarSave__user_partner_state_loggedIn]:
                    hasVariant(variants, "user", "partner") &&
                    hasVariant(variants, "state", "loggedIn"),
                  [sty.navbarSave__user_partner_state_loggedOut]:
                    hasVariant(variants, "user", "partner") &&
                    hasVariant(variants, "state", "loggedOut")
                })}
              />
            ) : null}
            {(
              hasVariant(variants, "user", "partner") &&
              hasVariant(variants, "state", "loggedOut")
                ? false
                : hasVariant(variants, "user", "partner") &&
                  hasVariant(variants, "state", "loggedIn")
                ? true
                : hasVariant(variants, "user", "member") &&
                  hasVariant(variants, "state", "loggedOut")
                ? false
                : hasVariant(variants, "user", "member") &&
                  hasVariant(variants, "state", "loggedIn")
                ? true
                : false
            ) ? (
              <NavbarBrief
                data-plasmic-name={"navbarBrief"}
                data-plasmic-override={overrides.navbarBrief}
                className={classNames("__wab_instance", sty.navbarBrief, {
                  [sty.navbarBrief__user_member_state_loggedIn]:
                    hasVariant(variants, "user", "member") &&
                    hasVariant(variants, "state", "loggedIn"),
                  [sty.navbarBrief__user_member_state_loggedOut]:
                    hasVariant(variants, "user", "member") &&
                    hasVariant(variants, "state", "loggedOut"),
                  [sty.navbarBrief__user_partner_state_loggedIn]:
                    hasVariant(variants, "user", "partner") &&
                    hasVariant(variants, "state", "loggedIn"),
                  [sty.navbarBrief__user_partner_state_loggedOut]:
                    hasVariant(variants, "user", "partner") &&
                    hasVariant(variants, "state", "loggedOut")
                })}
              />
            ) : null}

            <UserAvatar
              data-plasmic-name={"userAvatar"}
              data-plasmic-override={overrides.userAvatar}
              className={classNames("__wab_instance", sty.userAvatar, {
                [sty.userAvatar__search]: hasVariant(
                  variants,
                  "search",
                  "search"
                )
              })}
              navUserAvatar32={
                <img
                  data-plasmic-name={"navUserAvatar32"}
                  data-plasmic-override={overrides.navUserAvatar32}
                  alt={""}
                  className={classNames(defaultcss.img, sty.navUserAvatar32, {
                    [sty.navUserAvatar32__search]: hasVariant(
                      variants,
                      "search",
                      "search"
                    )
                  })}
                  role={"img"}
                  src={
                    "/plasmic/copy_of_market_v_2/images/userAvatarForPresentationjpg.jpeg"
                  }
                />
              }
              size={"_32" as const}
            />
          </p.Stack>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "sidebarHeaderClosed",
    "navbarSwitch",
    "navbarLogo",
    "searchBox",
    "searchbarPrimary",
    "navbarListButton",
    "navbarListButtonTextParent",
    "navbarListButtonSvg",
    "navbarListButtonText",
    "navbarListButton22",
    "navbarListButtonTextParent22",
    "svg",
    "navbarListButtonText22",
    "navbarSave",
    "navbarBrief",
    "userAvatar",
    "navUserAvatar32"
  ],
  parent: [
    "parent",
    "sidebarHeaderClosed",
    "navbarSwitch",
    "navbarLogo",
    "searchBox",
    "searchbarPrimary",
    "navbarListButton",
    "navbarListButtonTextParent",
    "navbarListButtonSvg",
    "navbarListButtonText",
    "navbarListButton22",
    "navbarListButtonTextParent22",
    "svg",
    "navbarListButtonText22",
    "navbarSave",
    "navbarBrief",
    "userAvatar",
    "navUserAvatar32"
  ],
  sidebarHeaderClosed: ["sidebarHeaderClosed", "navbarSwitch", "navbarLogo"],
  navbarSwitch: ["navbarSwitch"],
  navbarLogo: ["navbarLogo"],
  searchBox: ["searchBox", "searchbarPrimary"],
  searchbarPrimary: ["searchbarPrimary"],
  navbarListButton: [
    "navbarListButton",
    "navbarListButtonTextParent",
    "navbarListButtonSvg",
    "navbarListButtonText"
  ],
  navbarListButtonTextParent: [
    "navbarListButtonTextParent",
    "navbarListButtonSvg",
    "navbarListButtonText"
  ],
  navbarListButtonSvg: ["navbarListButtonSvg"],
  navbarListButtonText: ["navbarListButtonText"],
  navbarListButton22: [
    "navbarListButton22",
    "navbarListButtonTextParent22",
    "svg",
    "navbarListButtonText22"
  ],
  navbarListButtonTextParent22: [
    "navbarListButtonTextParent22",
    "svg",
    "navbarListButtonText22"
  ],
  svg: ["svg"],
  navbarListButtonText22: ["navbarListButtonText22"],
  navbarSave: ["navbarSave"],
  navbarBrief: ["navbarBrief"],
  userAvatar: ["userAvatar", "navUserAvatar32"],
  navUserAvatar32: ["navUserAvatar32"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parent: "div";
  sidebarHeaderClosed: "div";
  navbarSwitch: typeof NavbarSwitch;
  navbarLogo: typeof NavbarLogo;
  searchBox: "div";
  searchbarPrimary: typeof SearchbarPrimary;
  navbarListButton: "button";
  navbarListButtonTextParent: "div";
  navbarListButtonSvg: "svg";
  navbarListButtonText: "div";
  navbarListButton22: "button";
  navbarListButtonTextParent22: "div";
  svg: "svg";
  navbarListButtonText22: "div";
  navbarSave: typeof NavbarSave;
  navbarBrief: typeof NavbarBrief;
  userAvatar: typeof UserAvatar;
  navUserAvatar32: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarInternal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarInternal__VariantsArgs;
    args?: PlasmicNavbarInternal__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavbarInternal__Fetches;
  } & Omit<PlasmicNavbarInternal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbarInternal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavbarInternal__ArgProps,
      internalVariantPropNames: PlasmicNavbarInternal__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavbarInternal__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarInternal";
  } else {
    func.displayName = `PlasmicNavbarInternal.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarInternal = Object.assign(
  // Top-level PlasmicNavbarInternal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    sidebarHeaderClosed: makeNodeComponent("sidebarHeaderClosed"),
    navbarSwitch: makeNodeComponent("navbarSwitch"),
    navbarLogo: makeNodeComponent("navbarLogo"),
    searchBox: makeNodeComponent("searchBox"),
    searchbarPrimary: makeNodeComponent("searchbarPrimary"),
    navbarListButton: makeNodeComponent("navbarListButton"),
    navbarListButtonTextParent: makeNodeComponent("navbarListButtonTextParent"),
    navbarListButtonSvg: makeNodeComponent("navbarListButtonSvg"),
    navbarListButtonText: makeNodeComponent("navbarListButtonText"),
    navbarListButton22: makeNodeComponent("navbarListButton22"),
    navbarListButtonTextParent22: makeNodeComponent(
      "navbarListButtonTextParent22"
    ),
    svg: makeNodeComponent("svg"),
    navbarListButtonText22: makeNodeComponent("navbarListButtonText22"),
    navbarSave: makeNodeComponent("navbarSave"),
    navbarBrief: makeNodeComponent("navbarBrief"),
    userAvatar: makeNodeComponent("userAvatar"),
    navUserAvatar32: makeNodeComponent("navUserAvatar32"),

    // Metadata about props expected for PlasmicNavbarInternal
    internalVariantProps: PlasmicNavbarInternal__VariantProps,
    internalArgProps: PlasmicNavbarInternal__ArgProps
  }
);

export default PlasmicNavbarInternal;
/* prettier-ignore-end */
