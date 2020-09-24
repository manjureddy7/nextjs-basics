import Link from "next/link";

import { useRouter } from 'next/router';


export default function ProductName() {
    const router = useRouter();
    console.log("Router is", router)
    return (
      <div>
        <h1>Hi I'm Product Name Page!! (segment 1)</h1>
        <Link href="/">Back</Link>
        <h2>Router Dynamic Parameter: {router.query.name}</h2>
      </div>
    )
  }

  // You can access this by http::localhost:3000/product/anyName
  // In order to get the dynamic part of the router we will use useRouter hook
  