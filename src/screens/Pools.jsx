import React from "react";
import { Link } from "react-router-dom";
import StakingCalculation from "../components/StakingCalculation";
import VaultBUSD from "../components/VaultBUSD";
import Switch from "@mui/material/Switch";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Pools() {
  return (
    <>
      <div className="vaults__main__container">
        <div className="farming__main__container__card">
          <div className="vaults__main__container__card__content">
            <div className="vaults__main__container__card__content__left">
              <div className="vaults__main__container__card__content__left__heading">
                Pools
              </div>
              <div className="vaults__main__container__card__content__left__para">
                Stake Liquidity Pool (LP) tokens to earn
              </div>
              <div className="vaults__main__container__card__content__links">
                <a
                  href="#"
                  className="vaults__main__container__card__content__links__heading"
                >
                  Staked only
                  <Switch {...label} defaultChecked />
                </a>

                <a
                  href="#"
                  className="vaults__main__container__card__content__links__heading"
                >
                  Live
                </a>

                <a
                  href="#"
                  className="vaults__main__container__card__content__links__heading"
                >
                  Finished
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="vaults__main__container__content">
          <VaultBUSD />
          <VaultBUSD />
          <VaultBUSD />
        </div>
      </div>
      <WhyUs />
      <StakingCalculation />
      <div className="faq__container">
        <div
          style={{ marginBottom: "1.5em" }}
          className="why__us__container__heading"
        >
          FAQ
        </div>
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
      </div>
    </>
  );
}
