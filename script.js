const config = {
    type: Phaser.AUTO, // Rendering context (default: Phaser.AUTO)
    width: 800, // Width of the game canvas (default: 800)
    height: 560, // Height of the game canvas (default: 600)
    backgroundColor: '#ffffff', // Background color (default: '#000000')

    parent: 'gameFrame', // HTML element where the game will be placed (default: '')

    scene: [Title], // An array of scenes to load (default: [])

    physics: {
        default: 'arcade', // Physics system to use (default: 'arcade')
        arcade: {
            gravity: { x: 0, y: 0 }, // Global gravity in Arcade Physics (default: { x: 0, y: 0 })
            debug: false, // Set to true for debugging collision boxes (default: false)
        },
    }
}

const game = new Phaser.Game(config);