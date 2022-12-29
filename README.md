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
- [Utilities](#-utilities)
- [Dependencies that used in almost every projects](#-dependencies-that-used-in-almost-every-projects)
- [Open Source Apps](#-open-Source-Apps)
- [Tutorials](#-tutorials)
- [Books](#-books)
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
Android: npx react-native run-android  or  yarn android

iOS: npx react-native run-ios  or  yarn ios
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
- [portalize](https://github.com/jeremybarbet/react-native-portalize) - The simplest way to render anything on top of the rest.
- [moment](https://github.com/moment/moment) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [axios](https://github.com/axios/axios) - Promise based HTTP client
- [react-native-render-html](https://github.com/meliorence/react-native-render-html) - An iOS/Android pure javascript react-native component that renders your HTML into 100% native views
- [react-native-maps](https://github.com/lelandrichardson/react-native-maps) - React Native Map components for iOS + Android
- [react-native-mapbox-gl](https://github.com/mapbox/react-native-mapbox-gl) - A Mapbox GL react native module for creating custom maps
- [react-native-intersection-observer](https://github.com/zhbhun/react-native-intersection-observer) - React Native implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport.
- [react-native-exception-handler](https://github.com/master-atul/react-native-exception-handler) – Avoid silent crash and errors on the production build of your app
- [react-native-swiper](https://github.com/leecade/react-native-swiper) - Swiper component for React Native.
- [react-native-snap-carousel](https://github.com/archriss/react-native-snap-carousel) - Swiper component for React Native with previews, multiple layouts, parallax images, performant handling of huge numbers of items, and RTL support
- [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat) - The most complete chat UI for React Native (formerly known as Gifted Messenger)
- [stream-chat-react-native](https://github.com/GetStream/stream-chat-react-native) - The official React Native and Expo components for Stream Chat, a service for building chat applications.
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

## Utilities

- [upgrade-helper](https://github.com/react-native-community/upgrade-helper) - A web interface to support React Native developers in upgrading their apps. [Link to tool](https://react-native-community.github.io/upgrade-helper)
- [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge) - The easiest way to upgrade React Native versions. You can find diffs for every React Native version, that are created by diffing the previous version with a newly created app in the new version.
- [react-native-debugger](https://github.com/jhen0409/react-native-debugger) - The standalone app for React Native Debugger, with React DevTools / Redux DevTools
- [sentry-react-native](https://github.com/getsentry/sentry-react-native) - Sentry's React Native SDK enables automatic reporting of errors and exceptions, and identifies performance issues in your application.
- [generact](https://github.com/diegohaz/generact) - CLI that generates components based on existing ones no matter how you structure your app
- [react-native-rename](https://github.com/junedomingo/react-native-rename) - Rename react-native app with just one command
- [Electrode Native](https://github.com/electrode-io/electrode-native) - A platform to ease the integration of React Native components in existing mobile applications.
- [react-native-snippets](https://github.com/Shrugs/react-native-snippets) - A collection of Sublime Text Snippets for react-native
- [react-native-bundle-visualizer](https://github.com/IjzerenHein/react-native-bundle-visualizer) - See what's inside your RN bundle; useful for optimizing the bundle size
- [AsyncStorage Dev Menu Item](https://github.com/jsoendermann/react-native-async-storage-dev-menu-item) - Adds an option to your dev menu to log the content of your AsyncStorage.
- [rn-nodeify](https://github.com/tradle/rn-nodeify) - hack to allow react-native projects to use node core modules
- [react-native-ruler](https://github.com/lfkwtz/react-native-ruler) - A devtool for measuring pixel dimensions on your React Native screens
- [BuilderX](https://builderx.io/) - A design tool which writes React Native code for you , Desktop Mac app to replace your traditional UX design tools.
- [CodePush](https://github.com/microsoft/react-native-code-push) - Push code updates to your apps, instantly
- [Storybook](https://storybook.js.org) - UI development environment for your React components
- [BugSnag](https://www.bugsnag.com/platforms/react-native-error-reporting/) - A tool that logs native & JS errors. Has a free tier. Includes useful data about the user, environment, session, release, etc.
- [SimpleLocalize CLI](https://github.com/simplelocalize/simplelocalize-cli) - An open source Localization CLI tool for finding i18n keys in project files.

## Dependencies that used in almost every projects

- [react-native-async-storage](https://react-native-async-storage.github.io/async-storage/docs/install)
- [react-navigation](https://reactnavigation.org/docs/getting-started)
- [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info)
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [react-redux](https://github.com/reduxjs/react-redux)
- [redux](https://github.com/reduxjs/redux)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
- [moment](https://github.com/moment/moment)
- [react-native-modalbox](https://github.com/maxs15/react-native-modalbox)
- [axios](https://github.com/axios/axios)
- [react-native-firebase](https://rnfirebase.io)
- [formik](https://github.com/jaredpalmer/formik)
- [yup](https://github.com/jquense/yup)

## Open Source Apps

Open source React Native apps and other examples.

- [Artsy](https://github.com/artsy/eigen) - The mobile app for [artsy.net](https://artsy.net). Discover fine Art. The Art world in your Pocket.
- [f8app](https://github.com/fbsamples/f8app) - Official F8 (Facebook Developer Conference) app of 2017. See [blog post](http://makeitopen.com/blog/2017/12/04/blog-post-f82017-open-source.html).
- [30-days-of-react-native](https://github.com/fangwei716/30-days-of-react-native) - 30 days of React Native examples (inspired by 30DaysofSwift)
- [react-native-nw-react-calculator](https://github.com/benoitvallon/react-native-nw-react-calculator) - A mobile, desktop and website App with the same code
- [GitPoint](https://github.com/gitpoint/git-point) - A mobile GitHub client for both iOS and Android.
- [Hacker News (iOS & Android)](https://github.com/iSimar/HackerNews-React-Native)
- [reading](https://github.com/attentiveness/reading) - Reading App Write In React-Native.
- [Status.im](https://github.com/status-im/status-react) - Ethereum client.
- [GitHub Popular](https://github.com/crazycodeboy/GitHubPopular) - This is a GitHub most popular repositories viewer with React Native.
- [Dribbble React Native](https://github.com/catalinmiron/react-native-dribbble-app)
- [react-native-gitfeed](https://github.com/xiekw2010/react-native-gitfeed) - Yet another Github client written with react-native(iOS & android)
- [Finance React Native](https://github.com/7kfpun/FinanceReactNative) - iOS's stocks app clone written in React Native for demo purpose.
- [Quirk 🐙](https://github.com/flaque/quirk) - Cognitive Behavioral Therapy for iOS and Android.
- [TaskRabbit's Sample App](https://github.com/taskrabbit/ReactNativeSampleApp) - a testing ground for Task Rabbit's app making
- [React Weather](https://github.com/stage88/react-weather) - A simple weather app built with React Native
- [Boostnote](https://github.com/BoostIO/boostnote-mobile) - Boostnote: open source note taking.
- [react-native-sudoku](https://github.com/nihgwu/react-native-sudoku) - a sudoku game written in React Native
- [react-native-hiapp](https://github.com/BelinChung/react-native-hiapp) - A simple and Twitter like demo app written in react-native
- [React Native Netflix](https://github.com/mariodev12/react-native-netflix) - A Netflix-like app.
- [what the thing?](https://github.com/vigzmv/what_the_thing) - Point camera at things to learn how to say them in a different language.
- [react-native-basketball](https://github.com/FaridSafi/react-native-basketball) - a clone of the Facebook Basketball game
- [Surmon.me.native](https://github.com/surmon-china/surmon.me.native) A react-native applaction for surmon.me
- [An example React Native project for client login authentication](https://github.com/ryanmcdermott/react-native-login)
- [GitterMobile](https://github.com/terrysahaidak/GitterMobile) - Gitter (chat for github) client for iOS and Android
- [ReactNativeRedditReader](https://github.com/akveo/react-native-reddit-reader)
- [Assemblies](https://github.com/buildreactnative/assemblies) - a Meetup clone
- [DuckDuckGo App (Unofficial)](https://github.com/kiok46/duckduckgo)
- [Ziliun React Native](https://github.com/sonnylazuardi/ziliun-react-native) - Wordpress based article reader built with react native
- [Luno](https://github.com/alwx/luno-react-native) - A ClojureScript React Native app demonstration
- [ReactNativeHackerNews](https://github.com/jsdf/ReactNativeHackerNews)
- [iOS Conference App made with React Native](https://github.com/mikkoj/NortalTechDay)
- [MagicMirror](https://github.com/ajwhite/MagicMirror)
- [Redux Demo](https://github.com/chentsulin/react-native-counter-ios-android) - Minimal implement of redux counter example on ReactNative iOS and Android
- [React Native Embedded App](https://github.com/dsibiski/react-native-embedded-app-example) -A collection of examples for using React Native in an existing iOS application
- [React Native Example, Geo and Location](https://github.com/bgryszko/react-native-example)
- [uestc-bbs-react-native](https://github.com/just4fun/uestc-bbs-react-native) - An iOS client for <http://bbs.uestc.edu.cn/> written in React Native with Redux
- [Sh\*\*t! I Smoke](https://github.com/amaurymartiny/shoot-i-smoke) - Know how many cigarettes you smoke based on the pollution of your location.
- [PxView](https://github.com/alphasp/pxview) - An unofficial Pixiv app client for Android and iOS
- [BBC News (Unofficial)](https://github.com/joeltrew/BBCNews-React-Native) - a BBC news app
- [HackerBuzz](https://github.com/RCiesielczuk/HackerBuzz-ReactNative) - a Hacker News reader.
- [Vecihi App](https://github.com/yasintoy/vecihi) – Build your own photo sharing app.
- [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat.ReactNative) - Open Source Team Communication
- [HackerWeb](https://github.com/cheeaun/hackerweb-native) - A simply readable Hacker News web app for iOS & Android.
- [Buyscreen sample](https://github.com/appintheair/react-native-buyscreen)
- [NewsWatch video viewer](https://github.com/bradoyler/newswatch-react-native)
- [YouTrack Mobile](https://github.com/JetBrains/youtrack-mobile) – a client for YouTrack – issue tracker from JetBrains.
- [ndash](https://github.com/alexindigo/ndash) - npm dashboard.
- [Look Lock](https://github.com/7kfpun/PhotosReactNative) - An app for showing photos without worries.
- [Kakapo - ambient sound mixer](https://github.com/bluedaniel/Kakapo-native)
- [Appointments](https://github.com/iZaL/my-appointment) - Full-fledged ReactNative App for Booking Appointments
- [Alt/Flux Demo](https://github.com/mrblueblue/react-native-alt-demo)
- [Buttercup Mobile](https://github.com/buttercup/buttercup-mobile) - Mobile password manager
- [Insta Snap](https://github.com/iZaL/insta-snap) - Image Sharing App
- [live translator](https://github.com/agrcrobles/react-native-live-translator) - An app that translates in real time what you see from your mobile.
- [Finance MacOS React Native](https://github.com/7kfpun/FinanceMacOSReactNative) - iOS's Stocks App clone written for MacOS with Touch Bar support. Data is pulled from Yahoo Finance.
- [NBAreact](https://github.com/jbkuczma/NBAreact)
- [Urban Dictionary](https://github.com/edwinbosire/Urbandict) - Mobile implementation of the popular Urban Dictionary website.
- [ASOS](https://github.com/edwinbosire/ASOS) - E-commerce app for ASOS (clone)
- [Reddit made with React Native and Redux](https://github.com/KevinOfNeu/xReddit)
- [react-native-redux-facebook](https://github.com/bkspace/react-native-redux-facebook) - A simple React Redux Facebook authentication demo app.
- [Hekla for Hacker News](https://github.com/birkir/hekla) - Hackernews client with TypeScript, mobx-state-tree, native navigation and css modules.
- [QRCode App](https://github.com/insiderdev/react-native-qrcode-app) - application for scanning and generating QR codes.
- [Nearby Live](https://github.com/N3TC4T/Nearby-Live) - An unofficial NearbyLive app for Android and iOS
- [SoundcloudMboX](https://github.com/trazyn/SoundcloudMboX) SoundcloudMobX is the Soundcloud for iOS, Build with React-Native and MobX.
- [Native iOS font list](https://github.com/yayolius/react-native-font-list)
- [React Native Chromecast App](https://github.com/holoed/ChromeCast_ReactNative)
- [MoeFM](https://github.com/codeestX/MoeFM) - A light MusicPlayer build with React Native & Redux for both Android and iOS.
- [iTunesConnect](https://github.com/oney/iTunesConnect) - Unofficial iTunes Connect App
- [Sequent](https://github.com/sobstel/sequent) - short-term memory training game (W/ Redux).
- [AudienceNetworkReactNative](https://github.com/7kfpun/AudienceNetworkReactNative) - Facebook Audience Network Performance Tool.
- [rndrawer-implemented-rnrouter](https://github.com/efkan/rndrawer-implemented-rnrouter) - A react-native-drawer implemented example and scaffolding for react-native-router-flux
- [Magento 2 Mobile App](https://github.com/troublediehard/magento-react-native) - Magento 2.x mobile app built with React Native
- [iOS app that transcript your voice with IBM Watson Cloud](https://github.com/yrezgui/meowth-ios)
- [Splitcloud](https://github.com/egm0121/splitcloud-app) - Share listening to two songs at the same time from Soundcloud (by splitting right/left channels).
- [ZudVPN](https://github.com/zudvpn/ZudVPN) - Deploy private VPN on major Cloud Providers with [ZudVPN](https://www.zudvpn.com)
- [Todo List](https://github.com/rishabhbhatia/react-native-todo) - Todo-List app using SwipeView with ES6 standards for iOS and Android.
- [Paramap](https://github.com/twist900/paramap) - Accessability map. React-native with Redux and Firebase. iOS and Android.
- [Confreaks](https://github.com/cabaret/confreaks-react-native)
- [Vocab React Native](https://github.com/thaiinhk/VocabReactNative) - Thai Vocabulary Learning App
- [Premier League](https://github.com/ennioma/react-native-premier-league)
- [Roxie](https://github.com/venepe/react-native-roxie) - Sound processing and bluetooth hardware control.
- [Roverz](https://github.com/mongrov/roverz) - A native mobile chat client library for Rocket.Chat on both iOS and Android.
- [Text Blast](https://github.com/SeshApp/text-blast-react-native) - iOS client for MMS text blasting app with analogous [ionic version](https://github.com/SeshApp/text-blast-ionic) for comparison
- [NewYorkTimesTopStories](https://github.com/vidyuthd/NYTimesTopStories-React-Native) - Read Topstories of NewYorkTimes using its api written for android in react-native.
- [Quick-Sample](https://github.com/innFactory/react-native-quick-sample) - A small and simple example app with navigation, data persistence, redux, listview and animation.
- [iGap Plus](https://github.com/RooyeKhat-Media/iGap-Plus) - iGap+ is a cross-platform messaging application (Currently Android , iOS and Windows UWP) and has been created using all latest modern technologies. iGap+ is designed to easily support additional platforms like web, macOS and linux.
- [Posters_Galore_Android](https://github.com/marmelab/Posters_Galore_Android) - An experimental Android application using Redux and a REST API
- [react-native-medium-clap-animation](https://github.com/saketkumar95/react-native-medium-clap-animation) - Medium Clap Animation in React Native
- [HupuApp](https://github.com/MelonRice/ReactNative-HupuJRS) - A Third-party Hupu App (<http://bbs.hupu.com/>) client implemented using React Native (Android and iOS).
- [react-native-uber-clone](https://github.com/saketkumar95/react-native-uber-clone) - Uber UI Clone with animations in react native
- [Commit Strip (Unofficial)](https://github.com/rizalibnu/commit-strip-react-native) - A CommitStrip.com reader built in React Native.
- [react-native-otello](https://github.com/hiaw/react_native_otello) - a reversi game written in React Native
- [GitHub Jobs Search App (Unofficial)](https://github.com/rizalibnu/github-jobs-react-native) - A GitHub Jobs Search App built in React Native.
- [Minimal Quotes](https://github.com/insiderdev/minimal-quotes) - Mobile app that throws you random quotes in a super clean minimal version.
- [Hello Bemans](https://github.com/rapportyou/HelloBemans) - Health Trainer Connection App (Android Version)
- [RNV2ex](https://github.com/dyygtfx/RNV2ex) - react-native for v2ex
- [Renote](https://github.com/mavajee/react-native-note-example) - A simple react-native example app for make notes.
- [Manyverse](https://github.com/staltz/manyverse) – Social network off the grid (a Scuttlebutt Android client)
- [Bristol Pound](http://blog.scottlogic.com/2017/11/22/developing-bristol-pound-an-open-source-react-native-app.html) - An app for the Bristol Pound, a UK-based local currency.
- [React Native Showcase](https://facebook.github.io/react-native/showcase.html)
- [Instagram clone](https://github.com/reindexio/reindex-examples/tree/master/react-native-gallery) - an Instagram clone
- [Joplin](https://github.com/laurent22/joplin/tree/master/ReactNativeClient) - A note taking app for desktop, CLI, and mobile (linked here is the mobile app).
- [Cat-or-dog](https://github.com/punksta/Cat-or-dog) - Simple game with drag'n'drops and animations.
- [Forex Rates](https://github.com/MicroPyramid/forex-rates-mobile-app) - Foreign exchange rates. currency rate converter. Historical exchange rates. Android and iOS.
- [Smog Alert App](https://github.com/Bartozzz/smog-alert-app) – provides real-time air pollution data all around the world and shows nearby polluters.
- [Audio Book App](https://github.com/minhtc/sachnoiapp) – Completed Audiobook app with some cool animations.
- [FastBuy](https://github.com/Bruno-Furtado/fastbuy-app) - App to manage the products from a dummy Store (built with React Native and Redux).
- [Hydropuzzle](https://github.com/hydropuzzle/hydropuzzle) - Stylish puzzle adventure game.
- [Github-Gist](https://github.com/Arjun-sna/react-native-githubgist-client) - React native mobile application for github gist
- [Lyrics King](https://github.com/SKempin/Lyrics-King-React-Native) - Minimalist and stylish lyrics search app.
- [TensorFlow.js Starter](https://github.com/t73liu/tfjs-starter) - TensorFlow.js starter app using MobileNet to predict image class. [Blog post](https://t73liu.github.io/posts/experimenting-with-tfjs/) for additional context.
- [Art Museum](https://github.com/pedrobern/react-native-art-museums-app) - Browse through the endless Harvard's Art Museum collection.
- [NMF.earth](https://github.com/NotMyFaultEarth/nmf-app) - Calculate, understand and reduce your carbon footprint. Available for Android and iOS, using Expo, Redux Toolkit and Typescript.
- [Nyxo](https://github.com/hello-nyxo/nyxo-app) - Sleep tracker and sleep coaching app. Available for Android and iOS.
- [Post Card App](https://github.com/adarsh0d/postcardApp) - Create old style post card and share on whatsapp as image. Built with Expo and available for android.

## Tutorials

Walkthroughs and tutorials that help you learn React Native.

- [Official React Native tutorial](http://facebook.github.io/react-native/docs/tutorial.html#content)
- [React Native Crash Course for Beginners - Build 4 Apps in 14 Hours](https://www.youtube.com/watch?v=AkEnidfZnCU)
- [React Native Chat App Tutorial](https://www.youtube.com/watch?v=B6bKBiljKxU)
- [React Native Animation Tutorials](https://www.youtube.com/playlist?list=PLYxzS__5yYQmdfEyKDrlG5E0F0u7_iIUo)
- [Start React Native - Animation tutorial series](https://start-react-native.dev/)
- [React Native in Arabic: Build a newspaper app](https://www.youtube.com/playlist?list=PLk-CkzAysw4BLLNtATmnZOA8E8I6TP8MS) - A series of videos in Arabic showing you how to build a newspaper app with React Native.
- [Making a Custom Hook](https://www.youtube.com/watch?v=Jl4q2cccwf0)
- [Building an AI App with ChatGPT, React Native, and NextJS](https://www.youtube.com/watch?v=kR9Kgo8H7po)
- [React Native Apple Login](https://www.youtube.com/watch?v=IN9_XzX1iDg)
- [React Native Facebook Login](https://www.youtube.com/watch?v=fDK7N82Szho)
- [React Native Google Login](https://www.youtube.com/watch?v=MBMWiTsqnck)
- [Setting up background tasks that run periodically when app is closed in React Native](https://hackernoon.com/easy-os-background-tasks-in-react-native-bc4476c48b8a)
- [Deploying React Native using Fastlane](https://shift.infinite.red/simple-react-native-ios-releases-4c28bb53a97b#.bjifers3r)
- [Facebook's F8 App Walkthrough Tutorial: React Native, Redux, Relay, Flow, Jest](http://makeitopen.com/)
- [Introducing React Native (on Ray Wenderlich's)](http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript)
- [Leverage Existing iOS Views In Your React Native App](http://moduscreate.com/blog/leverage-existing-ios-views-react-native-app/)
- [React Native Periscope Hearts Animation](http://browniefed.com/blog/2015/09/07/react-native-periscope-hearts-animation/)
- [React Native Youtube Animated Video Slide](http://browniefed.com/blog/2015/08/31/react-native-youtube-animated-video-slide/)
- [React-Native Animated with React-Art - Firework Tap To Shoot](http://browniefed.com/blog/2015/08/29/react-native-animated-with-react-art-firework-show/)
- [React-native Animated API with PanResponder](http://browniefed.com/blog/2015/08/15/react-native-animated-api-with-panresponder/)
- [React-native Animated ScrollView Row Swipe Actions](http://browniefed.com/blog/2015/08/01/react-native-animated-listview-row-swipe/)
- [React-native press and hold button actions](http://browniefed.com/blog/2015/08/22/react-native-press-and-hold-button-actions/)
- [React Native Express](http://www.reactnativeexpress.com/)
- [Simple React Native forms with redux-form, immutable.js and styled-components](http://esbenp.github.io/2017/01/06/react-native-redux-form-immutable-styled-components/)
- [A Mini-Course on React Native Flexbox](https://medium.com/@yoniweisbrod/a-mini-course-on-react-native-flexbox-2832a1ccc6)
- [Adding and removing custom fonts in React Native IOS Android](https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4#.s73pqh4ez)
- [Adding Custom Fonts to A React Native Application](https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f)
- [React Native for Designers](https://designcode.io/react-native)

## Books

Books - free and commercial.

- [Programming React Native](https://leanpub.com/programming-react-native) - (Free) An in-depth React Native book that you should read after you've done a couple tutorials of the many out there.
- [React Native Animation Book](http://browniefed.com/react-native-animation-book/) - (Free) React Native Animation.
- [React Native In Action](https://www.manning.com/books/react-native-in-action) - Learn how to build applications using React Native from the ground up.
- [Fullstack React Native](https://fullstackreact.com/react-native/) - The up-to-date, in-depth, complete guide to React Native.

## Support

<a href="https://www.buymeacoffee.com/mmsmadi"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" style="height: 41px !important;width: 174px !important"  target="_blank"/>
