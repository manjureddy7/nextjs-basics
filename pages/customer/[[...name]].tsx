import Link from "next/link";
import { useRouter } from 'next/router';

export default function Customer() {
    const router = useRouter();
    console.log("router is", router)
    return (
      <div>
        <h1>Hi I'm Customer Page!!</h1>
        <Link href="/">Back</Link>
      </div>
    )
}

// If our application is so deeply nested with dynamic routes
// We can't keep on creating dynamic folder right ?
// This approach is called CATCH - ALL - ROUTES
// if our url is http://localhost:3000/customer/abc/xyz/name/age
// we will get all routes as 
// {
    // query: {
        // name: [abc,xyz,name,age]
    //}
//}

// But if we go to just http://localhost:3000/customer  urle we will get 404 error
// in order to catch all routes belonging to customer
// we could simply change
// [...name].tsx => [[...name.tsx]]
// by placing extra square paranthesis we are telling next js to include this comp for all
// '/customer' routes
  