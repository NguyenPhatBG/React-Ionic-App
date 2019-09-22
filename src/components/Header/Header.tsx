import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

export default class Header extends Component {
    state = {}
    render() {
        return (
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle>Ionic React</IonTitle>
                </IonToolbar>
            </IonHeader>
        );
    }
}