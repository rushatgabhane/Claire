import React from "react";
import IconBox from "../components/IconBox";
import {colors} from '../theme';

let leftIcons = [];
leftIcons[0] = <IconBox iconName="light" label="Light" key={1} />
leftIcons[1] = <IconBox iconName="fan" label="Fan" key={2} backgroundColor={colors.primary} />
leftIcons[2] = <IconBox iconName="customMessage" label="Custom Message" key={3} />
// leftIcons[3] = <IconBox iconName="emergency" label="dummy" key={3} />

let rightIcons = [];
rightIcons[0] = <IconBox iconName="water" label="Water" key={4} />
rightIcons[1] = <IconBox iconName="toilet" label="Washroom" key={5} />
rightIcons[2] = <IconBox iconName="emergency" label="Emergency" key={6} />
// rightIcons[3] = <IconBox iconName="light" label="dummy" key={8} />

export {leftIcons, rightIcons};