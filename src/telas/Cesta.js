import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

export default function Cesta(){
    return <>
     <Image source={topo} style={estilos.topo} />
     <Text style={estilos.tituloCesta}>Detalhe da Cesta</Text>
     <View style={estilos.cesta}>
         <Text style={estilos.nome}>Cestas de Verduras</Text>
         <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>Jenny Farm Jack</Text>
         </View>
         <Text style={estilos.descricao}>Uma cesta de produtos selecionados 
             cuidadosamente da fazenda 
             direto para cozinha</Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
     </View>
    </>
}

//pega a dimensão do celular
const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 570 / 768 * width, //conta para pegar o width exato
    },
    tituloCesta: {
        width: "100%",
        position: "absolute", // colocar o testo em cima da outras coisas
        textAlign: "center",
        fontSize: 18,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold",
    },
    fazenda: {
        flexDirection: "row", // coluumn um do lado do outro - componenetes
        paddingVertical: 12,
        fontFamily: "MontserratRegular",
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        textAlign: "justify",
        lineHeight: 26,
    },
    preco: {
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop:8,
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    }
});
