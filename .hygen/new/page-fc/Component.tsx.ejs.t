---
to: <%= abs_path %>/<%= component_name %>.tsx
---
import {} from 'react'
import clsx from 'clsx'

<% if (have_header) { -%>
import { PageWithHeader, SectionWrapper } from '@/components/layout'
import { ROUTE } from '@/const'
<% } -%>


export const <%= page_component_name %> = () => {
  return (
    <% if (have_header) { -%>
    <PageWithHeader
      breadcrumb={[{ label: 'ホーム', href: ROUTE.top }, { label: '' }]} 
      withSearch={false}
    >
      <SectionWrapper withSpacingY={true} withSpacingX={true}>
        
      </SectionWrapper>
    </PageWithHeader>
    <% } -%>

    <% if (!have_header) { -%>
      <>
      </>
    <% } -%>
  )
}