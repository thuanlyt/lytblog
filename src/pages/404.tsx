import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = (_props: PageProps) => (
  <Layout>
    <h1>404 - Không tìm thấy</h1>
    <p>Không tìm thấy nội dung bạn đang tìm kiếm :(</p>
  </Layout>
)

export default NotFound
