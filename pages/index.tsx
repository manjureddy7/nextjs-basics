import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hi I'm Home Page!!</h1>
      <Link href="/about"><a>About</a></Link>
      <Link href="/about/about2"><a>About 2</a></Link>
      <Link href="/help">Help</Link>
    </div>
  )
}
