// src/loaders/accountInfoLoader.ts
export async function accountInfoLoader({ params }: any) {
    const userId = params.userId;  // URL'den gelen kullanıcı ID'sini alıyoruz
    
    try {
      // API'ye istek atıyoruz. Örneğin:
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const userData = await response.json();
      return userData;  // Kullanıcı verisini döndürüyoruz.
    } catch (error) {
      console.error(error);
      return null;  // Hata durumunda null döndürebiliriz.
    }
  }
  