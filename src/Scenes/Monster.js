// Student Name: Guangyang Chen

class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        // Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        // Eyes
        my.sprite.eyeLeft = this.add.sprite(this.bodyX - 35, this.bodyY - 30, "monsterParts", "eye_blue.png");
        my.sprite.eyeRight = this.add.sprite(this.bodyX + 35, this.bodyY - 30, "monsterParts", "eye_blue.png");

        // Arms
        my.sprite.armLeft = this.add.sprite(this.bodyX + 110, this.bodyY + 30, "monsterParts", "arm_greenA.png");
        my.sprite.armRight = this.add.sprite(this.bodyX - 110, this.bodyY + 30, "monsterParts", "arm_greenA.png");
        my.sprite.armRight.flipX = true; // Flip the right arm

        // Legs
        my.sprite.legLeft = this.add.sprite(this.bodyX + 50, 500, "monsterParts", "leg_greenA.png");
        my.sprite.legRight = this.add.sprite(this.bodyX - 50, 500, "monsterParts", "leg_greenA.png");
        my.sprite.legRight.flipX = true; // Flip the right leg

        // Mouth
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouth_closed_sad.png");
        // Smile - Default not visible
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthA.png").setVisible(false);
        // Fangs - Default not visible
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthF.png").setVisible(false);

        // Head accessories - e.g., Antennae
        my.sprite.antennaLeft = this.add.sprite(this.bodyX + 25, this.bodyY - 105, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.antennaRight = this.add.sprite(this.bodyX - 25, this.bodyY - 105, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.antennaRight.flipX = true; // Flip the right antenna

        this.input.keyboard.on('keydown-S',() => {
            my.sprite.smile.setVisible(true);
            my.sprite.mouth.setVisible(false);
            my.sprite.fangs.setVisible(false);
        });

        this.input.keyboard.on('keydown-F',() => {
            my.sprite.smile.setVisible(false);
            my.sprite.mouth.setVisible(false);
            my.sprite.fangs.setVisible(true);
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 1; // Adjust speed as needed
            }
        }

        if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 1; // Adjust speed as needed
            }
        }
    }

}