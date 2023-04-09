import React from "react";
import {View, Text} from 'react-native'

import styles from "./styles/"

export default function Contacts({navigation}){
    return(
        <View style={styles.formContext}>
            <View style={styles.ViewInfo}>
                <Text style={styles.TextInfo}>Nome: João Silva</Text>
                <Text style={styles.TextInfo}>Telefone: (11) 96589-6658</Text>
                <Text
                style={styles.TextInfo}
                onPress={()=> navigation.navigate('Information',
                {
                    nome:'João Silva',
                    telefone: '(11) 96589-6658',
                    endereco: 'Rua das Flores',
                    numero: '765',
                    profissao: 'Carpinteiro',
                    email: 'joaosilva@carpintaria.com.br'
                }
                )}>
                Information...</Text>
            </View>
            <View style={{marginTop:60}}>
            <Text style={styles.TextInfo}>Nome: Amanda Silva</Text>
            <Text style={styles.TextInfo}>Telefone: (11) 94762-7621</Text>
                <Text
                style={styles.TextInfo}
                onPress={()=> navigation.navigate('Information',
                {
                    
                    nome:'Amanda Silva',
                    telefone: '(11) 94762-7621',
                    endereco: 'Rua das Neves',
                    numero: '8910',
                    profissao: 'Professora',
                    email: 'amanadasilva@teacher.com.br'
                    
                })}>
                Information...</Text>
            </View>
        </View>
    )
}