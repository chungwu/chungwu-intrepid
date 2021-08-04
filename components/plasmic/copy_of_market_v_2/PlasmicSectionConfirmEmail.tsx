// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: 4btYmdSOGUSSAy
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
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: gpNjXfbD_ZdpPU/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: tSiOWgKlHR05p7/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicSectionConfirmEmail.module.css"; // plasmic-import: 4btYmdSOGUSSAy/css

import Icon43Icon from "./icons/PlasmicIcon__Icon43"; // plasmic-import: uYZcHonxcU9iEGk/icon
import SectionDividerIcon from "./icons/PlasmicIcon__SectionDivider"; // plasmic-import: Q0kQ1Q6uwg9YSBx/icon
import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicSectionConfirmEmail__VariantMembers = {};

export type PlasmicSectionConfirmEmail__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionConfirmEmail__VariantsArgs;
export const PlasmicSectionConfirmEmail__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionConfirmEmail__ArgsType = {
  textSlot?: React.ReactNode;
  buttonHeadlineTextSlot?: React.ReactNode;
  textSlotB?: React.ReactNode;
  textSlotC?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSectionConfirmEmail__ArgsType;
export const PlasmicSectionConfirmEmail__ArgProps = new Array<ArgPropType>(
  "textSlot",
  "buttonHeadlineTextSlot",
  "textSlotB",
  "textSlotC"
);

export type PlasmicSectionConfirmEmail__OverridesType = {
  parent?: p.Flex<"div">;
  formEmailConfirmation?: p.Flex<"div">;
  svgLinkDiv?: p.Flex<"a"> & Partial<LinkProps>;
  textHeadline?: p.Flex<"div">;
  headlineTitle?: p.Flex<"div">;
  textDivParent?: p.Flex<"div">;
  textDivA?: p.Flex<"div">;
  textDivB?: p.Flex<"div">;
  textDivC?: p.Flex<"div">;
  buttonResendHeadlineParent?: p.Flex<"div">;
  buttonHeadline?: p.Flex<"div">;
  confirmationResend?: p.Flex<typeof ButtonPrimary>;
  buttonGoBackParent?: p.Flex<"div">;
  buttonLinkPrimary?: p.Flex<typeof ButtonLinkPrimary>;
};

export interface DefaultSectionConfirmEmailProps {
  textSlot?: React.ReactNode;
  buttonHeadlineTextSlot?: React.ReactNode;
  textSlotB?: React.ReactNode;
  textSlotC?: React.ReactNode;
  className?: string;
}

function PlasmicSectionConfirmEmail__RenderFunc(props: {
  variants: PlasmicSectionConfirmEmail__VariantsArgs;
  args: PlasmicSectionConfirmEmail__ArgsType;
  overrides: PlasmicSectionConfirmEmail__OverridesType;
  dataFetches?: PlasmicSectionConfirmEmail__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"parent"}
      data-plasmic-override={overrides.parent}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.parent)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"formEmailConfirmation"}
        data-plasmic-override={overrides.formEmailConfirmation}
        hasGap={true}
        className={classNames(defaultcss.all, sty.formEmailConfirmation)}
      >
        <p.PlasmicLink
          data-plasmic-name={"svgLinkDiv"}
          data-plasmic-override={overrides.svgLinkDiv}
          className={classNames(defaultcss.all, sty.svgLinkDiv)}
          component={Link}
          href={"/sign-up" as const}
          platform={"nextjs"}
        >
          <Icon43Icon
            className={classNames(defaultcss.all, sty.svg__btDEp)}
            role={"img"}
          />
        </p.PlasmicLink>

        {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
          <div
            data-plasmic-name={"textHeadline"}
            data-plasmic-override={overrides.textHeadline}
            className={classNames(defaultcss.all, sty.textHeadline)}
          >
            <div
              data-plasmic-name={"headlineTitle"}
              data-plasmic-override={overrides.headlineTitle}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.headlineTitle
              )}
            >
              {"Confirmation"}
            </div>
          </div>
        ) : null}

        <p.Stack
          as={"div"}
          data-plasmic-name={"textDivParent"}
          data-plasmic-override={overrides.textDivParent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.textDivParent)}
        >
          <div className={classNames(defaultcss.all, sty.freeBox___8Kk1L)}>
            <div
              data-plasmic-name={"textDivA"}
              data-plasmic-override={overrides.textDivA}
              className={classNames(defaultcss.all, sty.textDivA)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "We’re super excited you signed up!",
                value: args.textSlot,
                className: classNames(sty.slotTextSlot)
              })}
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox___8QdwS)}>
            <div
              data-plasmic-name={"textDivB"}
              data-plasmic-override={overrides.textDivB}
              className={classNames(defaultcss.all, sty.textDivB)}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "We’ve sent a message to your email address with a link to activate your account.",
                value: args.textSlotB,
                className: classNames(sty.slotTextSlotB)
              })}
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__c4V5N)}>
            <div
              data-plasmic-name={"textDivC"}
              data-plasmic-override={overrides.textDivC}
              className={classNames(defaultcss.all, sty.textDivC)}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "To complete the sign-up process, please follow the instructions",
                value: args.textSlotC,
                className: classNames(sty.slotTextSlotC)
              })}
            </div>
          </div>
        </p.Stack>

        <SectionDividerIcon
          className={classNames(defaultcss.all, sty.svg__ahPcT)}
          role={"img"}
        />

        {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"buttonResendHeadlineParent"}
            data-plasmic-override={overrides.buttonResendHeadlineParent}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.buttonResendHeadlineParent
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"buttonHeadline"}
              data-plasmic-override={overrides.buttonHeadline}
              hasGap={true}
              className={classNames(defaultcss.all, sty.buttonHeadline)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Didn't receive the email?",
                value: args.buttonHeadlineTextSlot,
                className: classNames(sty.slotButtonHeadlineTextSlot)
              })}
            </p.Stack>

            {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
              <ButtonPrimary
                data-plasmic-name={"confirmationResend"}
                data-plasmic-override={overrides.confirmationResend}
                className={classNames("__wab_instance", sty.confirmationResend)}
                size={
                  hasVariant(globalVariants, "screen", "desktop")
                    ? ("_360" as const)
                    : ("_360" as const)
                }
                type={
                  hasVariant(globalVariants, "screen", "desktop")
                    ? ("primary" as const)
                    : ("primary" as const)
                }
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__nBnCn
                  )}
                >
                  {hasVariant(globalVariants, "screen", "desktop")
                    ? "Re-send confirmation email"
                    : "Re-send confirmation email"}
                </div>
              </ButtonPrimary>
            ) : null}
          </p.Stack>
        ) : null}
        {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
          <div
            data-plasmic-name={"buttonGoBackParent"}
            data-plasmic-override={overrides.buttonGoBackParent}
            className={classNames(defaultcss.all, sty.buttonGoBackParent)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : hasVariant(globalVariants, "screen", "desktop")
                ? true
                : false
            ) ? (
              <ButtonLinkPrimary
                data-plasmic-name={"buttonLinkPrimary"}
                data-plasmic-override={overrides.buttonLinkPrimary}
                className={classNames("__wab_instance", sty.buttonLinkPrimary)}
                color={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? ("light" as const)
                    : hasVariant(globalVariants, "screen", "desktop")
                    ? ("light" as const)
                    : undefined
                }
                destination={
                  hasVariant(globalVariants, "screen", "desktop")
                    ? ("/log-in" as const)
                    : undefined
                }
                height={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? ("_48" as const)
                    : hasVariant(globalVariants, "screen", "desktop")
                    ? ("_48" as const)
                    : undefined
                }
                text={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__etj8C
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Go back"
                      : hasVariant(globalVariants, "screen", "desktop")
                      ? "Go back"
                      : "Hyper Link"}
                  </div>
                }
                type={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? ("outline" as const)
                    : hasVariant(globalVariants, "screen", "desktop")
                    ? ("outline" as const)
                    : undefined
                }
                width={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? ("_360" as const)
                    : hasVariant(globalVariants, "screen", "desktop")
                    ? ("_360" as const)
                    : undefined
                }
              />
            ) : null}
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  parent: [
    "parent",
    "formEmailConfirmation",
    "svgLinkDiv",
    "textHeadline",
    "headlineTitle",
    "textDivParent",
    "textDivA",
    "textDivB",
    "textDivC",
    "buttonResendHeadlineParent",
    "buttonHeadline",
    "confirmationResend",
    "buttonGoBackParent",
    "buttonLinkPrimary"
  ],
  formEmailConfirmation: [
    "formEmailConfirmation",
    "svgLinkDiv",
    "textHeadline",
    "headlineTitle",
    "textDivParent",
    "textDivA",
    "textDivB",
    "textDivC",
    "buttonResendHeadlineParent",
    "buttonHeadline",
    "confirmationResend",
    "buttonGoBackParent",
    "buttonLinkPrimary"
  ],
  svgLinkDiv: ["svgLinkDiv"],
  textHeadline: ["textHeadline", "headlineTitle"],
  headlineTitle: ["headlineTitle"],
  textDivParent: ["textDivParent", "textDivA", "textDivB", "textDivC"],
  textDivA: ["textDivA"],
  textDivB: ["textDivB"],
  textDivC: ["textDivC"],
  buttonResendHeadlineParent: [
    "buttonResendHeadlineParent",
    "buttonHeadline",
    "confirmationResend"
  ],
  buttonHeadline: ["buttonHeadline"],
  confirmationResend: ["confirmationResend"],
  buttonGoBackParent: ["buttonGoBackParent", "buttonLinkPrimary"],
  buttonLinkPrimary: ["buttonLinkPrimary"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  parent: "div";
  formEmailConfirmation: "div";
  svgLinkDiv: "a";
  textHeadline: "div";
  headlineTitle: "div";
  textDivParent: "div";
  textDivA: "div";
  textDivB: "div";
  textDivC: "div";
  buttonResendHeadlineParent: "div";
  buttonHeadline: "div";
  confirmationResend: typeof ButtonPrimary;
  buttonGoBackParent: "div";
  buttonLinkPrimary: typeof ButtonLinkPrimary;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionConfirmEmail__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionConfirmEmail__VariantsArgs;
    args?: PlasmicSectionConfirmEmail__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSectionConfirmEmail__Fetches;
  } & Omit<PlasmicSectionConfirmEmail__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionConfirmEmail__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSectionConfirmEmail__ArgProps,
      internalVariantPropNames: PlasmicSectionConfirmEmail__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSectionConfirmEmail__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "parent") {
    func.displayName = "PlasmicSectionConfirmEmail";
  } else {
    func.displayName = `PlasmicSectionConfirmEmail.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionConfirmEmail = Object.assign(
  // Top-level PlasmicSectionConfirmEmail renders the root element
  makeNodeComponent("parent"),
  {
    // Helper components rendering sub-elements
    formEmailConfirmation: makeNodeComponent("formEmailConfirmation"),
    svgLinkDiv: makeNodeComponent("svgLinkDiv"),
    textHeadline: makeNodeComponent("textHeadline"),
    headlineTitle: makeNodeComponent("headlineTitle"),
    textDivParent: makeNodeComponent("textDivParent"),
    textDivA: makeNodeComponent("textDivA"),
    textDivB: makeNodeComponent("textDivB"),
    textDivC: makeNodeComponent("textDivC"),
    buttonResendHeadlineParent: makeNodeComponent("buttonResendHeadlineParent"),
    buttonHeadline: makeNodeComponent("buttonHeadline"),
    confirmationResend: makeNodeComponent("confirmationResend"),
    buttonGoBackParent: makeNodeComponent("buttonGoBackParent"),
    buttonLinkPrimary: makeNodeComponent("buttonLinkPrimary"),

    // Metadata about props expected for PlasmicSectionConfirmEmail
    internalVariantProps: PlasmicSectionConfirmEmail__VariantProps,
    internalArgProps: PlasmicSectionConfirmEmail__ArgProps
  }
);

export default PlasmicSectionConfirmEmail;
/* prettier-ignore-end */
