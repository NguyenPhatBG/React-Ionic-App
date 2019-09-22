import React, { Component } from 'react';
import {
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton
} from '@ionic/react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    state = {}
    render() {
        return (
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Home Page</IonCardTitle>
                    </IonCardHeader>
                    <Link to="/about">
                        <IonButton color="primary">About</IonButton>
                    </Link>
                    <Link to="/settings">
                        <IonButton color="secondary">Settings</IonButton>
                    </Link>
                </IonCard>
            </IonContent>
        );
    }
}