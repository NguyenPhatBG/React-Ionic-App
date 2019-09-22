import React, { Component } from 'react';
import {
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react';

export default class NoPage extends Component {
    state = {}
    render() {
        return (
            <IonContent>
                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>404 No Page Found</IonCardTitle>
                </IonCardHeader>
                </IonCard>
            </IonContent>
        );
    }
}