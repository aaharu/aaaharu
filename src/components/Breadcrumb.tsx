import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Head from 'next/head'

type BreadcrumbProps = {
  items: BreadcrumbLinkItem[]
}

type BreadcrumbLinkItem = {
  href: string
  name: string
}

export const Breadcrumb = ({ items }: BreadcrumbProps): JSX.Element => {
  return (
    <>
      <Head>
        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.aaharu.com',
                },
                ...items.map((item, index) => {
                  return {
                    '@type': 'ListItem',
                    position: index + 2,
                    name: item.name,
                    item: `https://www.aaharu.com${item.href}`,
                  }
                }),
              ],
            }),
          }}
        />
      </Head>
      <ChakraBreadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item) => {
          return (
            <BreadcrumbItem key={item.href}>
              <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </ChakraBreadcrumb>
    </>
  )
}
