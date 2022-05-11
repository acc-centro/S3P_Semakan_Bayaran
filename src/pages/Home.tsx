import React, {useState} from 'react';
import {
  IonFooter, 
  IonLabel, 
  IonCard,
  IonText, 
  IonButton, 
  IonInput, 
  IonItem, 
  IonPage, 
  IonCardSubtitle, 
  IonCardContent, 
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,

} from '@ionic/react';

import axios from "axios";
import { useHistory } from "react-router-dom";
import './Home.css';
import { IonIcon } from '@ionic/react';
import { search} from 'ionicons/icons';


const Home: React.FC = () => {
  const history = useHistory();
  const [mykad, setMyKad] = useState<string>("990227125672");
  const [akaun_bank, setAkaunBank] = useState<string>("10016027837636");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleLogin = () => {
    if (!mykad){
      setMessage("Please enter the correct identification number");
      setIserror(true);
      return;
    }
    if (!akaun_bank || akaun_bank.length < 14) {
      setMessage("Please enter your bank account number");
      setIserror(true);
      return;
    }

    const loginData = {
      "mykad":mykad,
      "akaun_bank":akaun_bank
    }
    const api = axios.create({
      baseURL: 'https://s3p.sabah.gov.my/api/vouchers'
    })
    api.post("/vouchers", loginData)
      .then(res => {
        history.push("/lists/" + mykad);
      })
      .catch(error=> {
        setMessage("Authentication failure! Make sure your login data is correct.");
        setIserror(true);
      })
  };

  return (
    <IonPage>
    <style>{"body { background-color: #428cff; }"}</style>
     
    <IonGrid>
      <IonRow>
        <IonCol size="3" offset="4.5" >
          <IonImg src='https://s3p.sabah.gov.my/assets/message.svg' />
        </IonCol>
      </IonRow>
     <IonText class = "ion-text-center"><h1><b>SEMAKAN BAYARAN</b></h1><p>kerajaan Negeri Sabah</p></IonText>

  <IonCard color="dark" class="card">
  <IonCardContent  >

  <IonRow>
    <IonCol>
      <IonAlert
        isOpen={iserror}
        onDidDismiss={() => setIserror(false)}
        cssClass="my-custom-class"
        header={"Error!"}
        message={message}
        buttons={["Dismiss"]}/>

  <form className="ion-padding" method="post" action="pages/Lists.tsx">

  <IonItem color="dark">
    <IonLabel position="floating" color="light">No.Kad Pengenalan</IonLabel>
      <IonInput 
      type="text"
      value={mykad}
      onIonChange={(e) => setMyKad(e.detail.value!)}
     />
  </IonItem>

  <IonItem color="dark">
    <IonLabel position="floating" color="light">No.Akaun Bank</IonLabel>
      <IonInput 
      type="number" 
      maxlength={16} 
      value={akaun_bank}
      onIonChange={(e) => setAkaunBank(e.detail.value!)}
      />
  </IonItem >

  <IonButton className="ion-margin-top" onClick={handleLogin} expand="block">   
    <IonIcon icon={search} slot="start" />
      Cari Maklumat
  </IonButton>

    </form>
    </IonCol>
  </IonRow>
  </IonCardContent>
  </IonCard>
    </ IonGrid>

  <IonFooter class="ion-text-center" color="light">
    <IonCardSubtitle class="ion-text-center" color="light">
      2022 © Kerajaan Negeri Sabah
    </IonCardSubtitle>
  </IonFooter>

</IonPage>


  );
};



export default Home;
