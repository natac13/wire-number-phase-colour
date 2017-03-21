{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules",
    "app",
    "build",
    "data",
    "test"
  ],
  "verbose": true,
  "execMap": {
    "js": "node"
  },
  "events": {
    "restart": "\"App restarted due to:\n'$FILENAME'\""
  },
  "watch": [
    "server/",
    "./webpack.*"
  ],
  "ext": "js json"
}