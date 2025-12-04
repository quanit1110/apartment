import React from 'react'

import { useState } from "react";

export default function Carousel({ imageUrls }) {
    // const images = [
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4Pd54iwS6Fdy284e7CZpMRdjalE-WxzCh4UaXHXU71Z5TkrOS0CfpqHTW3BcsK3XR1UpPUDXzeDqx7JbKeqTq_1ok9O1kekU3nNawsGxOsRDIfIaAIzQDibKD5f61vypCSdXP9jGIMN5E1yv0gOMAnZVTdVxXVEU9upgxWbwP6zuxQu_bKGuUABCZ8iN2QxiCh4qfD7oEgLKvS3mKTd9VoSyY09VsmMrY5mokplUehKTAxAyU_L0ZZZKE-LvWyujXNaPVy4BuL_s",
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDxKRkuNgH31_h81Kg2V0jefaJjGRzEcOkoGKlMqreGX8JsdDC3dSmlAtNSf4q-wMghCrWdtjJJptqfaHf8XGMC3KehloBBzODV2zqSeGlqReKh-U0VmNQWL7af8Q-GR4vW-lOQu4PX9hibpjjirqJldjsUfFAlN26shrzoVBZgqlkI4vse8nUmNvzx60Q8AG6VflIOmzSimBCkwf7w_GCYj6RgzQR6llQtxSVwjMwravkMjXy0OgCXJqP76uNi4vk7dSU5VBLF4arb",
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuC5gu2gKKMTwo7foQBYJxkth09wOhEei9R1S6ZEAWf2yCvxm83oKmmWleFpUnDAcGxu1-u5jNEr_APPqMaJrgWihAKQr41_9bRPDXNj1w4CAtTtQQLqQ5sUWMqRvbzchFxLGDzUktvs8L8j6h5-r-xI7yLnTr3DIhRdHZjgq6MjpITJRl6ra3Myveggh7VN4BH_89ntOpBDs8nTiQ-ZqMjiPbnM8krWa2tDKcHCWPBJA9iAkH3oOMYkbD_4zxPnnVtthcIlISW4-plv",
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuC5gu2gKKMTwo7foQBYJxkth09wOhEei9R1S6ZEAWf2yCvxm83oKmmWleFpUnDAcGxu1-u5jNEr_APPqMaJrgWihAKQr41_9bRPDXNj1w4CAtTtQQLqQ5sUWMqRvbzchFxLGDzUktvs8L8j6h5-r-xI7yLnTr3DIhRdHZjgq6MjpITJRl6ra3Myveggh7VN4BH_89ntOpBDs8nTiQ-ZqMjiPbnM8krWa2tDKcHCWPBJA9iAkH3oOMYkbD_4zxPnnVtthcIlISW4-plv"
    // ];
    const images = imageUrls;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative flex flex-col gap-4 px-4">
            {/* Ảnh chính */}
            <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
                <img
                    alt="Ảnh chính"
                    className="h-full w-full object-cover cursor-pointer"
                    src={images[currentIndex]}
                    onClick={() => setIsOpen(true)} // mở modal khi click
                />
                {/* Nút Prev */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2"
                >
                    ◀
                </button>
                {/* Nút Next */}
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2"
                >
                    ▶
                </button>
            </div>

            {/* Thumbnail */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`group relative aspect-video w-full overflow-hidden rounded-lg ring-2 ${currentIndex === idx ? "ring-primary" : "ring-transparent"
                            }`}
                    >
                        <img alt={`Thumbnail ${idx}`} className="h-full w-full object-cover" src={img} />
                    </button>
                ))}
            </div>

            {/* Modal Lightbox */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-white text-2xl"
                    >
                        ✖
                    </button>
                    <div className="relative">
                        <img
                            src={images[currentIndex]}
                            alt="Zoom ảnh"
                            className="max-h-[80vh] max-w-[90vw] object-contain"
                        />
                        {/* Prev trong modal */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2"
                        >
                            ◀
                        </button>
                        {/* Next trong modal */}
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

