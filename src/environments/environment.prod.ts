const packageJson = require('../../package.json');

export const environment = {
  appName: 'escenit',
  owner: 'Escenit Media S.L.',
  envName: 'PROD',
  themeName: 'default-theme',
  production: true,
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
  }
};
