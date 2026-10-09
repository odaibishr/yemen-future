import * as React from "react";

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

export type SvgIcon = React.ComponentType<SvgIconProps>;
