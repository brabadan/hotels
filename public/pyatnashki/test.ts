class Fishka {
    public el: HTMLElement;

    constructor (public num, public posX: number, public posY: number, public pyatnashki: Pyatnashki) {
        this.el = document.createElement('div');
        this.el.classList.add('fishka');
        if (num < 10) this.el.classList.add('fishka-deci');
        this.el.innerHTML = '<span style="font-size: ' + (pyatnashki.fishkaWidth + pyatnashki.fishkaHeight)/4 + '">' + this.num + '</span>';
        this.el.onmousedown = (ev)=>{this.onclick(ev); return false;};
        this.show();

        pyatnashki.parentEl.appendChild(this.el);
    }

    onclick(ev) {
        if (this.posX != this.pyatnashki.pustoX && this.posY != this.pyatnashki.pustoY) return;  // клик по запрещ. фишке

        let [toX, toY, posX, posY] = [this.pyatnashki.pustoX, this.pyatnashki.pustoY, this.posX, this.posY];
        let stepX = -(toX == posX ? 0 : Math.abs(toX - posX)/(toX - this.posX));
        let stepY = -(toY == posY ? 0 : Math.abs(toY - posY)/(toY - posY));
        let stepCol = Math.abs(toX - posX) + Math.abs(toY - posY);
        for(let y = toY, x = toX, i=0; i<stepCol; i++, x=x+stepX, y = y + stepY) {
                this.pyatnashki.moveFishka(x + stepX, y + stepY, x, y);
        }
        this.pyatnashki.checkWin();
    };

    show() {
        let [width, height] = [this.pyatnashki.fishkaWidth, this.pyatnashki.fishkaHeight];
        this.el.setAttribute('style', 'left: ' + this.posX * width + 'px; top: ' + this.posY * height + 'px; width: ' + (width-6) + 'px; height: ' + (height-6) + 'px');
    }
}

type fishArrType = Fishka[];

class Pyatnashki {
    public fishArr: fishArrType;
    public fishki : fishArrType[] = []; //fishArr[] = [];
    public parentEl: HTMLElement;
    public fishkaWidth: number;
    public fishkaHeight: number;
    public pustoX = 0;
    public pustoY = 0;

    constructor(id: string, public colX = 4, public colY = 4) {
        this.parentEl = document.getElementById(id);
        this.fishkaWidth = this.parentEl.clientWidth / colX;
        this.fishkaHeight = this.parentEl.clientHeight / colY;
        this.initFishki();
        this.parentEl.onmousedown = this.parentEl.onselectstart = function() {return false};
        this.parentEl.classList.add('pyatnashki');
    }

    initFishki() {
        for (let x=0; x<this.colX; x++) {
            this.fishArr = [];
            for (let y=0; y<this.colY; y++) {
                let num = this.colX*this.colY - x - this.colX*y;
                let fishka = new Fishka(num, x, y, this);
                fishka.show();
                this.fishArr.push(fishka);
            }
            this.fishki.push(this.fishArr);
        }
        this.fishki[0][0].el.parentNode.removeChild(this.fishki[0][0].el);
        this.fishki[0][0] = null; //this.fishki.slice(1);
    }

    moveFishka(fishkaX, fishkaY, pustoX, pustoY) {
        let fishka = this.fishki[fishkaX][fishkaY];
        this.fishki[pustoX][pustoY] = fishka;
        this.fishki[fishkaX][fishkaY] = null;
        [this.pustoX, this.pustoY] = [fishkaX, fishkaY];
        [fishka.posX, fishka.posY] = [pustoX, pustoY];
        fishka.show();
    }

    checkWin() {
        for (let x=0; x<this.colX; x++) {
            for (let y=0; y<this.colY; y++) {
                if (this.fishki[x][y] && this.fishki[x][y].num != this.colX*y + x + 1) return;
            }
        }
        alert('!!!!!! Поздравляю, Вы собрали головоломку !!!!!!!!!!!');
    }

}


