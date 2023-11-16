import React from "react";

export type delay = number;

export type zoomInType = {
  delay: number;
  duration: number;
};

export type slideInType = {
  direction: "up" | "down" | "left" | "right";
  type: any; // TODO: Fix this type
  delay: number;
  duration: string;
};

export type staggerContainerType = {
  staggerChildren: React.ReactNode; // TODO: Fix this type
  delayChildren: React.ReactNode; // TODO: Fix this type
};
