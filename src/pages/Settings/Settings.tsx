import React, { Component } from 'react';
import {
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react';

export default class Settings extends Component {
    state = {}
    render() {
        return (
            <IonContent>
                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Settings Page</IonCardTitle>
                </IonCardHeader>
                </IonCard>
            </IonContent>
        );
    }
}