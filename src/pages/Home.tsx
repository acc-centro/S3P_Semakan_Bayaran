import React from 'react';
import { IonFooter, IonLabel, IonCard, IonText, IonButton, IonInput, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonCheckbox, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class = "ion-text-center"><h1>Semakan Bayaran</h1></IonTitle>
          <IonText class="ion-text-center"><p>kerajaan Negeri Sabah</p></IonText>
        </IonToolbar>
      </IonHeader>

<IonCard>
<IonCardContent>
<form className="ion-padding">
  <IonItem>
    <IonLabel position="floating">No.MyKad</IonLabel>
    <IonInput type ="text"  />
  </IonItem>

  <IonItem>
    <IonLabel position="floating">No.Akaun Bank</IonLabel>
    <IonInput type="number" maxlength={16} />
  </IonItem>

  <IonItem lines="none">
    <IonLabel>Remember Me</IonLabel>
    <IonCheckbox defaultChecked={true} slot="start" />
  </IonItem>

  <IonButton className="ion-margin-top" type="submit" expand="block">
    Cari Maklumat
  </IonButton>

</form>
</IonCardContent>
</IonCard>

<IonFooter>
<IonCardSubtitle class="ion-text-center">
    2022 © Kerajaan Negeri Sabah
  </IonCardSubtitle>
</IonFooter>
  </IonPage>


  );
};



export default Home;
