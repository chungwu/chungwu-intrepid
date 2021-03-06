// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: j_kbk8dpeXLw5m
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

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicHeroTextDisplay.module.css"; // plasmic-import: j_kbk8dpeXLw5m/css

export type PlasmicHeroTextDisplay__VariantMembers = {
  size: "_360" | "_720" | "_270";
};

export type PlasmicHeroTextDisplay__VariantsArgs = {
  size?: SingleChoiceArg<"_360" | "_720" | "_270">;
};

type VariantPropType = keyof PlasmicHeroTextDisplay__VariantsArgs;
export const PlasmicHeroTextDisplay__VariantProps = new Array<VariantPropType>(
  "size"
);

export type PlasmicHeroTextDisplay__ArgsType = {};
type ArgPropType = keyof PlasmicHeroTextDisplay__ArgsType;
export const PlasmicHeroTextDisplay__ArgProps = new Array<ArgPropType>();

export type PlasmicHeroTextDisplay__OverridesType = {
  root?: p.Flex<"div">;
  textBody2?: p.Flex<"div">;
  textBody720?: p.Flex<"div">;
};

export interface DefaultHeroTextDisplayProps {
  size?: SingleChoiceArg<"_360" | "_720" | "_270">;
  className?: string;
}

function PlasmicHeroTextDisplay__RenderFunc(props: {
  variants: PlasmicHeroTextDisplay__VariantsArgs;
  args: PlasmicHeroTextDisplay__ArgsType;
  overrides: PlasmicHeroTextDisplay__OverridesType;
  dataFetches?: PlasmicHeroTextDisplay__Fetches;
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
        [sty.root__size__360]: hasVariant(variants, "size", "_360"),
        [sty.root__size__720]: hasVariant(variants, "size", "_720")
      })}
    >
      {(hasVariant(variants, "size", "_720") ? false : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"textBody2"}
          data-plasmic-override={overrides.textBody2}
          hasGap={true}
          className={classNames(defaultcss.all, sty.textBody2, {
            [sty.textBody2__size__270]: hasVariant(variants, "size", "_270"),
            [sty.textBody2__size__360]: hasVariant(variants, "size", "_360"),
            [sty.textBody2__size__720]: hasVariant(variants, "size", "_720")
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__lLnLb,
              {
                [sty.freeBox__size__270__lLnLbLsiPv]: hasVariant(
                  variants,
                  "size",
                  "_270"
                ),
                [sty.freeBox__size__360__lLnLb62Vc]: hasVariant(
                  variants,
                  "size",
                  "_360"
                ),
                [sty.freeBox__size__720__lLnLbyqoH]: hasVariant(
                  variants,
                  "size",
                  "_720"
                )
              }
            )}
          >
            <span>
              <React.Fragment>{"Our "}</React.Fragment>
              <span style={{ fontWeight: 700 }}>{"future"}</span>
              <React.Fragment> </React.Fragment>
            </span>
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__ppZe,
              {
                [sty.freeBox__size__270__ppZeLsiPv]: hasVariant(
                  variants,
                  "size",
                  "_270"
                ),
                [sty.freeBox__size__360__ppZe62Vc]: hasVariant(
                  variants,
                  "size",
                  "_360"
                )
              }
            )}
          >
            {"prosperity"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__ks5A3,
              {
                [sty.freeBox__size__270__ks5A3LsiPv]: hasVariant(
                  variants,
                  "size",
                  "_270"
                ),
                [sty.freeBox__size__360__ks5A362Vc]: hasVariant(
                  variants,
                  "size",
                  "_360"
                )
              }
            )}
          >
            {"depends on the"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__q1EXt,
              {
                [sty.freeBox__size__270__q1EXtlsiPv]: hasVariant(
                  variants,
                  "size",
                  "_270"
                ),
                [sty.freeBox__size__360__q1EXt62Vc]: hasVariant(
                  variants,
                  "size",
                  "_360"
                )
              }
            )}
          >
            <span>
              <span style={{ fontWeight: 700 }}>{"quality"}</span>
              <React.Fragment>{" of our"}</React.Fragment>
            </span>
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox___8BlNo,
              {
                [sty.freeBox__size__270___8BlNoLsiPv]: hasVariant(
                  variants,
                  "size",
                  "_270"
                ),
                [sty.freeBox__size__360___8BlNo62Vc]: hasVariant(
                  variants,
                  "size",
                  "_360"
                )
              }
            )}
          >
            {"collective "}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__a0MK1,
              {
                [sty.freeBox__size__270__a0MK1LsiPv]: hasVariant(
                  variants,
                  "size",
                  "_270"
                ),
                [sty.freeBox__size__360__a0MK162Vc]: hasVariant(
                  variants,
                  "size",
                  "_360"
                )
              }
            )}
          >
            {"imagination"}
          </div>

          <div
            className={classNames(defaultcss.all, sty.freeBox__vuHkC, {
              [sty.freeBox__size__360__vuHkC62Vc]: hasVariant(
                variants,
                "size",
                "_360"
              )
            })}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__vHru3,
                {
                  [sty.freeBox__size__360__vHru362Vc]: hasVariant(
                    variants,
                    "size",
                    "_360"
                  )
                }
              )}
            >
              {"- Eric Reis, The Lean Startup"}
            </div>
          </div>
        </p.Stack>
      ) : null}
      {(hasVariant(variants, "size", "_720") ? true : false) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"textBody720"}
          data-plasmic-override={overrides.textBody720}
          hasGap={true}
          className={classNames(defaultcss.all, sty.textBody720, {
            [sty.textBody720__size__360]: hasVariant(variants, "size", "_360"),
            [sty.textBody720__size__720]: hasVariant(variants, "size", "_720")
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__a1BtS,
              {
                [sty.freeBox__size__720__a1BtSyqoH]: hasVariant(
                  variants,
                  "size",
                  "_720"
                )
              }
            )}
          >
            <span>
              <React.Fragment>{"Our "}</React.Fragment>
              <span style={{ fontWeight: 700 }}>{"future"}</span>
              <React.Fragment> </React.Fragment>
            </span>
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox___889Tv
            )}
          >
            {"prosperity"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox___6UG4X
            )}
          >
            {"depends on the"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__kizk5
            )}
          >
            <span>
              <span style={{ fontWeight: 700 }}>{"quality"}</span>
              <React.Fragment>{" of our"}</React.Fragment>
            </span>
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox___696Gb
            )}
          >
            {"collective "}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__yEg8T,
              {
                [sty.freeBox__size__720__yEg8TyqoH]: hasVariant(
                  variants,
                  "size",
                  "_720"
                )
              }
            )}
          >
            {hasVariant(variants, "size", "_720")
              ? "imagination"
              : "imagination."}
          </div>

          {(hasVariant(variants, "size", "_720") ? true : false) ? (
            <div
              className={classNames(defaultcss.all, sty.freeBox__p7E0P, {
                [sty.freeBox__size__720__p7E0PyqoH]: hasVariant(
                  variants,
                  "size",
                  "_720"
                )
              })}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox___2Kjmu
                )}
              >
                {"- Eric Reis, The Lean Startup"}
              </div>
            </div>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textBody2", "textBody720"],
  textBody2: ["textBody2"],
  textBody720: ["textBody720"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textBody2: "div";
  textBody720: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroTextDisplay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroTextDisplay__VariantsArgs;
    args?: PlasmicHeroTextDisplay__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeroTextDisplay__Fetches;
  } & Omit<PlasmicHeroTextDisplay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroTextDisplay__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeroTextDisplay__ArgProps,
      internalVariantPropNames: PlasmicHeroTextDisplay__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeroTextDisplay__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroTextDisplay";
  } else {
    func.displayName = `PlasmicHeroTextDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroTextDisplay = Object.assign(
  // Top-level PlasmicHeroTextDisplay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textBody2: makeNodeComponent("textBody2"),
    textBody720: makeNodeComponent("textBody720"),

    // Metadata about props expected for PlasmicHeroTextDisplay
    internalVariantProps: PlasmicHeroTextDisplay__VariantProps,
    internalArgProps: PlasmicHeroTextDisplay__ArgProps
  }
);

export default PlasmicHeroTextDisplay;
/* prettier-ignore-end */
