# wikipediajs

[![Travis build](https://img.shields.io/travis/maximodleon/wikipediajs.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/v/wikipediajs.svg?style=flat-square)]()

Promise-based wikipedia API wrapper

# Table of contents

* [Installation](#installation)
* [Features](#features)
* [Usage](#usage)

# Installation

Install via [npm](https://www.npmjs.com/package/wikipediajs)

`npm install wikipediajs`

# Features
* Search wikipedia articles in any language
* Get randmon a random article
* Get feed for Picture of the day, featured article or 'on this day' articles

# Usage

* import module

```js
 import wiki from 'wikipediajs'
```

* Search for article

```js
 wiki.search('savanna hawk')
   .then((res) => console.log(res))
   .catch((error) => console.log(error))
```

* search for an article in different language

```js
 wiki.search('Veulta a san juan', 'es')
   .then((res) => console.log(res))
   .catch((error) => console.log(error))
```