import React from "react";
import IconBox from "../components/IconBox";

let leftIcons = [];
leftIcons[0] = <IconBox iconName="light" label="Light" key={1}/>
leftIcons[1] = <IconBox iconName="light" label="Fan" key={2}/>
leftIcons[2] = <IconBox iconName="light" label="Table" key={3}/>
leftIcons[3] = <IconBox iconName="light" label="Table" key={4}/>

let rightIcons = [];
rightIcons[0] = <IconBox iconName="light" label="1" key={5}/>
rightIcons[1] = <IconBox iconName="light" label="2" key={6}/>
rightIcons[2] = <IconBox iconName="light" label="3" key={7}/>
rightIcons[3] = <IconBox iconName="light" label="1" key={8}/>

export {leftIcons, rightIcons};