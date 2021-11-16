import React from "react";
import IconBox from "../components/IconBox";

let leftIcons = [];
leftIcons[0] = <IconBox iconName="light" label="Light" key={1} />
leftIcons[1] = <IconBox iconName="fan" label="Fan" key={2} />
leftIcons[2] = <IconBox iconName="customMessage" label="Custom Message" key={3} />

let rightIcons = [];
rightIcons[0] = <IconBox iconName="water" label="Water" key={4} />
rightIcons[1] = <IconBox iconName="toilet" label="Washroom" key={5} />
rightIcons[2] = <IconBox iconName="emergency" label="Emergency" key={6} />

export {leftIcons, rightIcons};