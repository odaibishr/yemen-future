import * as React from "react";
import { SvgIconProps } from "./types";

/**
 * Yemen Future - Contact, Vision & Mission SVG Icons
 * Multi-layered vector engineering with dual-tone branding.
 */

export function CompassIcon({
  size,
  className = "w-6 h-6",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      {/* Outer Dial Gauge */}
      <circle cx="16" cy="16" r="13" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth={2} />
      <circle cx="16" cy="16" r="10" stroke="#73a7c1" strokeWidth={1.2} strokeDasharray="2 2" />
      {/* Cardinal Axis Ticks */}
      <line x1="16" y1="4" x2="16" y2="6.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="16" y1="25.5" x2="16" y2="28" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="4" y1="16" x2="6.5" y2="16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="25.5" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      {/* Dual-Tone Navigational Needle */}
      <polygon points="16,6.5 19,16 16,14 13,16" fill="#73a7c1" stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="16,25.5 19,16 16,18 13,16" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

export function TargetIcon({
  size,
  className = "w-6 h-6",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      {/* Tier 1 Outer Concentric Ring */}
      <circle cx="16" cy="16" r="13.5" fill="currentColor" fillOpacity="0.08" stroke="#73a7c1" strokeWidth={1.8} />
      {/* Tier 2 Mid Target Ring */}
      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth={1.8} />
      {/* Tier 3 Bullseye Core */}
      <circle cx="16" cy="16" r="4.5" fill="#73a7c1" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="16" cy="16" r="1.5" fill="#ffffff" />
      {/* Azimuth Crosshairs */}
      <line x1="16" y1="3" x2="16" y2="7" stroke="#73a7c1" strokeWidth={2} strokeLinecap="round" />
      <line x1="16" y1="25" x2="16" y2="29" stroke="#73a7c1" strokeWidth={2} strokeLinecap="round" />
      <line x1="3" y1="16" x2="7" y2="16" stroke="#73a7c1" strokeWidth={2} strokeLinecap="round" />
      <line x1="25" y1="16" x2="29" y2="16" stroke="#73a7c1" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({
  size,
  className = "w-6 h-6",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <circle cx="16" cy="16" r="13" fill="currentColor" fillOpacity="0.06" stroke="#73a7c1" strokeWidth={1.2} />
      {/* Handset Contour */}
      <path
        d="M22 20.5V23.8C22 24.5 21.4 25 20.7 25C13.5 25 7 18.5 7 11.3C7 10.6 7.5 10 8.2 10H11.5C12.1 10 12.6 10.4 12.7 11.1C13 12.6 13.5 14.1 14.2 15.4C14.5 15.8 14.3 16.4 13.9 16.8L12.5 18.2C14 20.6 16.1 22.7 18.5 24.2L19.9 22.8C20.3 22.4 20.9 22.2 21.3 22.5C22.6 23.2 24.1 23.7 25.6 24C26.3 24.1 26.7 24.6 26.7 25.2"
        transform="scale(0.85) translate(3, 3)"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MessageSquareIcon({
  size,
  className = "w-6 h-6",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <circle cx="16" cy="16" r="13" fill="currentColor" fillOpacity="0.06" stroke="#73a7c1" strokeWidth={1.2} />
      {/* Conversation Bubble */}
      <path
        d="M24 10C24 7.8 20.4 6 16 6C11.6 6 8 7.8 8 10C8 11.6 9.8 13 12.5 13.6L11 17L14.8 15.1C15.2 15.1 15.6 15.2 16 15.2C20.4 15.2 24 13.4 24 10Z"
        transform="scale(1.15) translate(-2.5, 0)"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <line x1="11" y1="11.5" x2="21" y2="11.5" stroke="#73a7c1" strokeWidth={1.8} strokeLinecap="round" />
      <line x1="11" y1="15.5" x2="17" y2="15.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

export function MailIcon({
  size,
  className = "w-6 h-6",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      {/* Envelope Backing */}
      <rect
        x="5"
        y="7.5"
        width="22"
        height="17"
        rx="3"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth={2}
      />
      {/* Flap Fold Line */}
      <path
        d="M5 10.5L16 18L27 10.5"
        stroke="#73a7c1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Wax Security Seal */}
      <circle cx="16" cy="18" r="3" fill="#FFFFFF" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="16" cy="18" r="1.2" fill="#73a7c1" />
    </svg>
  );
}

export function MapPinIcon({
  size,
  className = "w-6 h-6",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      {/* Teardrop Pin Body */}
      <path
        d="M16 3.5C10 3.5 5 8.5 5 14.5C5 21.5 14.5 28.5 15.5 29.2C15.8 29.4 16.2 29.4 16.5 29.2C17.5 28.5 27 21.5 27 14.5C27 8.5 22 3.5 16 3.5Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {/* Concentric GPS Radar Core */}
      <circle cx="16" cy="13.5" r="5" fill="#FFFFFF" stroke="#73a7c1" strokeWidth={1.6} />
      <circle cx="16" cy="13.5" r="2.2" fill="currentColor" />
    </svg>
  );
}
