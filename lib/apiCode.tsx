import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

interface Props {
  code: { default: string };
}

const APICode: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <div>
        <Highlight {...defaultProps} code={props.code.default} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                padding: 30,
                fontFamily:
                  "Fira Code Light, Consolas, 'Courier New', monospace",
                fontSize: 14,
                background: "#1e1e1e",
                lineHeight: 1.5,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
export default APICode;
