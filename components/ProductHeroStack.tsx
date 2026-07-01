import ProductCover from "./ProductCover";

const products = [
  { label: "01", title: "O Código do Silêncio" },
  { label: "02", title: "A Virada do Tabuleiro" },
  { label: "03", title: "O Arquivo Secreto dos Cafajestes" },
  { label: "04", title: "Os Gatilhos do Vínculo Profundo" },
  { label: "05", title: "O Xeque-Mate" },
  { label: "★", title: "O Botão de Emergência", isBonus: true },
];

export default function ProductHeroStack() {
  return (
    <div className="w-full">
      <div className="flex gap-4 overflow-x-auto snap-x-mandatory pb-4 -mx-1 px-1 md:hidden">
        {products.map((p) => (
          <div key={p.label} className="flex-shrink-0 snap-center">
            <ProductCover
              label={p.label}
              title={p.title}
              size="lg"
              isBonus={p.isBonus}
            />
          </div>
        ))}
      </div>

      <div className="hidden md:block relative w-full h-[460px]">
        {products.map((p, i) => {
          const offsets = [
            { x: -165, y: 24, r: -11, z: 10 },
            { x: -99, y: 10, r: -6, z: 20 },
            { x: -33, y: 18, r: -1, z: 30 },
            { x: 33, y: 6, r: 4, z: 40 },
            { x: 99, y: 16, r: 9, z: 50 },
            { x: 165, y: 28, r: 13, z: 60 },
          ];
          const o = offsets[i];
          return (
            <div
              key={p.label}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${o.x}px), calc(-50% + ${o.y}px)) rotate(${o.r}deg)`,
                zIndex: o.z,
              }}
            >
              <ProductCover
                label={p.label}
                title={p.title}
                size="xl"
                isBonus={p.isBonus}
              />
            </div>
          );
        })}
      </div>

      <p className="text-center font-sans text-sm text-gray-500 tracking-wide mt-3">
        5 volumes + bônus • Coleção completa
      </p>
    </div>
  );
}

export { products };
