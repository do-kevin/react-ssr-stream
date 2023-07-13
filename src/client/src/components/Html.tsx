import { OUTPUT_CSS } from "../../../shared/constants.js";

interface HtmlProps {
  title: string;
  assets?: {
    [key: string]: string;
  };
  children: string | JSX.Element | JSX.Element[];
}

export const Html = (props: HtmlProps) => {
  const { title, assets, children } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" />
        {assets && <link rel="stylesheet" href={assets[OUTPUT_CSS]} />}
        <title>{title}</title>
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<b>Enable JavaScript to run this app.</b>`,
          }}
        />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `assetManifest = ${JSON.stringify(assets)};`,
          }}
        />
      </body>
    </html>
  );
};
