declare module '*.mdx' {
  import React from 'react';
  const MDXComponent: React.FunctionComponent;
  export default MDXComponent;
}

declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'kantanui/styles';