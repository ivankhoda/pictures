import React, { PropsWithChildren, ReactElement } from "react";

interface PaperProps {
  children: ReactElement;
}
export const Paper: React.FC<PropsWithChildren<PaperProps>> = ({ children }) => {
  return <div className="paper">{children}</div>;
};
