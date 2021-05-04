import React from 'react'
import { View, Button } from 'react-native'

export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.voltar 
                ? 
                    <Button 
                        title='Voltar' 
                        onPress={() => {
                                props.navigation.goBack()
                            }} /> 
                : 
                    false
            }
            {props.avancar 
                ? 
                    <Button 
                        title='Avançar' 
                        onPress={() => {
                                // Ao chegar na ultima tela, contunua empilhando a ultima tela
                                props.navigation.push(
                                    props.avancar,
                                    {
                                        numero: parseInt(Math.random() * 100)
                                    }
                                )
                                // Ao chegar na ultima tela, para de empilhar
                                // props.navigation.navigate(props.avancar)
                            }} /> 
                : 
                    false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)
