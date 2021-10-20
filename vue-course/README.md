# vue-course

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Random

Vue Component Life Cycle Hooks

#### new Vue()

- beforeCreate - no access to data and computed properties
- created

#### template compilation

- beforeMount - no access to vm.\$el
- mounted

#### changes

- beforeUpdate - linking to the old DOM node
- updated

#### removal

- beforeDestroy
- destroyed - all event listeners and watchers are removed, linking to this is still there
