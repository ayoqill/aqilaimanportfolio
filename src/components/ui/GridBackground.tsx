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
