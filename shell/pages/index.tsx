import { Dato, ProductCard } from "@/components/home/ProductCard";

export default function Home() {

  const datos: Dato[] = [
    { slug: "/normas", titulo: "Normas", descripcion: "Normas desc" },
    { slug: "/prevencion", titulo: "Prevención", descripcion: "Prevencion desc" },
  ]

  return (
    <>
      <h1>Bienvenidos</h1>
      {
        datos.map(d =>
          <ProductCard key={d.slug} data={d}></ProductCard>
        )
      }
    </>
  );
}
