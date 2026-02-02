"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FeyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "purple"
}

const LockIcon = ({ className, variant = "default" }: { className?: string; variant?: "default" | "purple" }) => {
  const strokeColor = variant === "purple" ? "#1A60AB" : "#868F97"

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        stroke={strokeColor}
        strokeWidth="1.5"
        d="M13.5 12.8053C14.2525 12.3146 14.75 11.4654 14.75 10.5C14.75 8.98122 13.5188 7.75 12 7.75C10.4812 7.75 9.25 8.98122 9.25 10.5C9.25 11.4654 9.74745 12.3146 10.5 12.8053L10.5 14.75C10.5 15.5784 11.1716 16.25 12 16.25C12.8284 16.25 13.5 15.5784 13.5 14.75L13.5 12.8053Z"
      />
      <circle
        cx="12"
        cy="12"
        r="9.25"
        stroke={strokeColor}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function FeyButton({
  className,
  children,
  variant = "default",
  ...props
}: FeyButtonProps) {
  const isPurple = variant === "purple"

  return (
    <button
      className={cn(
        "group relative flex items-center justify-center gap-1",
        "h-10 min-w-[136px] whitespace-nowrap rounded-[28px] px-6 py-2",
        "text-sm font-semibold leading-tight",
        // Text color
        isPurple ? "text-white" : "text-white",
        // Base gradient
        isPurple
          ? "bg-gradient-to-br from-[#4A9AE8] to-[#1A60AB]"
          : "bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,rgb(0,0,0)_0%,rgba(255,255,255,0.04)_100%)]",
        // Shadows
        isPurple
          ? "shadow-[0_0_12px_rgba(74,154,232,0.75)_0_0_30px_rgba(26,96,171,0.5)] hover:shadow-[0_0_18px_rgba(74,154,232,0.8)_0_0_40px_rgba(26,96,171,0.55)]"
          : "[box-shadow:inset_0_0_0_0.5px_rgba(134,143,151,0.2),inset_1px_1px_0_-0.5px_rgba(134,143,151,0.4),inset_-1px_-1px_0_-0.5px_rgba(134,143,151,0.4)]",
        // Hover effect pseudo-element
        "after:absolute after:inset-0 after:rounded-[28px] after:opacity-0 after:transition-opacity after:duration-200",
        // Hover gradient
        isPurple
          ? "after:bg-gradient-to-br after:from-[#2E7BD4] after:to-[#1A60AB]"
          : "after:bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,rgb(0,0,0)_0%,rgb(24,24,24)_100%)]",
        // Hover shadows
        isPurple
          ? ""
          : "after:[box-shadow:inset_0_0_0_0.5px_rgba(134,143,151,0.2),inset_1px_1px_0_-0.5px_rgba(134,143,151,0.4),inset_-1px_-1px_0_-0.5px_rgba(134,143,151,0.4),0_0_3px_rgba(255,255,255,0.1)]",
        "hover:after:opacity-100",
        // Scale on hover
        isPurple ? "hover:scale-105 transition-all duration-300" : "",
        // Disabled state
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        <LockIcon variant={variant} />
        {children}
      </span>
    </button>
  )
}
