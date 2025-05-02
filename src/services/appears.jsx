import OneAppear from "./AppearDates/24-09-28-gif";
import TwoAppear from "./AppearDates/24-10-05-gif";
import ThreeAppear from "./AppearDates/24-10-10-gif";
import FourAppear from "./AppearDates/24-10-23-gif";
import FiveAppear from "./AppearDates/24-10-24-gif";
import SixhAppear from "./AppearDates/24-10-29-gif";
import SevenAppear from "./AppearDates/24-10-30-gif";
import EightAppear from "./AppearDates/24-11-01-gif";
import NineAppear from "./AppearDates/24-11-05-gif";
import TenAppear from "./AppearDates/24-11-13-gif";
import ElevenAppear from "./AppearDates/24-11-24-gif";
import TwelveAppear from "./AppearDates/24-12-01-gif";
import ThirteenAppear from "./AppearDates/24-12-17-gif";
import FourteenAppear from "./AppearDates/24-12-23-gif";
import FiveteenAppear from "./AppearDates/24-12-30-gif";
import SixteenAppear from "./AppearDates/25-01-01-gif";
import SeventeenAppear from "./AppearDates/25-02-14-gif";
import EightteenAppear from "./AppearDates/25-02-23-gif";
import NineteenAppear from "./AppearDates/25-03-01-gif";
import TwentyAppear from "./AppearDates/25-03-08-gif";
import TwentyOneAppear from "./AppearDates/25-03-16-gif";
import TwentyTwoAppear from "./AppearDates/25-03-30-gif";
import TwentyThreeAppear from "./AppearDates/25-04-10-gif";
import TwentyFourAppear from "./AppearDates/25-04-12-gif";
import TwentyFiveAppear from "./AppearDates/25-04-19-gif";
import TwentySixAppear from "./AppearDates/25-05-01-gif";
import React from "react";

const appearComponents = [
    OneAppear,
    TwoAppear,
    ThreeAppear,
    FourAppear,
    FiveAppear,
    SixhAppear,
    SevenAppear,
    EightAppear,
    NineAppear,
    TenAppear,
    ElevenAppear,
    TwelveAppear,
    ThirteenAppear,
    FourteenAppear,
    FiveteenAppear,
    SixteenAppear,
    SeventeenAppear,
    EightteenAppear,
    NineteenAppear,
    TwentyAppear,
    TwentyOneAppear,
    TwentyTwoAppear,
    TwentyThreeAppear,
    TwentyFourAppear,
    TwentyFiveAppear,
    TwentySixAppear
];

function Appears({ selectedDate }) {
    const renderedComponents = appearComponents.map((Component, index) => {
        const rendered = <Component key={index + 1} style={{ display: 'inline-block' }} selectedDate={selectedDate} />;
        return rendered.type(rendered.props);
    });

    const hasContent = renderedComponents.some(comp => comp !== null && comp !== undefined);

    return (
        <div className="Appear-div">
            {hasContent ? 
                appearComponents.map((Component, index) => (
                    <Component 
                        key={index + 1} 
                        style={{ display: 'inline-block' }} 
                        selectedDate={selectedDate} 
                    />
                ))
                : 
                <p className="no-upgrades">No new gifts</p>
            }
        </div>
    );
}

export default Appears;
