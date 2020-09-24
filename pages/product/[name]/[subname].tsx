import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductNameTwo() {
    const router = useRouter();
    console.log("Router is", router)
    return (
      <div>
        <h1>Hi I'm Product Name Two Page!! (segment 2)</h1>
        <Link href="/">Back</Link>
        <h2>Router Dynamic Parameter: {router.query.subname}</h2>
      </div>
    )
  }

  // You can access this by http::localhost:3000/product/anyName/whateverName
  