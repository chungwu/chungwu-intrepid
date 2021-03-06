// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: ErmvbbexDfIb5I
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
import ChipBadgeDisplay from "../../ChipBadgeDisplay"; // plasmic-import: SSFk1BeJq0HW6X/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicElementProfileAttributes.module.css"; // plasmic-import: ErmvbbexDfIb5I/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon
import Icon114Icon from "./icons/PlasmicIcon__Icon114"; // plasmic-import: VfXaOZlZvq_xDZf/icon
import Icon170Icon from "./icons/PlasmicIcon__Icon170"; // plasmic-import: 8dZnFQrWLcwMPnF/icon

export type PlasmicElementProfileAttributes__VariantMembers = {};

export type PlasmicElementProfileAttributes__VariantsArgs = {};
type VariantPropType = keyof PlasmicElementProfileAttributes__VariantsArgs;
export const PlasmicElementProfileAttributes__VariantProps =
  new Array<VariantPropType>();

export type PlasmicElementProfileAttributes__ArgsType = {};
type ArgPropType = keyof PlasmicElementProfileAttributes__ArgsType;
export const PlasmicElementProfileAttributes__ArgProps =
  new Array<ArgPropType>();

export type PlasmicElementProfileAttributes__OverridesType = {
  root?: p.Flex<"div">;
  profileIndustryParent?: p.Flex<"div">;
  industry?: p.Flex<"div">;
  textParent6?: p.Flex<"div">;
  profileCategoriesParent?: p.Flex<"div">;
  categories?: p.Flex<"div">;
  categoryBadgeParent?: p.Flex<"div">;
  profileSkillsParent?: p.Flex<"div">;
  skillsTextparent?: p.Flex<"div">;
  skills?: p.Flex<"div">;
  skillsBadgeParent?: p.Flex<"div">;
};

export interface DefaultElementProfileAttributesProps {
  className?: string;
}

function PlasmicElementProfileAttributes__RenderFunc(props: {
  variants: PlasmicElementProfileAttributes__VariantsArgs;
  args: PlasmicElementProfileAttributes__ArgsType;
  overrides: PlasmicElementProfileAttributes__OverridesType;
  dataFetches?: PlasmicElementProfileAttributes__Fetches;
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"profileIndustryParent"}
        data-plasmic-override={overrides.profileIndustryParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.profileIndustryParent)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__mqHiM)}>
          <div
            data-plasmic-name={"industry"}
            data-plasmic-override={overrides.industry}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.industry
            )}
          >
            {"Industry"}
          </div>
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"textParent6"}
          data-plasmic-override={overrides.textParent6}
          hasGap={true}
          className={classNames(defaultcss.all, sty.textParent6)}
        >
          <ChipBadgeDisplay
            className={classNames(
              "__wab_instance",
              sty.chipBadgeDisplay__kYrBu
            )}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Fashion"}
          </ChipBadgeDisplay>

          <ChipBadgeDisplay
            className={classNames(
              "__wab_instance",
              sty.chipBadgeDisplay__baxtU
            )}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Travel"}
          </ChipBadgeDisplay>
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"profileCategoriesParent"}
        data-plasmic-override={overrides.profileCategoriesParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.profileCategoriesParent)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox___5RoxA)}>
          <div
            data-plasmic-name={"categories"}
            data-plasmic-override={overrides.categories}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.categories
            )}
          >
            {"Categories"}
          </div>
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"categoryBadgeParent"}
          data-plasmic-override={overrides.categoryBadgeParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.categoryBadgeParent)}
        >
          <ChipBadgeDisplay
            className={classNames("__wab_instance", sty.chipBadgeDisplay__i4Gu)}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Design"}
          </ChipBadgeDisplay>

          <ChipBadgeDisplay
            className={classNames("__wab_instance", sty.chipBadgeDisplay__rHOy)}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Web development"}
          </ChipBadgeDisplay>

          <ChipBadgeDisplay
            className={classNames(
              "__wab_instance",
              sty.chipBadgeDisplay__w4DpN
            )}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Product"}
          </ChipBadgeDisplay>
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"profileSkillsParent"}
        data-plasmic-override={overrides.profileSkillsParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.profileSkillsParent)}
      >
        <div
          data-plasmic-name={"skillsTextparent"}
          data-plasmic-override={overrides.skillsTextparent}
          className={classNames(defaultcss.all, sty.skillsTextparent)}
        >
          <div
            data-plasmic-name={"skills"}
            data-plasmic-override={overrides.skills}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.skills
            )}
          >
            {"Skills"}
          </div>
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"skillsBadgeParent"}
          data-plasmic-override={overrides.skillsBadgeParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.skillsBadgeParent)}
        >
          <ChipBadgeDisplay
            className={classNames(
              "__wab_instance",
              sty.chipBadgeDisplay___1EJjX
            )}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"React"}
          </ChipBadgeDisplay>

          <ChipBadgeDisplay
            className={classNames(
              "__wab_instance",
              sty.chipBadgeDisplay___83Ek3
            )}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Databases"}
          </ChipBadgeDisplay>

          <ChipBadgeDisplay
            className={classNames("__wab_instance", sty.chipBadgeDisplay__d6Oe)}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Node"}
          </ChipBadgeDisplay>

          <ChipBadgeDisplay
            className={classNames(
              "__wab_instance",
              sty.chipBadgeDisplay__jobEc
            )}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Javascript"}
          </ChipBadgeDisplay>

          <ChipBadgeDisplay
            className={classNames(
              "__wab_instance",
              sty.chipBadgeDisplay__ubKce
            )}
            color={"brand" as const}
            type={"ghost" as const}
          >
            {"Figma"}
          </ChipBadgeDisplay>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "profileIndustryParent",
    "industry",
    "textParent6",
    "profileCategoriesParent",
    "categories",
    "categoryBadgeParent",
    "profileSkillsParent",
    "skillsTextparent",
    "skills",
    "skillsBadgeParent"
  ],
  profileIndustryParent: ["profileIndustryParent", "industry", "textParent6"],
  industry: ["industry"],
  textParent6: ["textParent6"],
  profileCategoriesParent: [
    "profileCategoriesParent",
    "categories",
    "categoryBadgeParent"
  ],
  categories: ["categories"],
  categoryBadgeParent: ["categoryBadgeParent"],
  profileSkillsParent: [
    "profileSkillsParent",
    "skillsTextparent",
    "skills",
    "skillsBadgeParent"
  ],
  skillsTextparent: ["skillsTextparent", "skills"],
  skills: ["skills"],
  skillsBadgeParent: ["skillsBadgeParent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  profileIndustryParent: "div";
  industry: "div";
  textParent6: "div";
  profileCategoriesParent: "div";
  categories: "div";
  categoryBadgeParent: "div";
  profileSkillsParent: "div";
  skillsTextparent: "div";
  skills: "div";
  skillsBadgeParent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicElementProfileAttributes__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicElementProfileAttributes__VariantsArgs;
    args?: PlasmicElementProfileAttributes__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicElementProfileAttributes__Fetches;
  } & Omit<PlasmicElementProfileAttributes__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicElementProfileAttributes__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicElementProfileAttributes__ArgProps,
      internalVariantPropNames: PlasmicElementProfileAttributes__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicElementProfileAttributes__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElementProfileAttributes";
  } else {
    func.displayName = `PlasmicElementProfileAttributes.${nodeName}`;
  }
  return func;
}

export const PlasmicElementProfileAttributes = Object.assign(
  // Top-level PlasmicElementProfileAttributes renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    profileIndustryParent: makeNodeComponent("profileIndustryParent"),
    industry: makeNodeComponent("industry"),
    textParent6: makeNodeComponent("textParent6"),
    profileCategoriesParent: makeNodeComponent("profileCategoriesParent"),
    categories: makeNodeComponent("categories"),
    categoryBadgeParent: makeNodeComponent("categoryBadgeParent"),
    profileSkillsParent: makeNodeComponent("profileSkillsParent"),
    skillsTextparent: makeNodeComponent("skillsTextparent"),
    skills: makeNodeComponent("skills"),
    skillsBadgeParent: makeNodeComponent("skillsBadgeParent"),

    // Metadata about props expected for PlasmicElementProfileAttributes
    internalVariantProps: PlasmicElementProfileAttributes__VariantProps,
    internalArgProps: PlasmicElementProfileAttributes__ArgProps
  }
);

export default PlasmicElementProfileAttributes;
/* prettier-ignore-end */
