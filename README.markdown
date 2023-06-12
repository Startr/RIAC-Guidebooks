# Robot in a Can Guidebook Template System

## Introduction

The Startr - Robot in a Can guidebook template system simplifies the creation of education guides. The purpose of this document is to explain how to use the system and provide examples of how it can be used for different types of educational materials. This guidebook template system is based on the Robot in a Can by A.Somma and B. Douek. 'Robot in a Can' (RiaC) system, which was developed in partnership with The Study, The Preville Arts Center, and Montreal Inc.

Original sketching of this temple system  was created as a Pen on CodePen.io. Original URL: [https://codepen.io/openco/pen/2656175afc1d80e24427ec17f45f8da4](https://codepen.io/openco/pen/2656175afc1d80e24427ec17f45f8da4).

## Prerequisites

To use this guidebook template system, we will need to have:
- node & npm or yarn installed
- this repo cloned to our local machine or access to a cloud build env (TODO document)

## Setup

### Install the Guidebook Template System

Ensure we have a recent version of [node & npm](https://nodejs.org/en/download/) or [yarn](https://yarnpkg.com/en/docs/install) installed.

All of the following steps run on the command line within this directory. Our can substitute `npm` for `yarn` depending on our preferences.

Install all the necessary packages:

```
npm install
```

## Build

To build for distribution:

```
npm run build
```

All of the final output will be dropped into the [/dist/](./dist) folder.

## Server

Run a local server that will automatically compile our code & refresh when you save a change!

```
npm run serve
```

---

## Folder Structure

```
/exported-item/
|-- /build/ - Build scripts
|  |-- gulpfile.js - The tasks for the main build process
|  |-- util.js - Utilities used by the tasks
|
|-- /src/ - Our code
|  |-- /data               - The guidbook json files for each guide
|  |-- /imgs               - the guidbook images
|  |-- index.template.html - The wrapper around our compiled HTML that includes any external stylesheets and scripts
|  |-- index.partial.(html|pug|haml|...) - The raw HTML input or preprocessor equivalent
|  |-- style.(css|scss|less|...) - The raw CSS input, or preprocessor equivalent
|  |-- script.(js|ts|coffee|...) - The raw JavaScript input, or preprocessor equivalent
|
|-- /dist/ - The compiled output after running `npm run build`
|  |-- index.html
|  |-- script.js
|  |-- style.css
|
|-- /backup/ - Backup copy of the original code and in-browser preview from CodePen
|  |-- /dist/
|  |-- /src/
```

Each file in the src folder has a corresponding file in the dist folder. The src files are what get processed by the compiler. The dist folder contains what gets served up to the browser. The dist folder contains the compiled output of the files from the src folder.
