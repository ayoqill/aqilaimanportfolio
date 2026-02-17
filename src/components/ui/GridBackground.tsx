export function GridFade() {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Left & Right subtle fade */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right,rgba(251,251,253,0.95) 0%,rgba(251,251,253,0) 20%,rgba(251,251,253,0) 80%,rgba(251,251,253,0.95) 100%)"
        }}
      />
      {/* Top & Bottom soft fade */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom,rgba(251,251,253,0.7) 0%,rgba(251,251,253,0) 15%,rgba(251,251,253,0) 85%,rgba(251,251,253,0.7) 100%)"
        }}
      />
      {/* Very subtle corner vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center,transparent 60%,rgba(2,6,23,0.05) 100%)"
        }}
      />
    </div>
  );
}
/**
 * Fade overlay for grid backgrounds. Place once in your layout/component.
 */
export function GridFadeOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* stronger edge fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,251,253,0)_35%,rgba(251,251,253,0.92)_100%)]" />
      {/* bolder vignette for corners */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(2,6,23,0.10)_100%)]" />
    </div>
  );
}
import { cn } from "@/lib/utils";

/**
 * Grid background: 40px grid + optional radial fade (grid in center, soft at edges).
 * Uses plain CSS classes so the grid always renders.
 */
export function GridBackground({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0", className)}
      aria-hidden
      {...props}
    >
      {/* Grid layer – plain CSS so it always shows */}
      <div className="absolute inset-0 grid-bg-base" />
      {/* Radial fade overlay */}
      <div className="absolute inset-0 grid-bg-fade" />
    </div>
  );
}

/** Demo section with "Backgrounds" title – use on a page if you want the full demo block */
export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black",
          "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        )}
      />
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </div>
  );
}
