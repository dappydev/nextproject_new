import { NextSeo } from "next-seo"
import Head from "next/head"

export const SEO = ({ title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: "https://github.com/Daltimore",
          title: title,
          description: description,
        }}
        twitter={{
          handle: "@daltiLeo",
          cardType: "summary_large_image"
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  )
}