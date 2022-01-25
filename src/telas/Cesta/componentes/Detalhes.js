import React from "react";
import Texto from '../../../componentes/Texto';
import {Image, StyleSheet, View } from 'react-native';
import logo from '../../../../assets/logo.png';

export default function Detalhes({nomeCesta, logoFazenda, nomeFazenda, descricao, preco}) {
    return<>
        <Texto style={estilos.nome}>{nomeCesta}</Texto>
        <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda}/>
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row", // coluumn um do lado do outro - componenetes
        paddingVertical: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        //textAlign: "justify",
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