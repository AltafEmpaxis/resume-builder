import React from 'react';
import parse, { DOMNode, Element, HTMLReactParserOptions, domToReact } from 'html-react-parser';

import Link from 'next/link';
import styles from './richtext/jodit.module.css';
import { useMemo } from 'react';

interface HTMLRendererProps {
  htmlString: string;
}

export const HTMLRenderer = ({ htmlString }: HTMLRendererProps) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if (
        domNode instanceof Element &&
        domNode.name === 'a' &&
        domNode.attribs &&
        domNode.attribs.href
      ) {
        return (
          <Link href={domNode.attribs.href}>
            {domToReact(domNode.children as DOMNode[], options)}
          </Link>
        );
      } else if (domNode instanceof Element && domNode.name === 'script') {
        return <></>;
      }
      return undefined;
    },
  };

  const parsedElement = useMemo(() => {
    return parse(htmlString || '', options);
  }, [htmlString, options]);

  return <div className={`${styles.richtextRuntimeWrapper} text-xs`}>{parsedElement}</div>;
};

export default HTMLRenderer;
