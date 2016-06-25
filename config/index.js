/* This file is a config, that exposes various
   meaningful values to the rest of the application.
   This is done using the module.exports function,
   which sets them when require('./thisfile') is run. */
   
var NAMESPACE = process.env.MAKI_SERVICE_NAMESPACE || 'bitboard';
var DATABASE  = process.env.MAKI_DATABASE_NAME || NAMESPACE;

module.exports = {
  service: {
    name: process.env.MAKI_SERVICE_NAME || 'Bitboard' ,
    authority: process.env.MAKI_SERVICE_AUTHORITY || 'localhost:9200' ,
    namespace: NAMESPACE ,
    mission: process.env.MAKI_SERVICE_MISSION || 'a public service that provides a unified resource for blockchain-industry-oriented job postings.',
    description: process.env.MAKI_SERVICE_DESCRIPTION || 'The best place to find and list jobs in the space of blockchain, decentralized, and cryptocurrency technology.',
    source: 'https://github.com/willricketts/bitboard',
    points: [
      {
        header: 'Already registered?',
        description: 'Go on then.  Get logged in.  You\'re _groovy_.',
        action: {
          text: 'Log In &raquo;',
          link: '/sessions'
        }
      }
    ],
    icon: 'lab'
  },
  dns: {
    name: process.env.MAKI_DNS_NAME || 'localhost'
  },
  services: {
    http: {
      port: process.env.MAKI_HTTP_PORT || 9200 ,
      host: process.env.MAKI_HTTP_HOST || 'localhost'
    },
    spdy: {
      host: process.env.MAKI_HTTP_HOST || 'localhost',
      port: process.env.MAKI_SPDY_PORT || 9643
    }
  },
  database: {
    name: DATABASE ,
    masters: (process.env.MAKI_DATABASE_MASTERS)
      ? JSON.parse(process.env.MAKI_DATABASE_MASTERS)
      : [ 'localhost' ]
  },
  sessions: {
    enabled: process.env.MAKI_SESSIONS_ENABLE || true ,
    secret:  process.env.MAKI_SESSIONS_SECRET || 'this can be any random string, you can even use this one. :)'
  },
  redis: {
    host: process.env.MAKI_REDIS_HOST || 'localhost',
    port: process.env.MAKI_REDIS_PORT || 6379
  },
  sockets: {
    timeout: process.env.MAKI_SOCKETS_TIMEOUT || 30000
  },
  auth: {
    local: {
      enabled: true
    }
  },
  views: {
    plugins: {
      'moment': require('moment')
    },
    client: {
      render: process.env.MAKI_VIEWS_CLIENT_RENDER || false
    }
  }
};
