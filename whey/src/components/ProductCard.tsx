import React from 'react';
import {
  BottomStyledCard,
  StyledCardImgBottom,
  ContentTitle,
  ContentDescription,
  RatingStars,
  Comments,
  Price,
  DiscountBox,
} from '../styles/styles';

// Ürün veri tipi
interface Product {
  name: string;
  short_explanation: string;
  photo_src: string;
  price_info: {
    total_price: number;
    discounted_price?: number;
    discount_percentage?: number;
  };
  comment_count: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <BottomStyledCard>
      {product.price_info.discount_percentage && (
        <DiscountBox>%{product.price_info.discount_percentage} İNDİRİM</DiscountBox>
      )}
      <StyledCardImgBottom variant="top" src={product.photo_src} alt={product.name} />
      <ContentTitle>{product.name}</ContentTitle>
      <ContentDescription>{product.short_explanation}</ContentDescription>
      <RatingStars>★★★★★</RatingStars>
      <Comments>{product.comment_count} YORUM</Comments>
      <Price>
        {product.price_info.discounted_price ? (
          <>
            <span className="discounted">{product.price_info.discounted_price} TL</span>
            <span className="original-price">{product.price_info.total_price} TL</span>
          </>
        ) : (
          `${product.price_info.total_price} TL`
        )}
      </Price>
    </BottomStyledCard>
  );
};

export default ProductCard;
