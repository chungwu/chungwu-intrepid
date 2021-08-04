// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: iFiseLWb5KZz4aK
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
import * as sty from "./PlasmicButtonSideBarMemberSettings.module.css"; // plasmic-import: iFiseLWb5KZz4aK/css

import ChevronDownBIcon from "./icons/PlasmicIcon__ChevronDownB"; // plasmic-import: _PBzFXwb8iqLULI/icon

export type PlasmicButtonSideBarMemberSettings__VariantMembers = {};

export type PlasmicButtonSideBarMemberSettings__VariantsArgs = {};
type VariantPropType = keyof PlasmicButtonSideBarMemberSettings__VariantsArgs;
export const PlasmicButtonSideBarMemberSettings__VariantProps =
  new Array<VariantPropType>();

export type PlasmicButtonSideBarMemberSettings__ArgsType = {
  target?: string;
  trigger?: string;
};

type ArgPropType = keyof PlasmicButtonSideBarMemberSettings__ArgsType;
export const PlasmicButtonSideBarMemberSettings__ArgProps =
  new Array<ArgPropType>("target", "trigger");

export type PlasmicButtonSideBarMemberSettings__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"button">;
  elementUsernameDisplay?: p.Flex<"div">;
  elementUserRealNames?: p.Flex<"div">;
  userfirstName?: p.Flex<"div">;
  userLastName?: p.Flex<"div">;
  userDisplaynameParent?: p.Flex<"div">;
  atSign?: p.Flex<"div">;
  userDisplayNameText?: p.Flex<"div">;
  dropDownUserSettingsTrigger?: p.Flex<"svg">;
};

export interface DefaultButtonSideBarMemberSettingsProps {
  target?: string;
  trigger?: string;
  className?: string;
}

function PlasmicButtonSideBarMemberSettings__RenderFunc(props: {
  variants: PlasmicButtonSideBarMemberSettings__VariantsArgs;
  args: PlasmicButtonSideBarMemberSettings__ArgsType;
  overrides: PlasmicButtonSideBarMemberSettings__OverridesType;
  dataFetches?: PlasmicButtonSideBarMemberSettings__Fetches;
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
        as={"button"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.button, sty.parent)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"elementUsernameDisplay"}
          data-plasmic-override={overrides.elementUsernameDisplay}
          hasGap={true}
          className={classNames(defaultcss.all, sty.elementUsernameDisplay)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"elementUserRealNames"}
            data-plasmic-override={overrides.elementUserRealNames}
            hasGap={true}
            className={classNames(defaultcss.all, sty.elementUserRealNames)}
          >
            <div
              data-plasmic-name={"userfirstName"}
              data-plasmic-override={overrides.userfirstName}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.userfirstName
              )}
            >
              {"Annie"}
            </div>

            <div
              data-plasmic-name={"userLastName"}
              data-plasmic-override={overrides.userLastName}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.userLastName
              )}
            >
              {"Beyol Lee"}
            </div>
          </p.Stack>

          <div
            data-plasmic-name={"userDisplaynameParent"}
            data-plasmic-override={overrides.userDisplaynameParent}
            className={classNames(defaultcss.all, sty.userDisplaynameParent)}
          >
            <div
              data-plasmic-name={"atSign"}
              data-plasmic-override={overrides.atSign}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.atSign
              )}
            >
              {"@"}
            </div>

            <div
              data-plasmic-name={"userDisplayNameText"}
              data-plasmic-override={overrides.userDisplayNameText}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.userDisplayNameText
              )}
            >
              {"pixiedesign"}
            </div>
          </div>
        </p.Stack>

        <ChevronDownBIcon
          data-plasmic-name={"dropDownUserSettingsTrigger"}
          data-plasmic-override={overrides.dropDownUserSettingsTrigger}
          className={classNames(
            defaultcss.all,
            sty.dropDownUserSettingsTrigger
          )}
          role={"img"}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "parent",
    "elementUsernameDisplay",
    "elementUserRealNames",
    "userfirstName",
    "userLastName",
    "userDisplaynameParent",
    "atSign",
    "userDisplayNameText",
    "dropDownUserSettingsTrigger"
  ],
  parent: [
    "parent",
    "elementUsernameDisplay",
    "elementUserRealNames",
    "userfirstName",
    "userLastName",
    "userDisplaynameParent",
    "atSign",
    "userDisplayNameText",
    "dropDownUserSettingsTrigger"
  ],
  elementUsernameDisplay: [
    "elementUsernameDisplay",
    "elementUserRealNames",
    "userfirstName",
    "userLastName",
    "userDisplaynameParent",
    "atSign",
    "userDisplayNameText"
  ],
  elementUserRealNames: [
    "elementUserRealNames",
    "userfirstName",
    "userLastName"
  ],
  userfirstName: ["userfirstName"],
  userLastName: ["userLastName"],
  userDisplaynameParent: [
    "userDisplaynameParent",
    "atSign",
    "userDisplayNameText"
  ],
  atSign: ["atSign"],
  userDisplayNameText: ["userDisplayNameText"],
  dropDownUserSettingsTrigger: ["dropDownUserSettingsTrigger"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parent: "button";
  elementUsernameDisplay: "div";
  elementUserRealNames: "div";
  userfirstName: "div";
  userLastName: "div";
  userDisplaynameParent: "div";
  atSign: "div";
  userDisplayNameText: "div";
  dropDownUserSettingsTrigger: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonSideBarMemberSettings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonSideBarMemberSettings__VariantsArgs;
    args?: PlasmicButtonSideBarMemberSettings__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButtonSideBarMemberSettings__Fetches;
  } & Omit< // Specify variants directly as props
    PlasmicButtonSideBarMemberSettings__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicButtonSideBarMemberSettings__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButtonSideBarMemberSettings__ArgProps,
      internalVariantPropNames: PlasmicButtonSideBarMemberSettings__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButtonSideBarMemberSettings__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonSideBarMemberSettings";
  } else {
    func.displayName = `PlasmicButtonSideBarMemberSettings.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonSideBarMemberSettings = Object.assign(
  // Top-level PlasmicButtonSideBarMemberSettings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    elementUsernameDisplay: makeNodeComponent("elementUsernameDisplay"),
    elementUserRealNames: makeNodeComponent("elementUserRealNames"),
    userfirstName: makeNodeComponent("userfirstName"),
    userLastName: makeNodeComponent("userLastName"),
    userDisplaynameParent: makeNodeComponent("userDisplaynameParent"),
    atSign: makeNodeComponent("atSign"),
    userDisplayNameText: makeNodeComponent("userDisplayNameText"),
    dropDownUserSettingsTrigger: makeNodeComponent(
      "dropDownUserSettingsTrigger"
    ),

    // Metadata about props expected for PlasmicButtonSideBarMemberSettings
    internalVariantProps: PlasmicButtonSideBarMemberSettings__VariantProps,
    internalArgProps: PlasmicButtonSideBarMemberSettings__ArgProps
  }
);

export default PlasmicButtonSideBarMemberSettings;
/* prettier-ignore-end */
