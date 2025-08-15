// // import React from "react";

// // const brands = [
// //   {
// //     name: "Porsche",
// //     image: "../../public/Logos/porsche.png",
// //     link: "#/brands/porsche",
// //   },
// //   {
// //     name: "Märklin",
// //     image: "../../public/Logos/porsche.png",
// //     link: "#/brands/marklin",
// //   },
// //   {
// //     name: "The Macallan",
// //     image: "https://upload.wikimedia.org/wikipedia/en/8/81/Macallan_logo.svg",
// //     link: "#/brands/macallan",
// //   },
// //   {
// //     name: "Hermès",
// //     image:
// //       "https://upload.wikimedia.org/wikipedia/commons/b/b3/Hermes_logo.svg",
// //     link: "#/brands/hermes",
// //   },
// //   {
// //     name: "Christofle",
// //     image:
// //       "https://upload.wikimedia.org/wikipedia/commons/2/23/Christofle_logo.svg",
// //     link: "#/brands/christofle",
// //   },
// //   {
// //     name: "Pokémon",
// //     image:
// //       "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
// //     link: "#/brands/pokemon",
// //   },
// //   {
// //     name: "Cartier",
// //     image:
// //       "https://upload.wikimedia.org/wikipedia/commons/7/79/Cartier_logo.svg",
// //     link: "#/brands/cartier",
// //   },
// //   {
// //     name: "LEGO",
// //     image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/LEGO_logo.svg",
// //     link: "#/brands/lego",
// //   },
// //   {
// //     name: "OMEGA",
// //     image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Omega_Logo.svg",
// //     link: "#/brands/omega",
// //   },
// //   {
// //     name: "Rolex",
// //     image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Rolex_Logo.svg",
// //     link: "#/brands/rolex",
// //   },
// //   {
// //     name: "Nikon",
// //     image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Nikon_Logo.svg",
// //     link: "#/brands/nikon",
// //   },
// //   {
// //     name: "Louis Vuitton",
// //     image:
// //       "https://upload.wikimedia.org/wikipedia/commons/8/84/Louis_Vuitton_Logo.svg",
// //     link: "#/brands/louisvuitton",
// //   },
// // ];

// // export default function IconicBrands() {
// //   return (
// //     <section className="p-6">
// //       <h2 className="text-xl font-semibold mb-4">Iconic brands</h2>
// //       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
// //         {brands.map((brand, index) => (
// //           <a
// //             key={index}
// //             href={brand.link}
// //             className="bg-gray-100 p-4 rounded-md flex items-center justify-center hover:shadow-md transition"
// //           >
// //             <img
// //               src={brand.image}
// //               alt={brand.name}
// //               className="max-h-12 object-contain"
// //             />
// //           </a>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// import React from "react";

// const brands = [
//   { name: "Porsche", link: "#/brands/porsche" },
//   { name: "Märklin", link: "#/brands/marklin" },
//   { name: "The Macallan", link: "#/brands/macallan" },
//   { name: "Hermès", link: "#/brands/hermes" },
//   { name: "Christofle", link: "#/brands/christofle" },
//   { name: "Pokémon", link: "#/brands/pokemon" },
//   { name: "Cartier", link: "#/brands/cartier" },
//   { name: "LEGO", link: "#/brands/lego" },
//   { name: "OMEGA", link: "#/brands/omega" },
//   { name: "Rolex", link: "#/brands/rolex" },
//   { name: "Nikon", link: "#/brands/nikon" },
//   { name: "Louis Vuitton", link: "#/brands/louisvuitton" },
// ];

// export default function IconicBrands() {
//   return (
//     <section className="p-6">
//       <h2 className="text-xl font-semibold mb-4">Iconic brands</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {brands.map((brand, index) => (
//           <a
//             key={index}
//             href={brand.link}
//             className="bg-gray-100 p-6 rounded-md text-center text-sm font-medium text-gray-800 hover:bg-gray-200 transition"
//           >
//             {brand.name}
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

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
