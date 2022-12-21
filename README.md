# react-native-starter

This is a documentation to setup and start your first React Native CLI project.

You can see the official documentation on the [website](https://reactnative.dev/docs/getting-started)

## Contents

- [Requirements](#-requirements)
- [Building your first React Native app](#-building-your-first-react-native-app)
- [Running the app](#-running-the-app)
- [Folder structure](#-files-structure)
- [Useful links](#-useful-links)
- [Useful libraries](#-useful-libraries)
- [Navigation](#-navigation)
- [Forms](#-forms)
- [Styling](#-styling)
- [System](#-system)
- [Media](#-media)
- [Storage](#-storage)
- [Networking](#-networking)
- [Animation](#-animation)
- [Support](#-support)

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
npx react-native run-android

or

yarn android
```

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

## Useful links

- [Blueprint to becoming a React Native Developer (Roadmap)](https://medium.com/@spencer_carli/blueprint-to-becoming-a-react-native-developer-6cad2b894887#.t3uw4j4u8)
- [React Native CLI vs Expo](https://medium.com/nerd-for-tech/expo-v-s-react-native-cli-what-to-choose-and-what-to-stay-away-from-85afc81597bc)
- [React Native environment setup](https://reactnative.dev/docs/environment-setup)
- [How to Setup your First React Native app](https://hackernoon.com/react-native-how-to-setup-your-first-app-a36c450a8a2f)
- [Using React Native With TypeScript](https://medium.com/@jan.hesters/using-typescript-with-react-native-946aa4b4ae6f)
- [React-Navigation to navigate between screens](https://reactnavigation.org/docs/getting-started/)
- [React-Navigation stacks example](https://reactnavigation.org/docs/hello-react-navigation)
- [React-Navigation Drawer](https://reactnavigation.org/docs/drawer-based-navigation)
- [React-Navigation Bottom Tabs](https://reactnavigation.org/docs/tab-based-navigation)
- [Setup React Native firebase cloud messaging](https://rnfirebase.io/messaging/usage)
- [Setup React Native firebase analytics](https://rnfirebase.io/analytics/usage)
- [How to Use the ListView Component](https://medium.com/@spencer_carli/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.ur0hyi3h9)
- [How to upload photo/file in react-native](https://github.com/g6ling/React-Native-Tips/tree/master/How_to_upload_photo%2Cfile_in%20react-native)
- [Record and Upload Videos with React Native](https://medium.com/react-native-training/uploading-videos-from-react-native-c79f520b9ae1)
- [React Hooks Basics— Building a React Native App with React Hooks](https://medium.com/crowdbotics/build-a-react-native-app-with-react-hooks-5498e1d5fdf6)
- [How to Use Environment Variables in a React Native App](https://levelup.gitconnected.com/how-to-gracefully-use-environment-variables-in-a-react-native-app-7f1600446116)
- [How To Use WebViews in a React Native App](https://blog.jscrambler.com/how-to-use-webviews-in-a-react-native-app/)

## Useful libraries

- [lottie-react-native](https://github.com/airbnb/lottie-react-native) - Parse Adobe After Effects animations exported as JSON with bodymovin and renders them natively on mobile!
- [react-native-skia](https://github.com/Shopify/react-native-skia) - High-performance 2d Graphics for React Native using Skia!
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient) - A LinearGradient element for React Native bodymovin and renders them natively on mobile!
- [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info) - Get Device Information library for React Native.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native with support for NavBar/TabBar, image source and full styling. Choose from 3000+ bundled icons or use your own.
- [react-native-permissions](https://www.npmjs.com/package/react-native-permissions) - A unified permissions API for React Native on iOS, Android and Windows
- [redux](https://www.npmjs.com/package/redux) - Redux is a predictable state container for JavaScript apps.
- [react-native-render-html](https://github.com/meliorence/react-native-render-html) - An iOS/Android pure javascript react-native component that renders your HTML into 100% native views
- [react-native-maps](https://github.com/lelandrichardson/react-native-maps) - React Native Map components for iOS + Android
- [react-native-mapbox-gl](https://github.com/mapbox/react-native-mapbox-gl) - A Mapbox GL react native module for creating custom maps
- [react-native-swiper](https://github.com/leecade/react-native-swiper) - Swiper component for React Native.
- [react-native-snap-carousel](https://github.com/archriss/react-native-snap-carousel) - Swiper component for React Native with previews, multiple layouts, parallax images, performant handling of huge numbers of items, and RTL support
- [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat) - The most complete chat UI for React Native (formerly known as Gifted Messenger)
- [react-native-scrollable-tab-view](https://github.com/brentvatne/react-native-scrollable-tab-view) - A scrollable tab-view for React Native
- [react-native-image-picker](https://github.com/marcshilling/react-native-image-picker) - A React Native module that allows you to use the native UIImagePickerController UI to select a photo from the device library or directly from the camera.
- [react-native-calendars](https://github.com/wix/react-native-calendars) - Calendar Component
- [react-native-datepicker](https://github.com/xgfe/react-native-datepicker) - React Native date, datetime and time picker for both Android and IOS
- [react-native-svg](https://github.com/magicismight/react-native-svg) - SVG library that works on both iOS & Android
- [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker) - iOS/Android image picker with support for multiple images and cropping
- [react-native-app-intro](https://github.com/FuYaoDe/react-native-app-intro) - A React Native parallax effect app intro
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) - FastImage, performant React Native image component.
- [react-native-blurhash](https://github.com/mrousavy/react-native-blurhash) - Give your users the loading experience they want.
- [react-native-modalbox](https://github.com/maxs15/react-native-modalbox) - A component for react-native modal
- [react-native-chart](https://github.com/onefold/react-native-chart) - React-native-chart is a simple module for adding line charts, area charts, or bar charts to your React Native app.
- [react-native-offline](https://github.com/rauliyohmc/react-native-offline) - Handy toolbelt to deal nicely with offline/online connectivity in a React Native app. Smooth redux integration.
- [react-native-slider](https://github.com/jeanregisser/react-native-slider) - A pure JavaScript component for react-native
- [react-native-flash-message](https://github.com/lucasferreira/react-native-flash-message#readme) - React Native flashbar and top notification alert utility.
- [react-native-credit-card-input](https://github.com/sbycrosz/react-native-credit-card-input) - 💳 Easy (and good looking) credit-card input for your React Native Project
- [react-native-qrcode](https://github.com/cssivision/react-native-qrcode) - react-native qrcode generator
- [react-native-easy-toast](https://github.com/crazycodeboy/react-native-easy-toast) - A react native module to show toast like android, it works on iOS and Android.
- [react-native-copilot](https://github.com/okgrow/react-native-copilot) - Step-by-step walkthrough for your react native app
- [react-native-star-rating](https://github.com/djchie/react-native-star-rating) - A React Native component for generating and displaying interactive star ratings
- [react-native-rating-element](https://github.com/ui-ninja/react-native-rating-element) - A react native rating system supporting: decimal point's rating, direction aware icons like bottom to top or right to left etc, custom icons from Ionicons, custom images and record rating given by users.
- [react-native-gesture-password](https://github.com/spikef/react-native-gesture-password) - A gesture password component for React Native
- [react-native-carousel](https://github.com/nick/react-native-carousel) - Simple carousel component for react-native
- [react-native-country-picker-modal](https://github.com/xcarpentier/react-native-country-picker-modal) - Country picker provides a modal allowing a user to select a country from a list. It display a flag next to each country name.
- [react-native-radio-buttons](https://github.com/ArnaudRinquin/react-native-radio-buttons) - A react component to implement custom radio buttons-like behaviors: multiple options, only on can be selected at once.
- [react-native-accordion](https://github.com/naoufal/react-native-accordion) - An Accordion Component for React Native
- [react-native-toast](https://github.com/remobile/react-native-toast) - An android like toast for react-native support for iOS and Android
- [react-native-timer-mixin](https://github.com/reactjs/react-timer-mixin) - TimerMixin provides timer functions for executing code in the future that are safely cleaned up when the component unmounts. This is a fork that includes react-native InteractionManager support.
- [react-native-progress-bar](https://github.com/lwansbrough/react-native-progress-bar) - An animated progress bar component for React Native
- [react-native-google-place-picker](https://github.com/q6112345/react-native-google-place-picker) - React Native Wrapper of Google Place Picker for both Android and iOS.
- [react-native-offline-mode](https://github.com/rauchy/react-native-offline-mode) - Swap your app with an offline version while there's no connectivity
- [react-native-multi-slider](https://github.com/JackDanielsAndCode/react-native-multi-slider) - Pure JS slider component with multiple markers for React Native
- [react-native-color-picker](https://github.com/instea/react-native-color-picker) - React Native implementation of color picker for both Android and iOS.
- [react-native-zoom-image](https://github.com/Tinysymphony/react-native-zoom-image) - An image viewer component for react-native, like twitter's image viewer.
- [react-native-view-pdf](https://github.com/rumax/react-native-PDFView) - PDF viewer for React Native
- [react-native-streetview](https://github.com/nesterapp/react-native-streetview) - Google's Panorama/StreetView component for iOS and Android.
- [react-native-360-image-viewer](https://github.com/phuochau/react-native-360-image-viewer) - The component helps to simulate 360 degrees image from multiple images.
- [react-native-progress-circular](https://github.com/andy9775/React-Native-CircularProgress) - A pure React Native Component for circular progress bars for both iOS and Android.
- [react-native-countdown](https://github.com/buhe/react-native-countdown) - react native countdown button
- [react-native-dashed-border](https://github.com/chirag04/react-native-dashed-border) - A element for react-native
- [react-native-fancy-carousel-viewpager](https://github.com/lvlrSajjad/react-native-fancy-carousel-viewpager) - React Native Designed View Pager Library (pure js)
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) - Import SVG files inside React Native components. Uses the react-native-svg library to render SVG images.

## Navigation

- [react-navigation](https://github.com/react-community/react-navigation) - Easy to use Navigation for React Native
- [react-native-navigation](https://github.com/wix/react-native-navigation) - App-wide support for 100% native navigation with an easy cross-platform interface.
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) - React Native Router based on new React Native Navigation API
- [kittenTricks](https://github.com/akveo/kittenTricks) - A react native mobile starter kit with over 40 screens and theme hot reload support

## Forms

- [formik](https://github.com/jaredpalmer/formik) - Forms in React, without tears.
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - React hooks for forms validation without the hassle.
- [redux-form](http://redux-form.com) - Redux form state management (Web and Native)
- [redux-hook-form](https://github.com/react-hook-form/react-hook-form) - React hooks for form validation without the hassle. (Web and Native)
- [tcomb-form-native](https://github.com/gcanti/tcomb-form-native) - Generate React Native forms

## Styling

- [styled-components](https://github.com/styled-components/styled-components) - Style React and React Native with utilising tagged template literals.
- [emotion](https://github.com/emotion-js/emotion) - Style as a function of state.
- [react-native-extended-stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) - Extend React Native stylesheet with variables, relative units, percents, math operations, scaling and other stuff.

## System

- [react-native-device-info](https://github.com/rebeccahughes/react-native-device-info) - Get device information using react-native
- [react-native-fs](https://github.com/johanneslumpe/react-native-fs) - Native filesystem access for react-native
- [react-native-config](https://github.com/luggit/react-native-config) - Config variables for React Native apps
- [react-native-ultimate-config](https://github.com/maxkomarychev/react-native-ultimate-config) - Configure all levels of your react-native app with a single file
- [react-native-permissions](https://github.com/yonahforst/react-native-permissions) - Check and request all permissions with a single api
- [react-native-keychain](https://github.com/oblador/react-native-keychain) - Keychain Access for React Native
- [react-native-touch-id](https://github.com/naoufal/react-native-touch-id) - React Native authentication with the native Touch ID popup.
- [react-native-contacts](https://github.com/rt2zz/react-native-contacts) - React Native Contacts (android & ios)
- [react-native-communications](https://github.com/anarchicknight/react-native-communications) - Easily call, email, text or iMessage someone in React Native
- [react-native-in-app-utils](https://github.com/chirag04/react-native-in-app-utils) - A react-native wrapper for handling in-app payments.
- [react-native-image-resizer](https://github.com/bamlab/react-native-image-resizer) - Rescale local image files with React Native.
- [react-native-quick-actions](https://github.com/madriska/react-native-quick-actions) - A react-native interface for 3D Touch home screen quick actions
- [react-native-billing](https://github.com/idehub/react-native-billing) - In-app purchase implementation for React Native on Android.
- [react-native-barcodescanner](https://github.com/ideacreation/react-native-barcodescanner) - A barcode scanner component for react native - not maintained anymore - use react-native-camera.
- [react-native-iap](https://github.com/dooboolab/react-native-iap) - React-native native module for In-App Purchase.
- [react-native-dotenv](https://github.com/zetachang/react-native-dotenv) - A Babel preset let you import application configs from .env file (zero runtime dependency)
- [react-native-location](https://github.com/timfpark/react-native-location) - Native GPS location support for React Native.
- [react-native-background-fetch](https://github.com/transistorsoft/react-native-background-fetch) - iOS BackgroundFetch API implementation. Awakens a suspended iOS app in the background to execute a `callbackFn` about every 15 min.
- [react-native-queue](https://github.com/billmalarky/react-native-queue) - Your swiss army knife for task management in React Native - easily manage background tasks that run periodically when app is closed and dedicated worker threads.
- [react-native-sensors](https://github.com/react-native-sensors/react-native-sensors) - Platform independent wrapper for sensors like Gyroscope, Accelerometer and Magnetometer with RxJS interface
- [react-native-social-share](https://github.com/doefler/react-native-social-share) - Use the iOS native Twitter and Facebook share view from react native
- [react-native-motion-manager](https://github.com/pwmckenna/react-native-motion-manager) - A react-native interface for using the Gyroscope, Accelerometer and Magnetometer
- [react-native-android-sms-listener](https://github.com/CentaurWarchief/react-native-android-sms-listener) - Allows you to listen for incoming SMS messages
- [react-native-ble](https://github.com/jacobrosenthal/react-native-ble) - React Native BLE using noble api surface
- [react-native-haptic](https://github.com/charlesvinette/react-native-haptic) - iOS 10 + haptic feedback for React Native applications
- [react-native-pinch](https://github.com/localz/react-native-pinch) - SSL pinning for react native
- [react-native-discovery](https://github.com/yonahforst/react-native-discovery) - Discover nearby devics using BLE. Turn iOS and Android devices into beacons
- [react-native-google-nearby-messages](https://github.com/mrousavy/react-native-google-nearby-messages) - Communicate with nearby devices using Bluetooth, BLE, WiFi and near-ultrasonic audio by using the Google Nearby Messages API
- [react-native-haptic-feedback](https://github.com/mkuczera/react-native-haptic-feedback) - Trigger Haptic Native Feedback on iOS and Android
- [react-native-clipboard](https://github.com/silentcloud/react-native-clipboard) - React Native component for getting or setting clipboard content
- [react-native-nfc-ios](https://github.com/barodeur/react-native-nfc-ios) - Easy to use CoreNFC for React Native
- [react-native-android-sms](https://github.com/msmakhlouf/react-native-android-sms) - A react native android module to list/send sms.
- [react-native-voip-push-notification](https://github.com/ianlin/react-native-voip-push-notification) - iOS prioritized VoIP Push Notification
- [react-native-android-speech](https://github.com/mihirsoni/react-native-android-speech) - A text-to-speech library for Android React Native.
- [react-native-carrier-info](https://github.com/anarchicknight/react-native-carrier-info) - React Native module bridge to obtain information about the user’s home cellular service provider.
- [react-native-device-battery](https://github.com/robinpowered/react-native-device-battery) - Observe battery state changes in your react native application
- [react-native-device-motion](https://github.com/paramaggarwal/react-native-device-motion) - iOS device motion wrapper for React Native.
- [react-native-wifi-manager](https://github.com/skierkowski/react-native-wifi-manager) - Wifi Connection Manager for React Native on Android
- [react-native-android-sqlite](https://github.com/jbrodriguez/react-native-android-sqlite) - A react native android wrapper for SQLite
- [react-native-ssl-pinning](https://github.com/MaxToyberman/react-native-ssl-pinning) - React Native SSL pinning using OkHttp 3 on Android, and AFNetworking on iOS
- [rn-secure-storage](https://github.com/talut/rn-secure-storage) - Secure Storage for React Native (Android & iOS)
- [react-native-contacts-rx](https://github.com/JeanLebrument/react-native-contacts-rx) - react-native-contacts counterpart that include the support of RxJS.
- [react-native-detect-device](https://github.com/peachmeco/react-native-detect-device) - Detect a device on iOS or android in react-native.
- [react-native-battery-status](https://github.com/remobile/react-native-battery-status) - A battery-status for react-native
- [react-native-system-notification](https://github.com/Neson/react-native-system-notification) - Notification for React Native
- [react-native-home-pressed](https://github.com/evanjmg/react-native-home-pressed) - Listen to home and recent app events for Android
- [react-native-push-with-gcm](https://github.com/lilach/react-native-push-with-gcm) - Register device for GCM push notifications services (supported only for iOS)
- [react-native-device-info-pod](https://github.com/mchinyakov/react-native-device-info) - Get device information using react-native
- [react-native-sms-retriever](https://github.com/Bruno-Furtado/react-native-sms-retriever) - SMS Retriever API (Android).
- [react-native-background-downloader](https://github.com/EkoLabs/react-native-background-downloader) - Help you download large files on iOS and Android both in the foreground and most importantly in the background.
- [react-native-system-setting](https://github.com/c19354837/react-native-system-setting)- Provides some system setting APIs iOS and Android.

## Media

- [react-native-camera](https://github.com/lwansbrough/react-native-camera) - Camera component
- [react-native-video](https://github.com/brentvatne/react-native-video) - A Video component for react-native
- [react-native-sound](https://github.com/zmxv/react-native-sound) - React Native module for playing sound clips
- [react-native-audio](https://github.com/jsierles/react-native-audio) - Record and play back audio in your iOS or Android React Native apps. (no longer maintained)
- [react-native-audio-toolkit](https://github.com/react-native-community/react-native-audio-toolkit) - Audio playback and recording for react-native. In addition to basic functionality, many useful features are implemented such as seeking, looping and streaming audio files over the network.
- [react-native-camera-kit](https://github.com/wix/react-native-camera-kit) - Advanced native camera and gallery components and device photos API.
- [react-native-audio-streaming](https://github.com/tlenclos/react-native-audio-streaming) - iOS & Android module to play an audio stream, with background support and media controls.
- [react-native-video-processing](https://github.com/shahen94/react-native-video-processing) - Native Video editing/trimming/filtering library for React-Native
- [react-native-track-player](https://github.com/react-native-kit/react-native-track-player) - A fully fledged audio module created for music apps. Provides audio playback, external media controls, chromecast support and background mode for Android, iOS and Windows.
- [react-native-music-control](https://github.com/tanguyantoine/react-native-music-control/) - React Native module to display Now playing Info on lockscreen and handle control events
- [react-native-camera-roll-picker](https://github.com/jeanpan/react-native-camera-roll-picker) - A React Native component providing images selection from camera roll
- [react-native-incall-manager](https://github.com/zxcpoiu/react-native-incall-manager) - Handling media-routes/sensors/events during a audio/video chat like webrtc
- [react-native-speech](https://github.com/naoufal/react-native-speech) - A text-to-speech library for React Native.
- [react-native-screcorder](https://github.com/maxs15/react-native-screcorder) - Capture pictures and record Video with Vine-like tap to record
- [react-native-photos-framework](https://github.com/olofd/react-native-photos-framework) - A modern and comprehensive CameraRoll/iCloud-library for React Native
- [react-native-audioplayer](https://github.com/andreaskeller/react-native-audioplayer) - Small audio player library for react native
- [react-native-player](https://github.com/xeodou/react-native-player) - Media player for react-native
- [react-native-vlc-player](https://github.com/ghondar/react-native-vlc-player) - VLC Player for react-native
- [react-native-sound-recorder](https://github.com/kevinresol/react-native-sound-recorder) - No-hassle Sound Recorder for React Native
- [react-native-photoeditorsdk](https://github.com/imgly/pesdk-react-native) - React Native module for [PhotoEditor SDK](https://www.photoeditorsdk.com) (Android & iOS)
- [react-native-videoeditorsdk](https://github.com/imgly/vesdk-react-native) - React Native module for [VideoEditor SDK](https://www.videoeditorsdk.com) (Android & iOS)
- [react-native-audio-manager](https://github.com/Tricy/react-native-audio-manager) - Audio player library for react native Android
- [react-native-safe-image](https://github.com/xcarpentier/react-native-safe-image) - Really light React-Native package to handle fallback when image is on error
- [react-native-audio-player](https://github.com/sh3rawi/react-native-audio-player) - A React Native module to play audio on Android
- [react-native-mediaplayer](https://github.com/chriselly/react-native-mediaplayer) - Simple full screen media player for React Native.
- [react-native-media-capture](https://github.com/remobile/react-native-media-capture) - A media-capture for react-native

## Storage

- [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) - The fastest key/value storage for React Native.
- [react-native-async-storage](https://react-native-async-storage.github.io/async-storage/docs/usage/) - Key/value storage for React Native.
- [RxDB](https://github.com/pubkey/rxdb) - A realtime Database for JavaScript Applications.
- [WatermelonDB](https://github.com/Nozbe/WatermelonDB) - 🍉 Next-gen database for powerful React and React Native apps that scales to 10,000s of records and remains fast.
- [realm](https://github.com/realm/realm-js) - An alternative mobile database to SQLite & key-value stores.
- [react-native-storage](https://github.com/sunnylqm/react-native-storage) - This is a local storage wrapper for both react-native(AsyncStorage) and browser(localStorage). ES6/babel is needed.
- [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage) - SQLite3 bindings for React Native (Android & iOS)
- [react-native-simple-store](https://github.com/jasonmerino/react-native-simple-store) - A minimalistic wrapper around React Native's AsyncStorage.
- [react-native-store](https://github.com/thewei/react-native-store) - A simple database base on react-native AsyncStorage.
- [react-native-db-models](https://github.com/darkrishabh/react-native-db-models) - Local DB Models for React Native Apps
- [react-native-sqlite-2](https://github.com/noradaiko/react-native-sqlite-2) - SQLite3 Native Plugin for React Native for both Android and iOS
- [react-native-persistent-job](https://github.com/Gabrn/react-native-persistent-job) - Run async tasks that retry after a crash, connection loss or exception
- [react-native-pouchdb](https://github.com/carbureted/react-native-pouchdb) - Run pouchdb in React Native!
- [react-native-level-fs](https://github.com/tradle/react-native-level-fs) - fs for react-native using level-filesystem and asyncstorage-down
- [react-native-mongoose](https://github.com/remobile/react-native-mongoose) - A AsyncStorage based mongoose like storage for react-native React prop-types.

## Networking

- [fetch](https://reactnative.dev/docs/network) - The Fetch API provides an interface for fetching resources (Build in JavaScript)
- [axios](https://github.com/axios/axios) - Promise based HTTP client
- [apisauce](https://github.com/infinitered/apisauce) - Light-weight and fast HTTP client library that uses Axios

## Animation

- [react-native-animatable](https://github.com/oblador/react-native-animatable) - Standard set of easy to use animations and declarative transitions for React Native
- [react-native-interactable](https://github.com/wix/react-native-interactable) - experimental implementation of high performance interactable views in React Native
- [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated) - React Native's Animated library reimplemented
- [react-native-spruce](https://github.com/prscX/react-native-spruce) - React Native Bridge for Spruce Animation Library
- [react-native-skia](https://github.com/Shopify/react-native-skia) - High-performance 2d Graphics for React Native using Skia!
- [react-native-magic-move](https://github.com/IjzerenHein/react-native-magic-move) - Create magical move transitions between scenes in react-native 🐰🎩✨ (shared element transitions)
- [react-native-gl-model-view](https://github.com/rastapasta/react-native-gl-model-view) - Display and animate textured Wavefront .OBJ 3D models with 60fps (iOS)
- [react-native-animated-sprite](https://github.com/micahrye/react-native-animated-sprite) - A feature rich declarative component for animation, tweening, and dragging sprites.
- [react-native-animated-math](https://github.com/rastapasta/react-native-animated-math) - An Animated API math extension - implements sin, cos, tan and pow as Animated Nodes with full Native Driver support

## Support

<a href="https://www.buymeacoffee.com/mmsmadi"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" style="height: 41px !important;width: 174px !important"  target="_blank"></a>
