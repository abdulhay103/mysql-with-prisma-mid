export async function generateMetadata() {
    return { title: "Blog" };
}
export default function BlogLayout({ children }) {
    return <div>{children}</div>;
}
