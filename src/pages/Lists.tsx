import { 
  IonCard,
  IonCardContent,
   IonHeader, 
   IonPage, 
   IonTitle, 
   IonToolbar,
   IonFooter,
   IonCardSubtitle,
   IonButtons,
   IonBackButton,
   IonItem
  } from '@ionic/react';
import React from 'react';
import './Home.css';

const Lists: React.FC = () => {
  return (
    <IonPage>
      <style>{"body { background-color: #93CAED; }"}</style>
      <IonCard>

      <IonHeader>
        <IonToolbar color="primary">

        <IonButtons slot="start">
          <IonBackButton defaultHref="Home" />
        </IonButtons>

          <IonTitle>Senarai Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonItem color="dark">
      <IonCardContent className="ion-padding" color="light" >Voucher details goes here</IonCardContent>
      </IonItem>
      <IonItem color="dark">
      <IonCardContent className="ion-padding" color="light" >masi html mcm prlu loop ni</IonCardContent>
      </IonItem>
      <IonItem color="dark">
      <IonCardContent className="ion-padding" color="light" >main2 dulu nnti bru try blik </IonCardContent>
      </IonItem>

      </IonCard>

  <IonFooter>
    <IonCardSubtitle class="ion-text-center" color="light">
      2022 © Kerajaan Negeri Sabah
    </IonCardSubtitle>
  </IonFooter>
    </IonPage>
  );
};
export default Lists;