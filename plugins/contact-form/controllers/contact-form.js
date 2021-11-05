'use strict';

const { default: createStrapi } = require("strapi");

/**
 * contact-form.js controller
 *
 * @description: A set of functions called "actions" of the `contact-form` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  }, 
  postMessage: async(ctx) => {
    const data = ctx.request.body;
    const result = await strapi.entityService.create({data}, {
      model: "plugins::contact-form.message",
    })

    ctx.send({
      message: 'post successfully'
    });
  }
};
