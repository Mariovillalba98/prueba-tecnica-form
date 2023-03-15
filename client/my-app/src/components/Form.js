import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from "react";
import axios from 'axios';

function validate(input){
  let errors = {}
  // const emailRegEx = /\S+@\S+\.\S+/
  const emailValidation = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  if(!input.name){
      errors.name = "* El campo nombre es requerido"
  }else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.name))){
      errors.name = "* El campo nombre solo acepta letras"
  }

  if(!input.lastName){
    errors.lastName = "* El campo apellido es requerido"
} else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.lastName))){
    errors.lastName = "* El campo apellido solo acepta letras"
}

if(!input.email){
  errors.email = "* El campo email es requerido"
}else if(!emailValidation.test(input.email)){
  errors.email = "* Debe tener formato de email y no contener espacios"
}

  if(!input.dni){
    errors.dni = "* El campo DNI es requerido"
}else if (input.dni %1 !==0) {
    errors.dni = "* El campo solo acepta numeros"
}
else if(input.dni < 1 || input.dni > 99999999) {
    errors.dni = "* El DNI debe ser un número entre 1 y 99999999";
}

if(!input.consulta){
  errors.consulta = "* El campo consulta es requerido"
}


  return errors
}



export default function Form() {
  var desactivado = true;
  const [errors,setErrors] = useState({})
  const [input, setInput] = useState({name:"",
  lastName:"",
  email:"",
  dni:"",
  consulta:""

  })
  

  function handleChange(name, value){
    setInput({
        ...input,
        [name] : value
    }) 
    setErrors(validate({
        ...input,
        [name]: value
    }))
}

// function handleChange(name, value) {
//   setInput((prevInput) => ({
//     ...prevInput,
//     [name]: value,
//   }));
//   setErrors(validate({
//     ...input,
//     [name]: value,
//   }));
// }


  // const handleSubmit = () => {

  //   Alert.alert("El mensaje se ha enviado correctamente!")
  //   setInput({
  //     name:"",
  //     lastName:"",
  //     email:"",
  //     dni:"",
  //     consulta:""
  // })

  // }

  const handleSubmit = () => {
    axios.post('/formularios', input)
      .then(response => {
        Alert.alert("El mensaje se ha enviado con éxito!")
        setInput({
          name:"",
          lastName:"",
          email:"",
          dni:"",
          consulta:""
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  // const handleSubmit = () => {
  //   const data = JSON.stringify(input);
  //   fetch('http://localhost:3001/formularios/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: data
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       Alert.alert("El mensaje se ha enviado correctamente!")
  //       setInput({
  //         name:"",
  //         lastName:"",
  //         email:"",
  //         dni:"",
  //         consulta:""
  //       });
  //     } else {
  //       throw new Error('Error en la solicitud POST');
  //     }
  //   })
  //   .catch(error => console.error(error));
  // }
  

  if (input.name && input.lastName&&input.email && input.dni&&input.consulta&&
    !errors.name && !errors.lastName&&!errors.email && !errors.dni&&!errors.consulta) {
      desactivado = false
    }
  console.log(input)
  return (
    <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.title} >Contact Us</Text>
        </View>
        <View style={styles.inputContainers}>
            <TextInput  
              name="name" 
              value={input.name} 
              onChangeText={(value) => handleChange("name", value)}
              placeholder="Ingrese su nombre" 
              style={styles.input} 
            />
            {errors.name && <Text style={styles.error} >{errors.name}</Text>}

            <TextInput
              name="lastName" 
              value={input.lastName} 
              onChangeText={(value) => handleChange("lastName", value)}               
              placeholder="Ingrese su apellido"
              style={styles.input} />
            {errors.lastName && <Text style={styles.error} >{errors.lastName}</Text>}

            <TextInput
              name="email" 
              value={input.email} 
              onChangeText={(value) => handleChange("email", value)}             
              placeholder="Ingrese su email" 
              style={styles.input} />
            {errors.email && <Text style={styles.error} >{errors.email}</Text>}  
            <TextInput 
              name="dni" 
              value={input.dni.toString()} 
              onChange={(value) => handleChange("dni", value.nativeEvent.text)}
              keyboardType="numeric" placeholder="Ingrese su dni" style={styles.input} />
            {errors.dni && <Text style={styles.error}>{errors.dni}</Text>}

            <TextInput
              name="consulta" 
              value={input.consulta} 
              onChangeText={(value) => handleChange("consulta", value)}                
              maxLength={280} 
              placeholder="Ingrese su consulta" 
              multiline={true} 
              style={styles.inputConsulta} />
            {errors.consulta && <Text style={styles.error}>{errors.consulta}</Text>}
          </View>
          <View style={styles.viewContainerEnviar}>
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={desactivado}
            style={{
              width: "80%",
              paddingHorizontal: 10,
            }}
          >
            {desactivado === true ?             
            <View style={styles.buttonDesactivado}>
              <Text style={styles.enviarDesactivado}>ENVIAR</Text>
            </View>
              : 
             <View style={styles.button}>
              <Text style={styles.enviar}>ENVIAR</Text>
            </View>}

          </TouchableOpacity>
        </View>


        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    
  },

  containerText: {
    backgroundColor: '#ff3899',
    height:"12%"
    
  },

  title:{
    fontSize:25,
    color:"white",
    paddingLeft:15,
    marginTop:"12%",
    fontWeight:"bold",

    
  },

  inputContainers: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom:"30%",

  },

  input: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    width: "80%",
    backgroundColor: "rgba(255,255,255,0.5)",
    height: "10%",
    color: "black",
    paddingHorizontal: 8,
    paddingLeft: 20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20
  },

  inputConsulta: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    width: "80%",
    backgroundColor: "rgba(255,255,255,0.5)",
    height: "18%",
    color: "black",
    paddingBottom:50,
    paddingHorizontal: 8,
    paddingLeft: 20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
  },

  boton:{
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#833CF0",
    borderRadius: 50,
    height: 70,
  },
  textoBoton:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewContainerEnviar: {
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,

  },
  enviar: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 1,
    color: "white",
  },
  enviarDesactivado: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 1,
    color: "#aaa",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff3899",
    borderRadius: 40,
    height: 65,
    marginBottom:"100%"
  },
  buttonDesactivado: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cecece",
    borderRadius: 40,
    height: 65,
    marginBottom:"100%"
  },
  error:{
    color:"#ff3899",
    fontSize:12,
    

  }
});
