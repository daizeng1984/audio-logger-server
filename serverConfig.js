exports.superlogConfig = {
  dbServer: {
    protocol: 'https://',
    host: 'ec2-54-255-239-178.ap-southeast-1.compute.amazonaws.com:6984',
    user: '',
    password: '',
    userDB: 'audio-logger-users',
    couchAuthDB: '_users'
  },
  mailer: {
    fromEmail: 'gmail.user@gmail.com',
    options: {
      service: 'Gmail',
        auth: {
          user: 'gmail.user@gmail.com',
          pass: 'userpass'
        }
    }
  },
  security: {
    maxFailedLogins: 3,
    lockoutTime: 600,
    tokenLife: 86400,
    loginOnRegistration: true,
  },
  userDBs: {
    defaultDBs: {
      private: ['audiologger']
    }
  },
  providers: { 
    local: true
  }
}

