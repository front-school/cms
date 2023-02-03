'use strict';

/**
 * secondary-announcement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::secondary-announcement.secondary-announcement');
