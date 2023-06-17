"use client";

import React from "react";

type Props = {
  value: any;
  replacer?: any | null;
  space?: number;
};

const ReactLog: React.FC<Props> = ({ value, replacer = null, space = 2 }) => {
  return (
    <pre>
      <code>{JSON.stringify(value, replacer, space)}</code>
    </pre>
  );
};

export default ReactLog;
