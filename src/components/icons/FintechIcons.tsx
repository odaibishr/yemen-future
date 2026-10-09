import * as React from "react";
import { SvgIconProps } from "./types";

/**
 * Yemen Future - Bespoke Fintech & Core Banking SVG Icons
 * Multi-layered vector engineering inspired by Jaib & Floosak design benchmarks.
 * Uses semantic layers: Primary (currentColor), Accent (brand cyan #73a7c1), Tint (soft fill).
 */

export function ShieldCheckIcon({
  size,
  strokeWidth = 2,
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
      {/* Outer Fortress Shield with Soft Tint */}
      <path
        d="M16 29C16 29 27 23.5 27 14V6.5L16 2.5L5 6.5V14C5 23.5 16 29 16 29Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Inner Vault Contour & Concentric Accent Ring */}
      <path
        d="M16 25C16 25 24 20.5 24 13.5V8L16 5L8 8V13.5C8 20.5 16 25 16 25Z"
        stroke="#73a7c1"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      {/* Central Vault Checkmark Seal */}
      <circle cx="16" cy="15" r="5" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M12.5 15.5L15 18L19.5 13"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparklesIcon({
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
      {/* Dynamic Fluid Transfer Ribbon */}
      <path
        d="M9 19C6 19 4.5 17 4.5 15C4.5 12 7 10.5 9.5 10.5C13 10.5 15.5 16.5 19 16.5C21.5 16.5 24 15 24 13C24 11 22 9.5 20 9.5"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <path
        d="M23 13C26 13 27.5 15 27.5 17C27.5 20 25 21.5 22.5 21.5C19 21.5 16.5 15.5 13 15.5C10.5 15.5 8 17 8 19C8 21 10 22.5 12 22.5"
        stroke="#73a7c1"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      {/* Primary 4-Point Fintech Gleam Star */}
      <path
        d="M16 3L17.2 6.8L21 8L17.2 9.2L16 13L14.8 9.2L11 8L14.8 6.8L16 3Z"
        fill="currentColor"
      />
      {/* Secondary Accent Starlets & Pulse Nodes */}
      <path
        d="M25 21L25.8 23.2L28 24L25.8 24.8L25 27L24.2 24.8L22 24L24.2 23.2L25 21Z"
        fill="#73a7c1"
      />
      <circle cx="7" cy="7" r="1.5" fill="#73a7c1" />
      <circle cx="26" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function CpuIcon({
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
      {/* Silicon Microchip Die */}
      <rect
        x="7"
        y="7"
        width="18"
        height="18"
        rx="4"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth={2}
      />
      {/* Central High-Performance Cryptographic Core */}
      <rect
        x="11.5"
        y="11.5"
        width="9"
        height="9"
        rx="2"
        fill="#73a7c1"
        fillOpacity="0.25"
        stroke="#73a7c1"
        strokeWidth={1.6}
      />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      {/* API Pin Connections & Bus Rails */}
      <path
        d="M12 2.5V7M16 2.5V7M20 2.5V7M12 25V29.5M16 25V29.5M20 25V29.5M2.5 12H7M2.5 16H7M2.5 20H7M25 12H29.5M25 16H29.5M25 20H29.5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      {/* Solder Corner Micro-Vias */}
      <circle cx="9.5" cy="9.5" r="1" fill="#73a7c1" />
      <circle cx="22.5" cy="9.5" r="1" fill="#73a7c1" />
      <circle cx="9.5" cy="22.5" r="1" fill="#73a7c1" />
      <circle cx="22.5" cy="22.5" r="1" fill="#73a7c1" />
    </svg>
  );
}

export function UsersIcon({
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
      {/* Concentric Inclusion Arcs */}
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="#73a7c1"
        strokeWidth={1.2}
        strokeDasharray="2 3"
        fill="currentColor"
        fillOpacity="0.04"
      />
      {/* Central Primary User (Institutional Financial Pillar) */}
      <circle cx="16" cy="10.5" r="3.5" fill="currentColor" />
      <path
        d="M10 23C10 19.5 12.8 17 16 17C19.2 17 22 19.5 22 23"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      {/* Left Citizen Access Node */}
      <circle cx="7" cy="14" r="2.5" fill="#73a7c1" />
      <path
        d="M3.5 24C3.5 21.2 5.5 19.5 7.8 19.5C9.2 19.5 10.5 20.3 11.2 21.5"
        stroke="#73a7c1"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      {/* Right Merchant Partner Node */}
      <circle cx="25" cy="14" r="2.5" fill="#73a7c1" />
      <path
        d="M28.5 24C28.5 21.2 26.5 19.5 24.2 19.5C22.8 19.5 21.5 20.3 20.8 21.5"
        stroke="#73a7c1"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      {/* Foundation Line */}
      <line x1="5" y1="26.5" x2="27" y2="26.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

export function SmartphoneIcon({
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
      {/* Smartphone Chassis */}
      <rect
        x="9"
        y="3.5"
        width="14"
        height="25"
        rx="3.5"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth={2}
      />
      {/* Speaker Bar & Touch Sensor */}
      <line x1="14" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <circle cx="16" cy="25" r="1.2" fill="currentColor" />
      {/* Contactless Radiating Waves */}
      <path
        d="M13.5 12C14.2 11.2 15.1 10.8 16 10.8C16.9 10.8 17.8 11.2 18.5 12"
        stroke="#73a7c1"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d="M11.5 9.8C12.7 8.5 14.3 7.8 16 7.8C17.7 7.8 19.3 8.5 20.5 9.8"
        stroke="#73a7c1"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      {/* Smart Card Display Graphic */}
      <rect x="11.5" y="14.5" width="13" height="8" rx="1.5" fill="#73a7c1" fillOpacity="0.3" stroke="#73a7c1" strokeWidth={1.2} />
      <rect x="13" y="16.5" width="3" height="2" rx="0.5" fill="currentColor" />
    </svg>
  );
}

export function RepeatIcon({
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
      {/* Closed-Loop Transfer Ring Orbit */}
      <circle cx="16" cy="16" r="13" stroke="#73a7c1" strokeWidth={1.2} strokeDasharray="3 3" fill="currentColor" fillOpacity="0.05" />
      {/* Upper Cash-Reduction Loop Arrow */}
      <path
        d="M23 9.5C21 7 18 5.5 14.5 6C10 6.5 6.5 10 6 14.5L4 12.5"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lower Digital Circulation Loop Arrow */}
      <path
        d="M9 22.5C11 25 14 26.5 17.5 26C22 25.5 25.5 22 26 17.5L28 19.5"
        stroke="#73a7c1"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Digital Currency Token */}
      <circle cx="16" cy="16" r="4.5" fill="#73a7c1" fillOpacity="0.3" stroke="currentColor" strokeWidth={1.8} />
      <path d="M16 13.5V18.5M14.5 15H17.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

export function TrendingUpIcon({
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
      {/* Metric Foundation Frame */}
      <rect x="5" y="5" width="22" height="22" rx="3" fill="currentColor" fillOpacity="0.06" stroke="#73a7c1" strokeWidth={1.2} />
      {/* Ascending FinTech Volume Bars */}
      <rect x="8.5" y="18" width="3.5" height="6.5" rx="1" fill="#73a7c1" fillOpacity="0.7" />
      <rect x="14" y="13.5" width="3.5" height="11" rx="1" fill="#73a7c1" />
      <rect x="19.5" y="9.5" width="3.5" height="15" rx="1" fill="currentColor" />
      {/* Breakthrough Upward Trend Line */}
      <path
        d="M8 17L14 11L19 14.5L25 7"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 7H25V11.5"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25" cy="7" r="1.5" fill="#73a7c1" />
    </svg>
  );
}

export function ShoppingBagIcon({
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
      {/* Merchant Retail Bag Body */}
      <path
        d="M7.5 11H24.5L26.5 27.5H5.5L7.5 11Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {/* Bag Handle */}
      <path
        d="M12 11V8C12 6.3 13.8 5 16 5C18.2 5 20 6.3 20 8V11"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      {/* POS Checkout Display Terminal Inside */}
      <rect
        x="11"
        y="14"
        width="10"
        height="10.5"
        rx="2"
        fill="#FFFFFF"
        stroke="#73a7c1"
        strokeWidth={1.6}
      />
      <rect x="12.5" y="15.5" width="7" height="3.5" rx="0.5" fill="#73a7c1" fillOpacity="0.3" />
      <circle cx="14" cy="21.5" r="0.75" fill="currentColor" />
      <circle cx="16" cy="21.5" r="0.75" fill="currentColor" />
      <circle cx="18" cy="21.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function HandshakeIcon({
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
      {/* Banking Pediment Arch Backdrop */}
      <path d="M5 13L16 6.5L27 13" stroke="#73a7c1" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="8" y2="18" stroke="#73a7c1" strokeWidth={1.4} />
      <line x1="24" y1="13" x2="24" y2="18" stroke="#73a7c1" strokeWidth={1.4} />
      {/* Executive Partnership Handshake */}
      <path
        d="M9 24.5L14 19.5L16 21.5L21 16.5"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 21.5L11.5 16.5L15.5 20.5L24.5 22.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Clasp Node */}
      <circle cx="16" cy="19.5" r="2.5" fill="#73a7c1" stroke="currentColor" strokeWidth={1.5} />
      {/* Ground Foundation */}
      <line x1="4" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function AwardIcon({
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
      {/* Hanging Ribbons */}
      <path
        d="M12 19V29L16 26.5L20 29V19"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      {/* Rosette Rim */}
      <circle cx="16" cy="13.5" r="9" fill="#FFFFFF" stroke="#73a7c1" strokeWidth={2} />
      <circle cx="16" cy="13.5" r="6.5" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth={1.4} />
      {/* 8-Point Sovereignty Geometric Emblem */}
      <path
        d="M16 8.5L17.2 11.8L20.5 11.8L17.8 13.8L18.8 17.2L16 15.2L13.2 17.2L14.2 13.8L11.5 11.8L14.8 11.8L16 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ActivityIcon({
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
      <circle cx="16" cy="16" r="13" stroke="#73a7c1" strokeWidth={1.5} fill="currentColor" fillOpacity="0.05" />
      {/* High-Uptime Heartbeat Wave (99.98%) */}
      <path
        d="M5 16H10L12.5 10L16 22L19.5 12L22 16H27"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="22" r="1.5" fill="#73a7c1" />
    </svg>
  );
}

export function ZapIcon({
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
      <circle cx="16" cy="16" r="13" stroke="#73a7c1" strokeWidth={1.2} strokeDasharray="3 3" fill="currentColor" fillOpacity="0.05" />
      {/* Instant Settlement Lightning Bolt (< 1s) */}
      <polygon
        points="17,3.5 6.5,17 15.5,17 14,28.5 25.5,14 16.5,14"
        fill="#73a7c1"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon({
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
      {/* 24/7 Operations Dial */}
      <circle cx="16" cy="16" r="13" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth={2} />
      <circle cx="16" cy="16" r="9.5" stroke="#73a7c1" strokeWidth={1.2} strokeDasharray="2 2" />
      {/* Dial Hour Markers */}
      <line x1="16" y1="5.5" x2="16" y2="7.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="16" y1="24.5" x2="16" y2="26.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="5.5" y1="16" x2="7.5" y2="16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="24.5" y1="16" x2="26.5" y2="16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      {/* Clock Hands */}
      <polyline points="16,9.5 16,16 20.5,18" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="2" fill="#73a7c1" />
    </svg>
  );
}

export function ReceiptIcon({
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
      {/* Floosak-Style Serrated Bill Receipt */}
      <path
        d="M6.5 4H25.5V26.5L23 24.5L20.5 26.5L18 24.5L15.5 26.5L13 24.5L10.5 26.5L8 24.5L6.5 26V4Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      {/* Header Grid Lines */}
      <line x1="10.5" y1="9" x2="21.5" y2="9" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <line x1="10.5" y1="13" x2="17.5" y2="13" stroke="#73a7c1" strokeWidth={1.5} strokeLinecap="round" />
      {/* Utility Electricity Bolt */}
      <path
        d="M17.5 16L12.5 22H17L15.5 27L21 21H16.5L17.5 16Z"
        fill="#73a7c1"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <circle cx="10.5" cy="17.5" r="1" fill="currentColor" />
      <circle cx="10.5" cy="21" r="1" fill="currentColor" />
    </svg>
  );
}

export function ArrowLeftRightIcon({
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
      {/* Upper Lane (Send) */}
      <path d="M8 12H24M24 12L19 7M24 12L19 17" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      {/* Lower Lane (Receive) */}
      <path d="M24 20H8M8 20L13 15M8 20L13 25" stroke="#73a7c1" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QrCodeIcon({
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
      {/* Top Left Finder Frame */}
      <rect x="5" y="5" width="9" height="9" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth={2} />
      <rect x="7.5" y="7.5" width="4" height="4" rx="1" fill="#73a7c1" />
      {/* Top Right Finder Frame */}
      <rect x="18" y="5" width="9" height="9" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth={2} />
      <rect x="20.5" y="7.5" width="4" height="4" rx="1" fill="#73a7c1" />
      {/* Bottom Left Finder Frame */}
      <rect x="5" y="18" width="9" height="9" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth={2} />
      <rect x="7.5" y="20.5" width="4" height="4" rx="1" fill="#73a7c1" />
      {/* Micro Data Modules */}
      <rect x="18" y="18" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="23" y="18" width="4" height="4" rx="1" fill="#73a7c1" />
      <rect x="18" y="23" width="4" height="4" rx="1" fill="#73a7c1" />
      <rect x="23" y="23" width="4" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}

export function SendIcon({
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
      <path
        d="M28 4L14 18M28 4L19 28L14 18M28 4L4 13L14 18"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="14,18 19,28 28,4" fill="#73a7c1" fillOpacity="0.25" />
    </svg>
  );
}

export function PlusCircleIcon({
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
      <circle cx="16" cy="16" r="13" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth={2} />
      <circle cx="16" cy="16" r="9" stroke="#73a7c1" strokeWidth={1.2} />
      <line x1="16" y1="11" x2="16" y2="21" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" />
      <line x1="11" y1="16" x2="21" y2="16" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" />
    </svg>
  );
}

export function BuildingIcon({
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
      {/* Central Bank Pediment */}
      <polygon points="16,4 4,11.5 28,11.5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <rect x="5.5" y="11.5" width="21" height="2.5" rx="0.5" fill="#73a7c1" stroke="currentColor" strokeWidth={1.2} />
      {/* 4 Classical Columns */}
      <line x1="8" y1="14" x2="8" y2="23.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="13.3" y1="14" x2="13.3" y2="23.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="18.7" y1="14" x2="18.7" y2="23.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="24" y1="14" x2="24" y2="23.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      {/* Stepped Base Foundation */}
      <rect x="4.5" y="23.5" width="23" height="2.5" rx="0.5" fill="#73a7c1" stroke="currentColor" strokeWidth={1.2} />
      <rect x="3" y="26" width="26" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );
}

export function CheckCircle2Icon({
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
      <circle cx="16" cy="16" r="13" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth={1.8} />
      <circle cx="16" cy="16" r="9" fill="#10b981" />
      <path
        d="M12 16L14.8 19L20 13.5"
        stroke="#ffffff"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
