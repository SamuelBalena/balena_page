import React from "react";

export interface Props {
  children: React.ReactNode;
  href: string;
  value: "DEFAULT" | "CONTACT";
}
