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
  PanelArrow,
  QuantityControl,
  IconLabel,
  IconDiv,
  SizesBox,
   
} from '../styles/styles';
import { useWindowSize } from '../../../context/WindowSizeContext';
import 'font-awesome/css/font-awesome.min.css';
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
  const [quantity, setQuantity] = useState(1); // Ürün adedini tutacak state
  const { isMobile, isTablet } = useWindowSize();

  const togglePanel = (panel: string) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  const BASE_URL = "https://fe1111.projects.academy.onlyjs.com";
  const imageUrl = `${BASE_URL}${product.variants[0].photo_src}`;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <Container>
      <LeftSection>
        <ProductImage src={imageUrl} alt={product.name} />
        
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
        <h3>Boyutlar</h3>
        <Sizes style={{ marginBottom:'30px',gap:'30px',display:'flex', flexDirection:'row'}}>
         
          {product.variants.map((variant) => (
            <SizesBox key={variant.id}   >
              <div style={{ fontSize:'14px',fontWeight: 'bold'}} >
                {variant.size.pieces} Adet - {variant.size.total_services} Porsiyon 
              </div>
             
            </SizesBox>
          ))}
        </Sizes>

        <div style={{ fontSize: '24px' ,display:'flex', flexDirection:'row'}}>
          <QuantityControl>
            
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </QuantityControl>
          <AddToCartButton><i className="fa fa-shopping-cart" style={{ fontSize: '24px', color: 'white' }}></i>SEPETE EKLE</AddToCartButton>
        </div>
        <IconDiv>
  <IconLabel>
    <i className="fa fa-truck" style={{ fontSize: '24px', color: '#000' }}></i>
    <span>Aynı gün ücretsiz kargo</span>
  </IconLabel>
  <IconLabel>
    <i className="fa fa-check" style={{ fontSize: '24px', color: '#000', marginRight: '5px' }}></i>
    <span>750.000+ mutlu müşteri</span>
  </IconLabel>
  <IconLabel>
    <i className="fa fa-thumbs-up" style={{ fontSize: '24px', color: '#000', marginRight: '5px' }}></i>
    <span>Memnuniyet Garantisi</span>
  </IconLabel>
</IconDiv>

        {!isMobile && (
          <Panels>
            <div>
              <PanelButton
                onClick={() => togglePanel('features')}
                className={activePanel === 'features' ? 'active' : ''}
              >
                ÖZELLİKLER
                <PanelArrow className={activePanel === 'features' ? 'active' : ''} />
              </PanelButton>
              {activePanel === 'features' && <PanelContent>{product.explanation.features}</PanelContent>}
            </div>

            <div>
              <PanelButton
                onClick={() => togglePanel('nutrition')}
                className={activePanel === 'nutrition' ? 'active' : ''}
              >
                BESİN İÇERİĞİ
                <PanelArrow className={activePanel === 'features' ? 'active' : ''} />
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
                <PanelArrow className={activePanel === 'features' ? 'active' : ''} />
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
