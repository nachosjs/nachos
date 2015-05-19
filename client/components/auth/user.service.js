'use strict';

angular.module('nachosApp')
  .factory('User', function ($resource) {
    return $resource('http://localhost:1337/api/users/:id/:controller', {
        id: '@_id'
      },
      {
        changePassword: {
          method: 'PUT',
          params: {
            controller: 'password'
          }
        },

        forgotPassword: {
          method: 'POST',
          params: {
            id: 'forgotPassword'
          }
        },

        resetPassword: {
          method: 'POST',
          params: {
            id: 'resetPassword'
          }
        },

        validate: {
          method: 'POST',
          params: {
            id: 'validate'
          }
        },

        revalidate: {
          method: 'POST',
          params: {
            controller: 'revalidate'
          }
        },

        get: {
          method: 'GET',
          params: {
            id: 'me'
          }
        },

        update: {
          method: 'PUT'
        },

        addRole: {
          method: 'POST',
          params: {
            controller: 'addRole'
          }
        },

        removeRole: {
          method: 'POST',
          params: {
            controller: 'removeRole'
          }
        }
      });
  });