import RelatedServices from "@/components/RelatedServices";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <RelatedServices />
        </>
    );
}
