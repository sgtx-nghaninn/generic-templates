import React, { FunctionComponent } from "react";
import { EBL_DCSATemplate } from "./EBL_DCSATemplate";
import { EBL_DCSASampleV2 } from "./sampleV2";
import { EBL_DCSASampleV3 } from "./sampleV3";

export default {
  title: "DCSA Electronic Bill of Lading",
  component: EBL_DCSATemplate,
  parameters: {
    componentSubtitle: "DCSA Electronic Bill of Lading template.",
  },
};

export const DCSABillOfLadingEmpty: FunctionComponent = () => {
  return <EBL_DCSATemplate document={{} as any} handleObfuscation={() => { }} />; // when empty, visually should not show any dangling values
};

export const DCSABillOfLadingV2: FunctionComponent = () => {
  return <EBL_DCSATemplate document={EBL_DCSASampleV2} handleObfuscation={() => { }} />;
};

export const DCSABillOfLadingV3: FunctionComponent = () => {
  return <EBL_DCSATemplate document={EBL_DCSASampleV3} handleObfuscation={() => { }} />;
};
