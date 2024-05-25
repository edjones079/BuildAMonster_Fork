class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.reyeX = 350;
        this.reyeY = 350;

        this.leyeX = 250;
        this.leyeY = 350;

        this.mouthX = 300;
        this.mouthY = 390;
        
        this.larmX = 375;
        this.larmY = 375;

        this.rarmX = 225;
        this.rarmY = 375;

        this.llegX = 375;
        this.llegY = 430;

        this.rlegX = 225;
        this.rlegY = 430;

        this.learX = 240;
        this.learY = 270;

        this.rearX = 360;
        this.rearY = 270;

        this.hornX = 300;
        this.hornY = 275;
        
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
        //this.add.sprite(x , y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
    
        my.sprite.larm = this.add.sprite(this.larmX, this.larmY, "monsterParts", "arm_greenE.png");
        my.sprite.rarm = this.add.sprite(this.rarmX, this.rarmY, "monsterParts", "arm_greenE.png");
        my.sprite.rarm.flipX = true;
        my.sprite.larm.angle = -25;
        my.sprite.rarm.angle = 25;
        
        my.sprite.lleg = this.add.sprite(this.llegX, this.llegY, "monsterParts", "leg_greenE.png");
        my.sprite.rleg = this.add.sprite(this.rlegX, this.rlegY, "monsterParts", "leg_greenE.png");
        my.sprite.rleg.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");


        my.sprite.reye = this.add.sprite(this.reyeX, this.reyeY, "monsterParts", "eye_closed_feminine.png");
        my.sprite.leye = this.add.sprite(this.leyeX, this.leyeY, "monsterParts", "eye_closed_feminine.png");
        my.sprite.leye.flipX = true;

        my.sprite.rear = this.add.sprite(this.rearX, this.rearY, "monsterParts", "detail_green_ear_round.png");
        my.sprite.lear = this.add.sprite(this.learX, this.learY, "monsterParts", "detail_green_ear_round.png");
        my.sprite.lear.flipX = true;

        my.sprite.horn = this.add.sprite(this.hornX, this.hornY, "monsterParts", "detail_green_horn_small.png");

        this.s_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.f_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.a_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.d_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.a_key.isDown)
        {
            my.sprite.body.x -= 5;

            my.sprite.reye.x -= 5;

            my.sprite.leye.x -= 5;

            my.sprite.mouth.x -= 5;
        
            my.sprite.larm.x -= 5;

            my.sprite.rarm.x -= 5;

            my.sprite.lleg.x -= 5;

            my.sprite.rleg.x -= 5;

            my.sprite.lear.x -= 5;

            my.sprite.rear.x -= 5;

            my.sprite.horn.x -= 5;

        }
        if (this.d_key.isDown)
        {
            my.sprite.body.x += 5;

            my.sprite.reye.x += 5;

            my.sprite.leye.x += 5;

            my.sprite.mouth.x += 5;
        
            my.sprite.larm.x += 5;

            my.sprite.rarm.x += 5;

            my.sprite.lleg.x += 5;

            my.sprite.rleg.x += 5;

            my.sprite.lear.x += 5;

            my.sprite.rear.x += 5;

            my.sprite.horn.x += 5;

            //console.log(this.f_key);
        }
        

        if (this.f_key._justDown)
        {
            my.sprite.mouth.setFrame("mouth_closed_fangs.png");
            //console.log(my.sprite.mouth);
        }

        if (this.s_key._justDown)
        {
            my.sprite.mouth.setFrame("mouth_closed_happy.png");
        }

    }

}