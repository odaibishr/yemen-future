import * as React from "react";
import { SvgIconProps } from "./types";

/**
 * Yemen Future - Navigation, UI & Directional SVG Icons
 * Precision geometric vector architecture tailored for Arabic RTL UX.
 */

export function ArrowUpRightIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <polyline points="9,7 17,7 17,15" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpLeftIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <line x1="17" y1="17" x2="7" y2="7" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <polyline points="15,7 7,7 7,15" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeftIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <line x1="19" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <polyline points="11,18 5,12 11,6" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <line x1="12" y1="19" x2="12" y2="5" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <polyline points="6,11 12,5 18,11" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDownToLineIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3V15M12 15L7.5 10.5M12 15L16.5 10.5" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18.5H20" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" />
    </svg>
  );
}

export function ChevronLeftIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <polyline points="14,18 8,12 14,6" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({
  size,
  className = "w-6 h-6",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <line x1="4" y1="6.5" x2="20" y2="6.5" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <line x1="7" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <line x1="4" y1="17.5" x2="20" y2="17.5" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
    </svg>
  );
}

export function XIcon({
  size,
  className = "w-5 h-5",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
    </svg>
  );
}

export function HomeIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <path d="M3 10L12 3L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <path d="M9.5 21V13C9.5 12.4 10 12 10.5 12H13.5C14 12 14.5 12.4 14.5 13V21" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="7.5" r="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth={2} />
      <path d="M4.5 20.5C4.5 16.5 8 14 12 14C16 14 19.5 16.5 19.5 20.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function BellIcon({
  size,
  className = "w-4 h-4",
  ...props
}: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M18 9C18 5.7 15.3 3 12 3C8.7 3 6 5.7 6 9C6 15 4 17 4 17H20C20 17 18 15 18 9Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path d="M10.3 19.5C10.7 20.4 11.3 21 12 21C12.7 21 13.3 20.4 13.7 19.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}
