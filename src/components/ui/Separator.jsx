import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import classNames from "classnames";
import styles from "./Separator.module.css";

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={classNames(
        styles.separator,
        orientation === "horizontal" ? styles.horizontal : styles.vertical,
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = "Separator";

export { Separator };
