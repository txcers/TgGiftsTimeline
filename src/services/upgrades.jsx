import OneUpgrade from "./UpgradeDates/25-01-01-png";
import TwoUpgrade from "./UpgradeDates/25-01-29-png";
import ThreeUpgrade from "./UpgradeDates/25-01-30-png";
import FourUpgrade from "./UpgradeDates/25-01-31-png";
import FiveUpgrade from "./UpgradeDates/25-02-01-png";
import SixUpgrade from "./UpgradeDates/25-02-03-png";
import SevenUpgrade from "./UpgradeDates/25-02-14-png";
import EightUpgrade from "./UpgradeDates/25-02-23-png";
import NineUpgrade from "./UpgradeDates/25-03-07-png";
import TenUpgrade from "./UpgradeDates/25-03-08-png";
import ElevenUpgrade from "./UpgradeDates/25-04-01-png";
import TwelveUpgrade from "./UpgradeDates/25-04-20-png";
import React from "react";

const upgradeComponents = [
    OneUpgrade,
    TwoUpgrade,
    ThreeUpgrade,
    FourUpgrade,
    FiveUpgrade,
    SixUpgrade,
    SevenUpgrade,
    EightUpgrade,
    NineUpgrade,
    TenUpgrade,
    ElevenUpgrade,
    TwelveUpgrade,
];

function Upgrades({ selectedDate }) {
    const renderedComponents = upgradeComponents.map((Component, index) => {
        const rendered = <Component key={index + 1} style={{ display: 'inline-block' }} selectedDate={selectedDate} />;
        return rendered.type(rendered.props);
    });
    const hasContent = renderedComponents.some(comp => comp !== null && comp !== undefined);

    return (
        <div className="Upgrade-div">
            {hasContent ? 
                upgradeComponents.map((Component, index) => (
                    <Component 
                        key={index + 1} 
                        style={{ display: 'inline-block' }} 
                        selectedDate={selectedDate} 
                    />
                ))
                : 
                <p className="no-upgrades">No new upgrades</p>
            }
        </div>
    );
}

export default Upgrades;
