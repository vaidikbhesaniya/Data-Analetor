import DashboardLayout from "@/components/dashboard";

//get all products
async function extractAllProducts() {
  const res = await fetch("/app/api/product/all-products", {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

//get all visitors list

async function extractAllVisitors() {
  const res = await fetch("/app/api/visitors/all-visitors", {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

export default async function Home() {
  const allProducts = await extractAllProducts();
  const allVisitors = await extractAllVisitors();

  return (
    <DashboardLayout allProducts={allProducts && allProducts.data} allVisitors={allVisitors && allVisitors.data} />
  );
}
