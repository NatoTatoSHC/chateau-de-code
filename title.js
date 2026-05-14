class Title extends Phaser.Scene {
    constructor() {
        super('title')
    }

    // Initialization code here
    init() {
        
    }

    // Preload assets here
    preload() {
        this.load.image('bg', 'assets/title/bg.png')
        this.load.image('logo', 'assets/title/logo.png');
        this.load.image('play', 'assets/title/play.png');
        this.load.image('settings', 'assets/title/settings.png');
        this.load.image('exit', 'assets/title/exit.png');
    }

    // Create game objects and set up the scene here
    create() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'bg');

        this.add.image(this.scale.width / 2, this.scale.height / 5, 'logo').setScale(.75);
        var playButton = this.add.image(this.scale.width / 2, this.scale.height / 2, 'play').setScale(.4);
        playButton.setInteractive({pixelPerfect: true});
        playButton.on('pointerdown', () => {
            this.scene.start('title');
            alert();
        });
        playButton.on("pointerover", () => {
            playButton.setTint(Phaser.Display.Color.GetColor(200, 200, 200));
        });
        playButton.on("pointerout", () => {
            playButton.setTint(Phaser.Display.Color.GetColor(255, 255, 255));
        });

        var settingsButton = this.add.image(this.scale.width / 2, (this.scale.height / 2) + 100, 'settings').setScale(.4);
        settingsButton.setInteractive({pixelPerfect: true});
        settingsButton.on('pointerdown', () => {
            this.scene.start('title');
            alert();
        });
        settingsButton.on("pointerover", () => {
            settingsButton.setTint(Phaser.Display.Color.GetColor(200, 200, 200));
        });
        settingsButton.on("pointerout", () => {
            settingsButton.setTint(Phaser.Display.Color.GetColor(255, 255, 255));
        });

        var exitButton = this.add.image(this.scale.width / 2, (this.scale.height / 2) + 200, 'exit').setScale(.4);
        exitButton.setInteractive({pixelPerfect: true});
        exitButton.on('pointerdown', () => {
            location.assign("https://natotatoshc.github.io");
        });
        exitButton.on("pointerover", () => {
            exitButton.setTint(Phaser.Display.Color.GetColor(200, 200, 200));
        });
        exitButton.on("pointerout", () => {
            exitButton.setTint(Phaser.Display.Color.GetColor(255, 255, 255));
        });
    }

    // Update game logic each frame here
    update() {
        
    }
}