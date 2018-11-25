class Xotaker extends MayrBasa{
    constructor(x,y,index){
        super(x,y);
        this.index = 2;
        this.energy = 5;
        this.speed = 1;
   }
    
   bazmanal() {
        
        if (weather == 0) {
            var norXotaker = new Xotaker(this.x, this.y);
            xotakerArr.push(norXotaker);
            this.energy = 5;
            console.log("bazmsarac");
        }
        else if(weather == 2){
            var norXotaker = new Xotaker(this.x, this.y);
            xotakerArr.push(norXotaker);
            this.energy = 5;
            console.log("bazmtaqacac");
        }
        
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();
        }

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

  
    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (norVandak[0] == grassArr[i].x && norVandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    //console.log(grassArr.length)
                    break;
                }

            }
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            this.bazmanal();
            

        }
        else {
            this.sharjvel();
        }

 
    }


}