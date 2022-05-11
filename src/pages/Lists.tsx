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
   IonItem,
   IonLabel,
   IonGrid,
   IonRow,
   IonCol
  } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";
import './Home.css';

const Lists: React.FC = () => {
  const history = useHistory();
  const [Vouchers, setVoucher] = useState<Array<any>>([]);
  useEffect(() => {
    const api = axios.create({
      baseURL: 'https://s3p.sabah.gov.my/api/vouchers'
    })
    api.get("/vouchers")
    .then(res => {
      setVoucher(res.data.data)
    })
    .catch(error => {
      console.log("Error fetching data")
    })
  }, [])


  return (
    <IonPage>
      <style>{"body { background-color: #93CAED; }"}</style>
      <IonCard>

      <IonHeader>
        <IonToolbar color="primary">

        <IonButtons slot="start">
          <IonBackButton defaultHref="/Home" />
        </IonButtons>

          <IonTitle>Senarai Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>
    
    <IonGrid>
      <IonRow>
        <IonCol>
          {Vouchers.map((voucher, i) => 
          {
            return(
              <IonItem color="dark">
                <IonCardContent className="ion-padding" color="light" >
                  <IonLabel>
                      <p style={{ paddingLeft:"10px"}}>{voucher.tarikh + " " + voucher.eft}</p>
                      <p style={{ paddingLeft:"10px"}}>{voucher.baucar}</p>
                  </IonLabel>
                </IonCardContent>
              </IonItem>
            );
          })}
    </IonCol>
    </IonRow>
    </IonGrid>
    </IonCard>

  <IonFooter class="ion-text-center" color="light">
    <IonCardSubtitle class="ion-text-center" color="light">
      2022 © Kerajaan Negeri Sabah
    </IonCardSubtitle>
  </IonFooter>

    </IonPage>
  );
};
export default Lists;