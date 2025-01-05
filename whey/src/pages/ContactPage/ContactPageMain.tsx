import React from "react";
import {
  Container,
  Title,
  DescriptionWrapper,
  Description,
  Form,
  LabelRow,
  Label,
  Input,
  TextArea,
  Button,
  
  DisclaimerBox,
  DisclaimerFirst,
  DisclaimerLast
} from "./styles/styles";

const ContactUsPageMain: React.FC = () => {
  return (
    <Container>
      <Title>Bize Ulaşın</Title>
      <DescriptionWrapper>
        <Description>Bize aşağıdaki iletişim formundan ulaşabilirsiniz.</Description>
      </DescriptionWrapper>
      <Form>
        <LabelRow>
          <Label htmlFor="name">
            <Input type="text" id="name" name="name" placeholder="Adınızı girin" />
          </Label>
          <Label htmlFor="surname">
            <Input type="text" id="surname" name="surname" placeholder="Soyadınızı girin" />
          </Label>
        </LabelRow>

        <Label htmlFor="email">
          <Input type="email" id="email" name="email" placeholder="E-posta adresinizi girin" />
        </Label>

        <Label htmlFor="message">
          <TextArea id="message" name="message" placeholder="Mesajınızı yazın" />
        </Label>

        <Button type="submit">Gönder</Button>
      </Form>
     <DisclaimerBox>
     <DisclaimerFirst>
        *Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00'a kadar verilen siparişler için geçerlidir. Siparişler kargoya verilince e-posta ve SMS ile bilgilendirme yapılır. 
      </DisclaimerFirst>
      <DisclaimerLast>
      Telefon ile 0850 303 29 89 numarasını arayarak da bizlere sesli mesaj bırakabilirsiniz. Sesli mesajlarınıza hafta içi saat 09:00-17:00 arasında dönüş sağlanmaktadır.    
        </DisclaimerLast>
     </DisclaimerBox>
    </Container>
  );
};

export default ContactUsPageMain;
