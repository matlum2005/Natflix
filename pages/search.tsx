import dynamic from "next/dynamic";

const Layout = dynamic(() => import('../components/Layout'));

export default function Search() {
    return (
        <Layout>
            <div style={{ padding: '6rem 3rem', color: '#fff' }}>
                <p>Search coming soon.</p>
            </div>
        </Layout>
    )
}