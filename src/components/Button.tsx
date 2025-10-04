import type { ReactNode } from "react";

function Button({
  action,
  children,
  classes,
}: {
  action?: () => void;
  children: ReactNode;
  classes?: string;
}) {
  return (
    <button className={classes} onClick={action}>
      {children}
    </button>
  );
}
export default Button;
