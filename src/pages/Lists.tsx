import { 
  IonCard,
  IonCardContent,
   IonHeader, 
   IonPage, 
   IonTitle, 
   IonToolbar,
   IonFooter,
   IonCardSubtitle
  } from '@ionic/react';
import React from 'react';
import './Home.css';
import { IonIcon } from '@ionic/react';
import { search} from 'ionicons/icons';

const Lists: React.FC = () => {
  return (
    <IonPage>
      <style>{"body { background-color: #93CAED; }"}</style>
      <IonCard>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Senarai Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCardContent className="ion-padding">Hello World</IonCardContent>

      </IonCard>

  <IonFooter>
    <IonCardSubtitle class="ion-text-center"  color="light">
      2022 © Kerajaan Negeri Sabah
    </IonCardSubtitle>
  </IonFooter>
    </IonPage>
  );
};
export default Lists;