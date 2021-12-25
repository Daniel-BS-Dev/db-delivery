# Front end mobile 

## Telas do Sistema no Figma
 
 - https://www.figma.com/file/9KM3LJbfPU5OH4kEWbPqnC/SDS2-DevSuperior

## Passo a passo de configuração do projeto:

### Instando o `Expo` globalmente:
````
npm install --global expo-cli
``````

### Criando projeto com `Expo`:
``````
expo init front-mobile -t expo-template-blank-typescript 
``````

### Após a instalação, remover a pasta .git de DENTRO DA PASTA front-mobile (MUITA ATENÇÃO NESSE PASSO!)
```
rm -rf .git
``````

### Acesso URL do Google Maps:
``````
https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}
``````


## Links úteis:
- https://docs.expo.io/
- https://docs.expo.io/guides/using-custom-fonts/
- https://reactnative.dev/docs/images
- https://docs.expo.io/get-started/installation/#2-expo-client-app-for-ios-and
