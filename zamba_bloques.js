// Definición de colores sobre estilo Theme Classic que no se cambia
Blockly.Blocks.sensores = {COLOUR: '#2ca5e2'};
Blockly.Blocks.primitivas = {COLOUR: '#4B6CD4'};
Blockly.Blocks.texto = {COLOUR: '#5BA58C'};
Blockly.Themes.Classic.blockStyles.loop_blocks.colourPrimary = "#ee7d16";
Blockly.Themes.Classic.blockStyles.logic_blocks.colourPrimary = "#ee7d16";

Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "Definir";
//decidimos eliminar este bloque porque no queremos que les estudiantes
//usen la mala práctica de retornar dentro de los if
delete Blockly.Blocks.procedures_ifreturn;

//esta funcion se debe llamar para que no aparezcan las definiciones de funciones
function noHayFunciones() {
    delete Blockly.Blocks.procedures_defreturn;
}

Blockly.defineBlocksWithJsonArray([
    {
        "type": "inicio",
        "message0": "Al empezar a ejecutar %1 %2",
        "args0": [
           {
             "type": "input_dummy"
           },
           {
              "type": "input_statement",
              "name": "inicio"
           }
        ],
        "inputsInline": false,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },    
    {
        "type": "imprimir",
        "message0": "Imprimir %1",
        "args0": [
            {
                "type": "input_value",
                "name": "VALOR"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.texto.COLOUR,
        "tooltip": "Imprime el valor recibido",
        "helpUrl": ""
    },
    {
        "type": "obtener_entrada",
        "message0": "Obtener entrada con mensaje: %1",
        "args0": [
            {
                "type": "input_value",
                "name": "TEXTO"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": Blockly.Blocks.texto.COLOUR,
        "tooltip": "Muestra un mensaje y obtiene un texto de entrada",
        "helpUrl": ""
    },
    {
        "type": "cambiar_color_texto",
        "message0": "Cambiar el color del texto a: %1",
        "args0": [
            {
                "type": "field_colour",
                "name": "COLOR",
                "colour": "#ff4040"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "inputsInline": true,
        "colour": Blockly.Blocks.primitivas.COLOUR,
        "tooltip": "Cambia el color de texto de la salida",
        "helpUrl": ""
    }
])

/**
 * Funciones generadoras de código correspodientes al bloque "inicio"
 * @param {!Blockly.Block} Bloque.
 * @return {!List.<string, enum>} Código JavaScript o Python, Orden de precedencia
 */
Blockly.JavaScript['inicio'] = function (block) {
    return Blockly.JavaScript.statementToCode(block,'inicio');
};

Blockly.Python['inicio'] = function (block) {
    
    let code = 'def main():\n'
    code += Blockly.Python.statementToCode(block,'inicio')
    code += '\nmain()\n'
    return code;
};

/**
 * Funciones generadoras de código correspodientes al bloque "imprimir"
 * @param {!Blockly.Block} Bloque.
 * @return {string} Código JavaScript o Python.
 */
Blockly.JavaScript['imprimir'] = function (block) {
    let valor = Blockly.JavaScript.valueToCode(block, 'VALOR', Blockly.JavaScript.ORDER_NONE);
    let code = 'imprimir(' + valor + ');\n';
    return code;
};

Blockly.Python['imprimir'] = function (block) {
    let textoMensaje = Blockly.Python.valueToCode(block, 'VALOR', Blockly.Python.ORDER_NONE);
    let code = 'print(' + textoMensaje + ')\n';
    return code;
};


/**
 * Funciones generadoras de código correspodientes al bloque "obtener_entrada"
 * @param {!Blockly.Block} Bloque.
 * @return {!List.<string, enum>} Código JavaScript o Python, Orden de precedencia
 */
Blockly.JavaScript['obtener_entrada'] = function (block) {
    let textoMensaje = Blockly.JavaScript.valueToCode(block, 'TEXTO', Blockly.JavaScript.ORDER_NONE);
    let code = 'obtenerEntrada(' + textoMensaje + ')\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Python['obtener_entrada'] = function (block) {
    let textoMensaje = Blockly.Python.valueToCode(block, 'TEXTO', Blockly.Python.ORDER_NONE);
    let code = 'input(' + textoMensaje + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};




/**
 * Funciones generadoras de código correspodientes al bloque "cambiar_color_texto"
 * @param {!Blockly.Block} Bloque.
 * @return {string} Código JavaScript o Python.
 */
Blockly.JavaScript['cambiar_color_texto'] = function (block) {
    let color = block.getFieldValue('COLOR');
    let code = 'cambiarColorTexto("' + color + '");\n';
    return code;

};

Blockly.Python['cambiar_color_texto'] = function (block) {
    let color = block.getFieldValue('COLOR');

    let r = parseInt('0x' + color.substring(1, 3));
    let g = parseInt('0x' + color.substring(3, 5));
    let b = parseInt('0x' + color.substring(5, 7));

    let code = "print('\x1B[38;2;"+r+";"+g+";"+b+"m', end='')\n";

    return code;
};


/**
 * Funciones generadoras de código correspodientes al bloque "salto_de_linea"
 * @param {!Blockly.Block} Bloque.
 * @return {!List.<string, enum>} Código JavaScript o Python, Orden de precedencia
 */
Blockly.JavaScript['salto_de_linea'] = function (block) {
    let code = 'saltoDeLinea()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];

};

Blockly.Python['salto_de_linea'] = function (block) {
    let code = '\'\\n\'';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
