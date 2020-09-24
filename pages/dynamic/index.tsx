import { GetStaticProps } from "next"
import path from 'path';


// This function will be called on Server & it won't execute on client
// Server just passes the dynamic content to our comp
// Looks wise this is more similaer to Connect HOC from redux
// Now we can access name as PROPS in our comp

export const getStaticProps: GetStaticProps = async context => {
    
    const fs = require('fs');
    const filePath = path.join(process.cwd(), 'public/robo.txt')
    const text = fs.readFileSync(filePath, 'utf8')
    return {
        props: {
            name: "Manoj Reddy",
            // read text from file robots.txt under public folder
            text: text,
            number: Math.random()
        }
    }
}

export default function Dynamic(props) {
    return(
        <div>
            <h1>Hello I'm a dynamic page where my dynamic content is served from server </h1>
            <h2>Dynamically generated Name: {props.name}</h2>
             <p>Im robots text : ==> {props.text}</p>
             <h5>Number is {props.number}</h5>
        </div>
    )
}