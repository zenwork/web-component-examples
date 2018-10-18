# Angular Web Component Examples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Overview

This angular project builds an angular element web component that is then usable as a standalone web component. But it is not completely closed off from the parent as there is some kind of angular global registry and angular itself is also runinning outside the web component's scope. So the component is only partially hidden from the parent DOM.


## Run example
```
npm install
npm run build:element
http-serve dist/rps-angular-dev
```

to view the web component in a web page:
`http://localhost:8080/index.html`

to view the angular app in the traditional way:
`http://localhost:8080/wc.html`

