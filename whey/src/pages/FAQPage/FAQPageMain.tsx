import React, { useState } from 'react';
import { FAQContainer,CategoryContainer,CategoryButton,SelectedCategoryHeader,QuestionList,QuestionItem,PlusIcon } from './styles/styles';

const questions = {
  genel: [
    'OJS Nutrition ürünlerinin menşei neresi?',
    'Yüksek proteinli ürünleri kimler kullanabilir?',
    'Hangi sertifikalarınız var?',
    'Satılan ürünler garantili midir? Değişim var mı?',
    'Sipariş verirken sorun yaşıyorum, ne yapmam gerekir?',
    'OJS Nutrition ürünleri nerede satılıyor?',
    'Taksit seçeneği neden yok?',
    'Siparişimi nasıl iptal edebilirim?',
    'Kapağın altındaki folyo açılmış veya tam yapışmamış gibi duruyor?',
    'Sattığınız ürünler ilaç mıdır?',
    'Siparişimi teslim alırken nelere dikkat etmeliyim?',
    'Kapıda ödeme hizmetiniz var mı?',
    'Sipariş takibimi nasıl yapabilirim?',
    'İptal ve İade ettiğim ürünlerin tutarı hesabıma ne zaman aktarılır?'
  ],
  urunler: [
    'Hangi ürünler vegan dostudur?',
    'Protein tozlarının yan etkileri var mı?',
    'Ürünler nasıl saklanmalıdır?'
  ],
  kargo: [
    'Kargo süresi ne kadar sürüyor?',
    'Hangi kargo şirketleriyle çalışıyorsunuz?',
    'Kargom hasarlı gelirse ne yapmalıyım?'
  ]
};

const categoryIcons = {
  genel: 'https://via.placeholder.com/24?text=G',
  urunler: 'https://via.placeholder.com/24?text=U',
  kargo: 'https://via.placeholder.com/24?text=K'
};

const FAQPageMain: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'genel' | 'urunler' | 'kargo'>('genel');

  return (
    <FAQContainer>
      <CategoryContainer>
        {Object.keys(questions).map((category) => (
          <CategoryButton
            key={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category as 'genel' | 'urunler' | 'kargo')}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryButton>
        ))}
      </CategoryContainer>

      <SelectedCategoryHeader>
        <img src={categoryIcons[activeCategory]} alt={activeCategory} />
        <h2>{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</h2>
      </SelectedCategoryHeader>

      <QuestionList>
        {questions[activeCategory].map((question, index) => (
          <QuestionItem key={index}>
            {question}
            <PlusIcon>+</PlusIcon>
          </QuestionItem>
        ))}
      </QuestionList>
    </FAQContainer>
  );
};

export default FAQPageMain;
