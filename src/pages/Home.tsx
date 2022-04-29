import React from 'react';
import {
  IonFooter, 
  IonLabel, 
  IonCard,
  IonText, 
  IonButton, 
  IonInput, 
  IonHeader, 
  IonItem, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCardSubtitle, 
  IonCardContent, 
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonDatetime,
  IonThumbnail

} from '@ionic/react';

import './Home.css';
import { IonIcon } from '@ionic/react';
import { search} from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage>
    <style>{"body { background-color: #93CAED; }"}</style>
    <IonCard color="dark">

       <IonHeader>
        <IonToolbar color="primary">
        <IonGrid>
           <IonRow>
             <IonCol size="3" offset="4.5" >
               <IonImg src='https://s3p.sabah.gov.my/assets/message.svg' />
             </IonCol>
           </IonRow>
         </IonGrid>
          <IonTitle class = "ion-text-center"><h1><b>SEMAKAN BAYARAN</b></h1></IonTitle>
          <IonText class="ion-text-center"><p><b>kerajaan Negeri Sabah</b></p></IonText>
        </IonToolbar>
      </IonHeader>


<IonCardContent >
    <form className="ion-padding" method="post" action="pages/Lists.tsx">

  <IonItem color="dark">
    <IonLabel position="floating" color="light">No.Kad Pengenalan</IonLabel>
    <IonInput type="text" />
  </IonItem>

  <IonItem color="dark">
    <IonLabel position="floating" color="light">No.Akaun Bank</IonLabel>
    <IonInput type="number" maxlength={16} />
  </IonItem >

  <IonButton className="ion-margin-top" type="submit" expand="block" href="/Lists">   
    <IonIcon icon={search} slot="start" />
      Cari Maklumat
  </IonButton>

    </form>
  </IonCardContent>

</IonCard>

  <IonFooter>
    <IonCardSubtitle class="ion-text-center"  color="light">
      2022 © Kerajaan Negeri Sabah
    </IonCardSubtitle>
  </IonFooter>

</IonPage>


  );
};



export default Home;
