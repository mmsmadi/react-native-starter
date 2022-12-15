# react-native-starter

This is a documentation to setup and start your first React Native CLI project.

You can see the official documentation on the [website](https://reactnative.dev/docs/getting-started)

## Requirements

To see the requirements and setup the environment as the official website see the link below:

https://reactnative.dev/docs/environment-setup

## Building your first React Native app

After finishing environment setup lets create our first app.

To create react native with javascript template:

```
npx react-native init myapp
```

To create react native with typescript template:

```
npx react-native init myapp --template react-native-template-typescript
```

> This project was created using `npx react-native init myapp`.

## Running the app

```
npx react-native run-android  or  yarn android
npx react-native run-ios  or  yarn ios
```

## Notes

1- To navigate between screens there are multiple libraries, this app uses [react-navigation](https://reactnavigation.org/docs/getting-started)

2- To use data over the app such as user info there are multiple libraries such as [Redux](https://redux.js.org/introduction/getting-started) and [MobX](https://mobx.js.org/installation.html)

## Folder structure

```
src
│
└───assets
│   └───fonts
│   └───icons
│   └───images
└───components
│    │   index.js
└───navigation
│    │   index.js
└───screens
│    │   index.js
└───services
│    │   index.js
└───theme
│    │   index.js
└───utils
│    │   index.js
```

## Support

<a href="https://www.buymeacoffee.com/mmsmadi"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" style="height: 41px !important;width: 174px !important"  target="_blank"></a>
