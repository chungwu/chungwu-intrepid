// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: DCl2W07Xq4XIoa
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
import NavbarInternal from "../../NavbarInternal"; // plasmic-import: nBfIHHqHvjUywN9/component
import NavbarMemberEdit from "../../NavbarMemberEdit"; // plasmic-import: MpfEfF3PxMa-4U/component
import CardHeaderTitleDisplay from "../../CardHeaderTitleDisplay"; // plasmic-import: fk5BRaqICb6MOmt/component
import CardHeaderTitlePrimary from "../../CardHeaderTitlePrimary"; // plasmic-import: qjG0g-Rmz0BeDH/component
import TagMemberD from "../../TagMemberD"; // plasmic-import: EwwHW0Pp6J--_CI/component
import ButtonLinkPrimary from "../../ButtonLinkPrimary"; // plasmic-import: tSiOWgKlHR05p7/component
import TableBillingHeader from "../../TableBillingHeader"; // plasmic-import: 9znIFjqlEGKbk_/component
import TableBillingRecord from "../../TableBillingRecord"; // plasmic-import: jLNe8Bxz-b4Dne/component
import ButtonPrimary from "../../ButtonPrimary"; // plasmic-import: gpNjXfbD_ZdpPU/component
import TableMembershipHeader from "../../TableMembershipHeader"; // plasmic-import: exg-dAFeoypgim/component
import TableMembershipRecord from "../../TableMembershipRecord"; // plasmic-import: M9pZbM3vz-2Ew6/component
import FooterB from "../../FooterB"; // plasmic-import: IZENTiSL4_zyK8/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicEditmembermembership.module.css"; // plasmic-import: DCl2W07Xq4XIoa/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicEditmembermembership__VariantMembers = {};

export type PlasmicEditmembermembership__VariantsArgs = {};
type VariantPropType = keyof PlasmicEditmembermembership__VariantsArgs;
export const PlasmicEditmembermembership__VariantProps =
  new Array<VariantPropType>();

export type PlasmicEditmembermembership__ArgsType = {};
type ArgPropType = keyof PlasmicEditmembermembership__ArgsType;
export const PlasmicEditmembermembership__ArgProps = new Array<ArgPropType>();

export type PlasmicEditmembermembership__OverridesType = {
  root?: p.Flex<"div">;
  navbarInternal?: p.Flex<typeof NavbarInternal>;
  navbarMemberEdit?: p.Flex<typeof NavbarMemberEdit>;
  sectionMemberMembershipStatus?: p.Flex<"section">;
  cardHeaderTitleDisplay?: p.Flex<typeof CardHeaderTitleDisplay>;
  tagMemberD?: p.Flex<typeof TagMemberD>;
  sectionMemberPaymentMethods?: p.Flex<"section">;
  tableBillingHeader?: p.Flex<typeof TableBillingHeader>;
  tableBillingRecord?: p.Flex<typeof TableBillingRecord>;
  sectionMemberPaymentHistory?: p.Flex<"section">;
  tableMembershipHeader?: p.Flex<typeof TableMembershipHeader>;
  tableMembershipRecord?: p.Flex<typeof TableMembershipRecord>;
  footerB?: p.Flex<typeof FooterB>;
};

export interface DefaultEditmembermembershipProps {
  dataFetches: PlasmicEditmembermembership__Fetches;
}

function PlasmicEditmembermembership__RenderFunc(props: {
  variants: PlasmicEditmembermembership__VariantsArgs;
  args: PlasmicEditmembermembership__ArgsType;
  overrides: PlasmicEditmembermembership__OverridesType;
  dataFetches?: PlasmicEditmembermembership__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <NavbarInternal
            data-plasmic-name={"navbarInternal"}
            data-plasmic-override={overrides.navbarInternal}
            className={classNames("__wab_instance", sty.navbarInternal)}
          />

          <NavbarMemberEdit
            data-plasmic-name={"navbarMemberEdit"}
            data-plasmic-override={overrides.navbarMemberEdit}
            className={classNames("__wab_instance", sty.navbarMemberEdit)}
            navItems={[
              "notifications",
              "messages",
              "reviews",
              "lists",
              "wallet"
            ]}
            selected={"membership" as const}
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionMemberMembershipStatus"}
            data-plasmic-override={overrides.sectionMemberMembershipStatus}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionMemberMembershipStatus
            )}
          >
            <CardHeaderTitleDisplay
              data-plasmic-name={"cardHeaderTitleDisplay"}
              data-plasmic-override={overrides.cardHeaderTitleDisplay}
              className={classNames(
                "__wab_instance",
                sty.cardHeaderTitleDisplay
              )}
              size={"_720" as const}
              slot={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__qbAwi
                  )}
                >
                  {"Plan & perks"}
                </div>
              }
              textDisplay={"Membership"}
              textSubhead={"Maintain a safe and secure community experience  "}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__zbpd6)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary___8OYiN
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__lz4W0
                    )}
                  >
                    {"Your personal account membership plan details"}
                  </div>
                }
              >
                {"Membership"}
              </CardHeaderTitlePrimary>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__ayUm8)}
              >
                <div
                  className={classNames(defaultcss.all, sty.freeBox___3CItx)}
                >
                  <TagMemberD
                    data-plasmic-name={"tagMemberD"}
                    data-plasmic-override={overrides.tagMemberD}
                    className={classNames("__wab_instance", sty.tagMemberD)}
                  />
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox___2U9JT
                  )}
                >
                  {
                    "Our Creator and Maker member accounts are free forever. To get the most from the Intrepid community, for professional purposes, or to work with a team, get started by creating a company or contacting sales."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__voZhr)}
              >
                <ButtonLinkPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLinkPrimary__tJuD
                  )}
                  height={"_36" as const}
                  text={"Create a team"}
                  type={"fill" as const}
                  width={"_140" as const}
                />

                <ButtonLinkPrimary
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLinkPrimary__kqPgv
                  )}
                  height={"_36" as const}
                  text={"Upgrade account"}
                  type={"outline" as const}
                  width={"_140" as const}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionMemberPaymentMethods"}
            data-plasmic-override={overrides.sectionMemberPaymentMethods}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionMemberPaymentMethods
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__yZzAr)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__efScc
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox___94Lvc
                    )}
                  >
                    {
                      "Add up to three credit cards, debit cards or prepaid cards (MAX) to your account."
                    }
                  </div>
                }
              >
                {"Payment methods"}
              </CardHeaderTitlePrimary>

              <div className={classNames(defaultcss.all, sty.freeBox__aFnOe)}>
                <TableBillingHeader
                  data-plasmic-name={"tableBillingHeader"}
                  data-plasmic-override={overrides.tableBillingHeader}
                  className={classNames(
                    "__wab_instance",
                    sty.tableBillingHeader
                  )}
                />

                <TableBillingRecord
                  data-plasmic-name={"tableBillingRecord"}
                  data-plasmic-override={overrides.tableBillingRecord}
                  className={classNames(
                    "__wab_instance",
                    sty.tableBillingRecord
                  )}
                />
              </div>

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__sYcBt
                )}
                size={"_140" as const}
              >
                {"Add new card"}
              </ButtonPrimary>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"section"}
            data-plasmic-name={"sectionMemberPaymentHistory"}
            data-plasmic-override={overrides.sectionMemberPaymentHistory}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              sty.sectionMemberPaymentHistory
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__ojJxG)}
            >
              <CardHeaderTitlePrimary
                className={classNames(
                  "__wab_instance",
                  sty.cardHeaderTitlePrimary__jdJL
                )}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox___2ZvKi
                    )}
                  >
                    {
                      "Add up to three credit cards, debit cards or prepaid cards (MAX) to your account."
                    }
                  </div>
                }
              >
                {"Payment history"}
              </CardHeaderTitlePrimary>

              <div className={classNames(defaultcss.all, sty.freeBox__gyd0M)}>
                <TableMembershipHeader
                  data-plasmic-name={"tableMembershipHeader"}
                  data-plasmic-override={overrides.tableMembershipHeader}
                  className={classNames(
                    "__wab_instance",
                    sty.tableMembershipHeader
                  )}
                />

                <TableMembershipRecord
                  data-plasmic-name={"tableMembershipRecord"}
                  data-plasmic-override={overrides.tableMembershipRecord}
                  className={classNames(
                    "__wab_instance",
                    sty.tableMembershipRecord
                  )}
                />
              </div>

              <ButtonPrimary
                className={classNames(
                  "__wab_instance",
                  sty.buttonPrimary__muetF
                )}
                size={"_140" as const}
              >
                {"Upgrade"}
              </ButtonPrimary>
            </p.Stack>
          </p.Stack>

          <FooterB
            data-plasmic-name={"footerB"}
            data-plasmic-override={overrides.footerB}
            className={classNames("__wab_instance", sty.footerB)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarInternal",
    "navbarMemberEdit",
    "sectionMemberMembershipStatus",
    "cardHeaderTitleDisplay",
    "tagMemberD",
    "sectionMemberPaymentMethods",
    "tableBillingHeader",
    "tableBillingRecord",
    "sectionMemberPaymentHistory",
    "tableMembershipHeader",
    "tableMembershipRecord",
    "footerB"
  ],
  navbarInternal: ["navbarInternal"],
  navbarMemberEdit: ["navbarMemberEdit"],
  sectionMemberMembershipStatus: [
    "sectionMemberMembershipStatus",
    "cardHeaderTitleDisplay",
    "tagMemberD"
  ],
  cardHeaderTitleDisplay: ["cardHeaderTitleDisplay"],
  tagMemberD: ["tagMemberD"],
  sectionMemberPaymentMethods: [
    "sectionMemberPaymentMethods",
    "tableBillingHeader",
    "tableBillingRecord"
  ],
  tableBillingHeader: ["tableBillingHeader"],
  tableBillingRecord: ["tableBillingRecord"],
  sectionMemberPaymentHistory: [
    "sectionMemberPaymentHistory",
    "tableMembershipHeader",
    "tableMembershipRecord"
  ],
  tableMembershipHeader: ["tableMembershipHeader"],
  tableMembershipRecord: ["tableMembershipRecord"],
  footerB: ["footerB"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbarInternal: typeof NavbarInternal;
  navbarMemberEdit: typeof NavbarMemberEdit;
  sectionMemberMembershipStatus: "section";
  cardHeaderTitleDisplay: typeof CardHeaderTitleDisplay;
  tagMemberD: typeof TagMemberD;
  sectionMemberPaymentMethods: "section";
  tableBillingHeader: typeof TableBillingHeader;
  tableBillingRecord: typeof TableBillingRecord;
  sectionMemberPaymentHistory: "section";
  tableMembershipHeader: typeof TableMembershipHeader;
  tableMembershipRecord: typeof TableMembershipRecord;
  footerB: typeof FooterB;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEditmembermembership__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEditmembermembership__VariantsArgs;
    args?: PlasmicEditmembermembership__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicEditmembermembership__Fetches;
  } & Omit<PlasmicEditmembermembership__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEditmembermembership__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicEditmembermembership__ArgProps,
      internalVariantPropNames: PlasmicEditmembermembership__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicEditmembermembership__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditmembermembership";
  } else {
    func.displayName = `PlasmicEditmembermembership.${nodeName}`;
  }
  return func;
}

export const PlasmicEditmembermembership = Object.assign(
  // Top-level PlasmicEditmembermembership renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarInternal: makeNodeComponent("navbarInternal"),
    navbarMemberEdit: makeNodeComponent("navbarMemberEdit"),
    sectionMemberMembershipStatus: makeNodeComponent(
      "sectionMemberMembershipStatus"
    ),
    cardHeaderTitleDisplay: makeNodeComponent("cardHeaderTitleDisplay"),
    tagMemberD: makeNodeComponent("tagMemberD"),
    sectionMemberPaymentMethods: makeNodeComponent(
      "sectionMemberPaymentMethods"
    ),
    tableBillingHeader: makeNodeComponent("tableBillingHeader"),
    tableBillingRecord: makeNodeComponent("tableBillingRecord"),
    sectionMemberPaymentHistory: makeNodeComponent(
      "sectionMemberPaymentHistory"
    ),
    tableMembershipHeader: makeNodeComponent("tableMembershipHeader"),
    tableMembershipRecord: makeNodeComponent("tableMembershipRecord"),
    footerB: makeNodeComponent("footerB"),

    // Metadata about props expected for PlasmicEditmembermembership
    internalVariantProps: PlasmicEditmembermembership__VariantProps,
    internalArgProps: PlasmicEditmembermembership__ArgProps
  }
);

export default PlasmicEditmembermembership;
/* prettier-ignore-end */
