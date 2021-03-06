import {KendoConfigBuilder} from './config-builder';
import * as LogManager from 'aurelia-logging';

export function configure(aurelia, configCallback) {
  let builder = aurelia.container.get(KendoConfigBuilder);
  let logger = LogManager.getLogger('aurelia-kendoui-bridge');

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

    // Pull the data off the builder
  let resources = builder.resources;

  if (resources.length > 0) {
    aurelia.globalResources(resources);
  }

  logger.info(`Loading ${resources.length} wrappers`, resources);

  if (resources.length > 10) {
    logger.warn('when using many wrappers, it is recommended not to use .core(), .pro() or .dynamic()' +
      ' but instead to load wrappers via <require></require>.' +
      'this should significantly speed up load times of your application.');
  }
}

// build-index-remove start
export {version} from './version';
export {generateBindables, delayed} from './common/decorators';
// build-index-remove end
