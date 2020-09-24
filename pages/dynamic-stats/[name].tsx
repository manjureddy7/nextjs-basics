import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";


export const getStaticProps: GetStaticProps = async context => {
    
    return {
        props: {
            name: "Manoj Reddy",
        }
    }
}

// getStaticProps runs at build time not at run time
// so this function runs on server and then provides the component the required things

// If we add param object with name in the paths like below
// http:localhost:3000/dynamic-stats/1 -> take the output and store it on disk
// http:localhost:3000/dynamic-stats/2 -> take the output and store it on disk

// apart from above names of 1,2 if we try to enter any route :3000/dynamic-stats/anything
// we will get page not found if fallback is false

// when we make fallback as true & then try to fetch any page on the route

// http:localhost:3000/dynamic-stats/anything => call the getStaticProp on the server => render page
// => in background Next.js will add this route to its path list for faster access
// so next time when user visists the same route, next js will directly sends the file instead of
// calculating on the server

// Now path will be after calling // http:localhost:3000/dynamic-stats/anything

// paths: [
//     {
//         params:{name: '1'}
//     },
//     {
//         params:{name: '2'}
//     },
//     {
//         params:{name: 'anything'}
//     }
// ],


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params:{name: '1'}
            },
            {
                params:{name: '2'}
            }
        ],
        fallback: true
    }
}


export default function DynamicStats(props) {
    const router = useRouter()
    if(router.isFallback) {
        return (<h1>Loading.....</h1>)
    }
    return(
        <div>
            <h1>Name is {props.name}</h1>
        </div>
    )
}