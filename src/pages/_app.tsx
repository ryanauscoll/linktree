import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEOConfig from "../../next-seo.config";
import { Analytics } from "@/scripts/analytics";
import theme from "@/utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEOConfig}  />
      <Analytics />
      <Component {...pageProps} />
      <style jsx global>
        {`
          body,
          button,
          h1,
          h2,
          h3 {
            font-family: ${theme.fonts.heading}
          }
        `}
      </style>
    </>
  )
}
