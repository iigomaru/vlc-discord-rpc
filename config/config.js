module.exports = {

  // The full path to your VLC executable
  // If left blank, typical defaults are used
  vlcPath: "",

  rpc: {

    // The Discord application ID for the rich presence
    id: '410664151334256663',

    // How frequently in milliseconds to check for updates
    updateInterval: 5000,

    // When playback is paused, wait this many milliseconds 
    // before removing your rich presence
    sleepTime: 30000,

    // Show the album track number when applicable. Example: (2 of 10)
    displayTrackNumber: true,

    // Show the remaining playback time
    displayTimeRemaining: true,

    // Keep rich presence when playback is stopped 
    showStopped: false,

    // If true, VLC will not be opened for you.
    // Note: You must set a password
    detached: true,

    // Changes the big icon of the rich presence
    // Some of the available icons are: vlc, vlcflat, vlcblue, vlcneon, vlcxmas
    largeIcon: "vlc",

  },

  vlc: {

    // If no password is given, a random password is used
    password: 'PASSWORD',

    // This must correspond with the port VLC's web interface uses
    port: 8080,

    // Hostname of the VLC web interface. Nobody should need to change this
    address: 'localhost'

  },
};
