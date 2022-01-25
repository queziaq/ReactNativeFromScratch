import React from 'react';
import { Dimensions, Image } from 'react-native';

import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';

export default function Topo({titulo}) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.tituloCesta}>{titulo}</Texto>
    </>
}

//pega a dimensão do celulars
const width = Dimensions.get('screen').width;

const estilos = {
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
}