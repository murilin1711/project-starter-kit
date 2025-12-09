"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const StoreLocator = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    // Coordenadas da loja
    const empresa = {
      lat: -16.328470,
      lng: -48.952870
    };

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/dataviz-light/style.json?key=1gXFt9mkSWAwobaSVONk`,
      center: [empresa.lng, empresa.lat],
      zoom: 16
    });

    // Adiciona controles de zoom
    map.current.addControl(new maplibregl.NavigationControl());

    // Marcador vermelho
    new maplibregl.Marker({ color: "red" })
      .setLngLat([empresa.lng, empresa.lat])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="bg-background-secondary py-10 lg:py-[75px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Column: Content */}
            <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center">
              <div className="bg-background-secondary rounded-lg p-6 lg:p-8 mb-8">
                <h2 className="text-3xl lg:text-[40px] font-medium text-text-primary mb-6 leading-none tracking-[-0.02em] !whitespace-pre-line">Nossa loja

                </h2>
                <p className="text-base text-text-secondary leading-tight mb-5 tracking-[-0.02em]">
                  Digite seu CEP e descubra a loja Osklen mais próxima de você:
                </p>
              </div>

              <div>
                <p className="text-base text-text-secondary tracking-[-0.02em]">
                  82 lojas, 41 Cidades
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Map */}
            <div className="lg:col-span-3 relative min-h-[300px] md:min-h-[400px] lg:min-h-full">
              <div 
                ref={mapContainer} 
                className="absolute inset-0 w-full h-full rounded-xl"
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;