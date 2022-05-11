import React, {useState} from 'react';
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
  IonAlert,
  IonChip,
  IonAvatar

} from '@ionic/react';

import axios from "axios";
import { useHistory } from "react-router-dom";
import './Home.css';
import { IonIcon } from '@ionic/react';
import { search} from 'ionicons/icons';

function validateMyKad(mykad: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(mykad));
}


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
    if (validateMyKad(mykad) == false) {
      setMessage("Your identification number is invalid");
      setIserror(true);
      return;
    }
    if (!akaun_bank || akaun_bank.length < 17) {
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
    api.post("/login", loginData)
      .then(res => {
        history.push("/lists/" + mykad);
      })
      .catch(error=> {
        setMessage("Authentication failure! Make sure your login data is coorect");
        setIserror(true);
      })
  };

  return (
    <IonPage>
    <style>{"body { background-color: #428cff; }"}</style>
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
                buttons={["Dismiss"]}
            />
         </IonCol>
</IonRow>

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

  <IonFooter class="ion-text-center" color="light">
    <IonCardSubtitle class="ion-text-center" color="light">
      2022 © Kerajaan Negeri Sabah
    </IonCardSubtitle>
  </IonFooter>

</IonPage>


  );
};



export default Home;
