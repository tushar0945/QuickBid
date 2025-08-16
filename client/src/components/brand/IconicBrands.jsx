import React from "react";

const brands = [
  { name: "Porsche", link: "#/brands/porsche" },
  { name: "Märklin", link: "#/brands/marklin" },
  { name: "The Macallan", link: "#/brands/macallan" },
  { name: "Hermès", link: "#/brands/hermes" },
  { name: "Christofle", link: "#/brands/christofle" },
  { name: "Pokémon", link: "#/brands/pokemon" },
  { name: "Cartier", link: "#/brands/cartier" },
  { name: "LEGO", link: "#/brands/lego" },
  { name: "OMEGA", link: "#/brands/omega" },
  { name: "Rolex", link: "#/brands/rolex" },
  { name: "Nikon", link: "#/brands/nikon" },
  { name: "Louis Vuitton", link: "#/brands/louisvuitton" },
];

export default function IconicBrands() {
  return (
    <section className="px-4 py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700 font-serif">
          Explore <span className="text-black">Iconic Brands</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.link}
              className="block p-6 bg-gray-100 rounded-md text-center text-sm font-medium text-gray-800 hover:bg-gray-200 shadow hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {brand.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
