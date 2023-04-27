---
title: NextJS Basics
description: A selected list of basic NextJS concepts.
---

NextJS is a framework for building web applications and uses 
React as its templating/view engine.

It provides two rendering modes:

1. **Static Site Generation (SSG)**: Generates static resources 
   during build time.
2. **Server Side Rendering (SSR)**: Generates static resources 
   on-demand.

NextJS can also be used to write Web API services.

## Getting Started

To bootstrap a NextJS project run:

```bash
npx create-next-app@latest
```

To bootstrap a NextJS project with TypeScript run with the 
`--typescript` or `--ts` flag.

## Pages

The `/pages` directory in a NextJS project contain files that 
export a React component.

The file's path and name will be used as the route name for 
a page.

For example:

```tsx
// /pages/hello.tsx
export default function Hello() {
  return <h1>Hello NextJS!</h1>
}
```

This creates an HTML resource with the URL route `/hello`.

## Data Fetching

A NextJS page can fetch external data that it can then use as 
static values in its template.

There are two ways to do this:

### Static Rendered Data

When a function named `getStaticProps` is exported in a page file 
the function's return values are calculated and provided to the 
page component at build time.

```tsx
export default function Blogs(props) {
  const { blogs } = props;
  return <h1>I have {blogs.length} blog post(s).</h1>
}

export async function getStaticProps() {
  const res = await fetch("https://some.external.endpoint/api/blogs/route");
  const blogs = await res.json();
  return {
    props: { blogs }
  }
}
```

### Server Rendered Data

Similarly when exporting a function named `getServerSideProps` the 
function's return values are calculated and provided to the page 
component at request time.

```tsx
export default function Products(props) {
  const { products } = props;
  return <h1>I have {products.length} product(s).</h1>
}

export async function getServerSideProps() {
  const res = await fetch("https://some.external.endpoint/api/products/route");
  const products = await res.json();
  return {
    props: { products }
  }
}
```

> **Note**: A page can either have a static rendered data (`getStaticProps`) or a 
> server rendered data (`getServerSideProps`) exported.

### Incremental Static Regeneration (ISR)

ISR is a NextJS feature that rebuilds a static resource whenever its external   
data updates.

This feature uses the [stale-while-revalidate](https://web.dev/stale-while-revalidate/) caching method.

To enable ISR, add the `revalidate` property in the return object of the 
`getStaticProps` function.

```tsx
export async function getServerSideProps() {
  const res = await fetch("https://some.external.endpoint/api/products/route");
  const products = await res.json();
  return {
    props: { products },
    // Rebuild and revalidate every 10 seconds.
    revalidate: 10,
  }
}
```

## Routing

### Dynamic Routes

To create dynamics routes (URL slugs) name a page file enclosed with square brackets `[]`:

```tsx
// /pages/products/[sku].tsx
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { sku } = router.query;
  return <h1>Product {sku}</h1>
}
```

When using `getStaticProps` in a dynamic route page it will also need the `getStaticPaths` 
function exported to generate all possible route paths for the page.

```tsx
// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}

export default function Post({ post }) {
  // Render post...
}
```
