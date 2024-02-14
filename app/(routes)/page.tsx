import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import getProduct from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProduct({isFeatured: true});
    const billboard = await getBillboard("d63974b1-8049-4711-9694-fd34f9584cc0");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    data={billboard}
                />
                <div className={"flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"}>
                    <ProductList title={"Featured Product"} items={products}/>
                </div>
            </div>

        </Container>
    )
};

export default HomePage;