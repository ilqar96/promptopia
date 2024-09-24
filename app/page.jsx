import Link from "@node_modules/next/dist/client/link";

const Home = () =>{
    return(
        <>

            <nav>
                <Link className='bg-red-100 border-2' href={'/work'}>Work page</Link>
            </nav>

            <div>
                <h2>Home page next js 14 test</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut corporis earum et ipsam nihil non nulla odit officia rem repellendus, tempore totam. Dolore obcaecati officia provident quas tenetur!</p>
            </div>

        </>
    )
}

export default Home
