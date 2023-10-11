import PageHeader from "@/components/PageHeader";

export default function Home() {
    return (
        <main className="">
            <PageHeader
                pageHeader={{
                    title: "Home",
                    subTitle: "home",
                }}
            />
            <h1>Home Page1</h1>
        </main>
    );
}
