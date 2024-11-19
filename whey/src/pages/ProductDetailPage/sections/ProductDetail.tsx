import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import {
  Container,
  LeftSection,
  ProductImage,
  Panels,
  PanelButton,
  PanelContent,
  RightSection,
  Ratings,
  Aromas,
  Sizes,
  AddToCartButton,
} from '../styles/styles';
import { useWindowSize } from '../../../context/WindowSizeContext'; // Context'i ekle

interface ProductDetail {
  id: string;
  name: string;
  slug: string;
  short_explanation: string;
  explanation: {
    usage: string;
    features: string;
    description: string;
    nutritional_content: {
      ingredients: { aroma: string | null; value: string }[]; 
      nutrition_facts: { ingredients: { name: string; amounts: string[] }[]; portion_sizes: string[]; };
      amino_acid_facts: null;
    };
  };
  tags: string[];
  variants: {
    id: string;
    size: { pieces: number; total_services: number };
    aroma: string;
    price: { total_price: number; discounted_price: number | null; price_per_servings: number; discount_percentage: number | null };
    photo_src: string;
    is_available: boolean;
  }[]; 
}

function ProductDetail() {
    const product = useLoaderData() as ProductDetail;
    const [activePanel, setActivePanel] = useState<string | null>(null);
    const { isMobile, isTablet } = useWindowSize(); // Ekran boyutunu al
  
    const togglePanel = (panel: string) => {
      setActivePanel((prev) => (prev === panel ? null : panel));
    };
  
    const BASE_URL = "https://fe1111.projects.academy.onlyjs.com";
    const imageUrl = `${BASE_URL}${product.variants[0].photo_src}`;
  
    return (
      <Container>
        <LeftSection>
          <ProductImage src={imageUrl} alt={product.name} />
          {!isTablet && (
            <Panels>
              <div>
                <PanelButton
                  onClick={() => togglePanel('features')}
                  className={activePanel === 'features' ? 'active' : ''}
                >
                  ÖZELLİKLER
                </PanelButton>
                {activePanel === 'features' && <PanelContent>{product.explanation.features}</PanelContent>}
              </div>
  
              <div>
                <PanelButton
                  onClick={() => togglePanel('nutrition')}
                  className={activePanel === 'nutrition' ? 'active' : ''}
                >
                  BESİN İÇERİĞİ
                </PanelButton>
                {activePanel === 'nutrition' && (
                  <PanelContent>
                    <ul>
                      {product.explanation.nutritional_content.ingredients.map((item, index) => (
                        <li key={index}>
                          {item.aroma}: {item.value}
                        </li>
                      ))}
                    </ul>
                  </PanelContent>
                )}
              </div>
  
              <div>
                <PanelButton
                  onClick={() => togglePanel('usage')}
                  className={activePanel === 'usage' ? 'active' : ''}
                >
                  KULLANIM ŞEKLİ
                </PanelButton>
                {activePanel === 'usage' && <PanelContent>{product.explanation.usage}</PanelContent>}
              </div>
            </Panels>
          )}
        </LeftSection>
        <RightSection>
          <h1>{product.name}</h1>
          <p>{product.short_explanation}</p>
          <Ratings>
            <span>⭐⭐⭐⭐⭐</span>
            <span>123 yorum</span>
          </Ratings>
  
          <Aromas>
            <h3>Aroma Seçenekleri</h3>
            <ul>
              {product.variants.map((variant) => (
                <li key={variant.id}>{variant.aroma}</li>
              ))}
            </ul>
          </Aromas>
  
          <Sizes>
            <h3>Boyutlar</h3>
            {product.variants.map((variant) => (
              <div key={variant.id}>
                <span>
                  {variant.size.pieces} parça - {variant.size.total_services} porsiyon
                </span>
                <span>
                  Fiyat: {variant.price.discounted_price || variant.price.total_price} ₺
                </span>
              </div>
            ))}
          </Sizes>
  
          <AddToCartButton>Sepete Ekle</AddToCartButton>
  
          {isTablet && (
            <Panels>
              <div>
                <PanelButton
                  onClick={() => togglePanel('features')}
                  className={activePanel === 'features' ? 'active' : ''}
                >
                  ÖZELLİKLER
                </PanelButton>
                {activePanel === 'features' && <PanelContent>{product.explanation.features}</PanelContent>}
              </div>
  
              <div>
                <PanelButton
                  onClick={() => togglePanel('nutrition')}
                  className={activePanel === 'nutrition' ? 'active' : ''}
                >
                  BESİN İÇERİĞİ
                </PanelButton>
                {activePanel === 'nutrition' && (
                  <PanelContent>
                    <ul>
                      {product.explanation.nutritional_content.ingredients.map((item, index) => (
                        <li key={index}>
                          {item.aroma}: {item.value}
                        </li>
                      ))}
                    </ul>
                  </PanelContent>
                )}
              </div>
  
              <div>
                <PanelButton
                  onClick={() => togglePanel('usage')}
                  className={activePanel === 'usage' ? 'active' : ''}
                >
                  KULLANIM ŞEKLİ
                </PanelButton>
                {activePanel === 'usage' && <PanelContent>{product.explanation.usage}</PanelContent>}
              </div>
            </Panels>
          )}
        </RightSection>
      </Container>
    );
  }
  
  export default ProductDetail;