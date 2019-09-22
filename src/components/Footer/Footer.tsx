import React, { Component } from 'react';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/react';

export default class Footer extends Component {
    state = {}
    render() {
        return (
            <IonFooter>
                <IonToolbar color="danger">
                    <IonTitle>Ionic React Footer </IonTitle>
                </IonToolbar>
            </IonFooter>
        );
    }
}