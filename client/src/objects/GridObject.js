import config from '../config';

export default class CreateGrid extends Phaser.Graphics {
    constructor(game, x, y) {
        super(game, x, y);

        const HEIGHT = game.height - config.GRID.PADDING.VERTICAL*2;
        const WIDTH = HEIGHT * config.GRID.WIDTH / config.GRID.HEIGHT;
        const hw = config.GRID.LINE_WIDTH / 2;

        this.lineStyle( config.GRID.LINE_WIDTH, 0xffffff, 0.3);

        for( let gridX = 0; gridX <= config.GRID.WIDTH; gridX += 1 ) {
            let x = gridX * HEIGHT / config.GRID.HEIGHT;
            this.moveTo(x - hw, 0 - hw);
            this.lineTo(x - hw, HEIGHT + hw);
        }

        for( let gridY = 0; gridY <= config.GRID.HEIGHT; gridY += 1 ) {
            let y = gridY * WIDTH / config.GRID.WIDTH;
            this.moveTo(0 - hw*2, y);
            this.lineTo(WIDTH, y);
        }

    }

    update() {
    }
}