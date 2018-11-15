class vorsord extends MayrBasa{
   
    constructor(x,y,index){
        super(x,y);
        this.index = 4;
        this.energy = 5;
   }
    

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--;
        }

    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(3));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }
        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        if (this.energy == 10) {
            var norvorsord = new vorsord(this.x, this.y);
            vorsordArr.push(norvorsord);
            this.energy = 5;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in vorsordArr) {
                if (this.x == vorsordArr[i].x && this.y == vorsordArr[i].y) {
                    vorsordArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }

}