import { GetServerSideProps } from "next"
import { useRouter } from "next/router"



// This will be called on each request 
// ie no static html of this file will be saved
// This function will be executed on server

export const getServerSideProps: GetServerSideProps = async context => {
    // console.log("conytext is", context)
    return {
        props: {
            name:"Manoj Reddy",
            number: Math.random()
        }
    }
}




export default function ServerSideRendered(props) {
    const router = useRouter()
    return(
        <div>
            <h1>Hi Im server side redered Prop comp</h1>
            <h1>Name is {props.name}</h1>
            <h3>Random number: {props.number}</h3>
        </div>
    )
}