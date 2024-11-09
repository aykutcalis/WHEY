// src/pages/AccountInfoPage/AccountInfoPageMain.tsx

import { useLoaderData } from 'react-router-dom';

function AccountInfoPageMain() {
  const user = useLoaderData();  // Loader'dan gelen kullanıcı verisini alıyoruz

  if (!user) {
    return <div>User data not found.</div>;  // Kullanıcı verisi yoksa bir hata mesajı
  }

  return (
    <div>
      <h1>Account Information</h1>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      {/* Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz */}
    </div>
  );
}

export default AccountInfoPageMain;
