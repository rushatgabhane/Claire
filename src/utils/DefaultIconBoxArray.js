import React from "react";
import IconBox from "../components/IconBox";

let leftIcons = [];
leftIcons[0] = <IconBox iconName="light" label="Light" key={1}/>
leftIcons[1] = <IconBox iconName="fan" label="Fan" key={2}/>
leftIcons[2] = <IconBox iconName="customMessage" label="Custom Message" key={4}/>
leftIcons[3] = <IconBox iconName="emergency" label="dummy" key={3}/>

let rightIcons = [];
rightIcons[0] = <IconBox iconName="water" label="Water" key={5}/>
rightIcons[1] = <IconBox iconName="toilet" label="Washroom" key={6}/>
rightIcons[2] = <IconBox iconName="emergency" label="Emergency" key={7}/>
rightIcons[3] = <IconBox iconName="light" label="dummy" key={8}/>

export {leftIcons, rightIcons};