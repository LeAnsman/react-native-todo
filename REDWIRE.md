# React Native Workshop

### Setting up the development environment

Expo Go or React Native CLI ?

- Expo Go is the easiest way, no need to install anything but Expo Go on your smartphone.

- React Native CLI requires Xcode or Android Studio to get started.

Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer.

- On Android, use the Expo Go app to scan the QR code from your terminal to open your project.

- On iOS, use the built-in QR code scanner of the default iOS Camera app.

### Docs

- Expo Go Doc : https://docs.expo.dev/

- React Native Doc : https://reactnative.dev/docs/getting-started

#### Core Components

- View

  - Basic building block of UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input.
  - Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views.
  - A container that supports layout with flexbox, style, some touch handling, and accessibility controls.

  - Is equal to a non scrolling div tag

- Text

  - Displays, styles, and nests strings of text and even handles touch events

  - Is equal to a p tag

- Image

  - Displays different types of images

  - Is equal to a img tag

- ScrollView

  - A generic scrolling container that can contain multiple components and views

  - Is equal to a div tag

- TextInput

  - Allows the user to enter text

  - Is equal to a input tag with the type="text"

#### Useful Components

- SafeAreaView

  - Acts like a regular View component from React Native and includes additional padding to position the content below the notch or status bar of a device.

- ScrollView

  - Scrolling container that can contain multiple components and views.

- FlatList (renderItem props required)

  - Rendering basic lists

- SectionList (renderItem props required)

  - Rendering a set of data broken into logical sections

- TouchableOpacity

  - A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.
