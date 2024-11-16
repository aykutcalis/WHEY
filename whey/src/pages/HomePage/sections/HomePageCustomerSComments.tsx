import React from 'react';
import { useWindowSize, WindowSizeContextType } from '../../../context/WindowSizeContext';

const HomePageCustomerSComments = () => {
  const { isMobile, isTablet } = useWindowSize() as WindowSizeContextType;

  return (
    <div className="container my-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="fw-bold">GERÇEK MÜŞTERİ YORUMLARI</h2>
        </div>
        <div className="col-12 col-md-4 text-md-end">
          <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex align-items-center">
              <span className="text-warning">⭐⭐⭐⭐⭐</span>
              <span className="ms-2">198989 Yorum</span>
            </div>
          </div>
        </div>
        <hr className="mt-3" />
      </div>

      {/* Kullanıcı yorumlarını göstermek için Flexbox */}
      <div className="d-flex flex-wrap justify-content-between">
        {[...Array(isMobile ? 2 : isTablet ? 3 : 4)].map((_, index) => (
          <div
            key={index}
            className={`${
              isMobile ? 'col-6' : isTablet ? 'col-md-4' : 'col-md-3'
            } mb-4 d-flex flex-column`}
          >
            <div className="card p-3  border-0 w-100">
              <p className="text-muted">2024-11-09</p>
              <h5 className="fw-bold">Beğendim Gayet güzeldi</h5>
              <p className="text-muted">
                Ürün gayet güzel ama ekşiliği bir süreden sonra bayabiliyor insanı. Teşekkürler.
              </p>
              {/* Dummy isim ekleniyor */}
              <p className="text-start mt-2 text-muted">Burhan K.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageCustomerSComments;
