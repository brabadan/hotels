var Fishka = /** @class */ (function () {
    function Fishka(num, posX, posY, pyatnashki) {
        var _this = this;
        this.num = num;
        this.posX = posX;
        this.posY = posY;
        this.pyatnashki = pyatnashki;
        this.el = document.createElement('div');
        this.el.classList.add('fishka');
        if (num < 10)
            this.el.classList.add('fishka-deci');
        this.el.innerHTML = '<span style="font-size: ' + (pyatnashki.fishkaWidth + pyatnashki.fishkaHeight) / 4 + 'px">' + this.num + '</span>';
        this.el.onmousedown = function (ev) { _this.onclick(ev); return false; };
        this.show();
        pyatnashki.parentEl.appendChild(this.el);
    }
    Fishka.prototype.onclick = function (ev) {
        if (this.posX != this.pyatnashki.pustoX && this.posY != this.pyatnashki.pustoY)
            return; // клик по запрещ. фишке
        var _a = [this.pyatnashki.pustoX, this.pyatnashki.pustoY, this.posX, this.posY], toX = _a[0], toY = _a[1], posX = _a[2], posY = _a[3];
        var stepX = -(toX == posX ? 0 : Math.abs(toX - posX) / (toX - this.posX));
        var stepY = -(toY == posY ? 0 : Math.abs(toY - posY) / (toY - posY));
        var stepCol = Math.abs(toX - posX) + Math.abs(toY - posY);
        for (var y = toY, x = toX, i = 0; i < stepCol; i++, x = x + stepX, y = y + stepY) {
            this.pyatnashki.moveFishka(x + stepX, y + stepY, x, y);
        }
        this.pyatnashki.checkWin();
    };
    ;
    Fishka.prototype.show = function () {
        var _a = [this.pyatnashki.fishkaWidth, this.pyatnashki.fishkaHeight], width = _a[0], height = _a[1];
        this.el.setAttribute('style', 'left: ' + this.posX * width + 'px; top: ' + this.posY * height + 'px; width: ' + (width - 6) + 'px; height: ' + (height - 6) + 'px');
    };
    return Fishka;
}());
var Pyatnashki = /** @class */ (function () {
    function Pyatnashki(id, colX, colY) {
        if (colX === void 0) { colX = 4; }
        if (colY === void 0) { colY = 4; }
        this.colX = colX;
        this.colY = colY;
        this.fishki = []; //fishArr[] = [];
        this.pustoX = 0;
        this.pustoY = 0;
        this.parentEl = document.getElementById(id);
        this.fishkaWidth = this.parentEl.clientWidth / colX;
        this.fishkaHeight = this.parentEl.clientHeight / colY;
        this.initFishki();
        this.parentEl.onmousedown = this.parentEl.onselectstart = function () { return false; };
        this.parentEl.classList.add('pyatnashki');
    }
    Pyatnashki.prototype.initFishki = function () {
        for (var x = 0; x < this.colX; x++) {
            this.fishArr = [];
            for (var y = 0; y < this.colY; y++) {
                var num = this.colX * this.colY - x - this.colX * y;
                var fishka = new Fishka(num, x, y, this);
                fishka.show();
                this.fishArr.push(fishka);
            }
            this.fishki.push(this.fishArr);
        }
        this.fishki[0][0].el.parentNode.removeChild(this.fishki[0][0].el);
        this.fishki[0][0] = null; //this.fishki.slice(1);
    };
    Pyatnashki.prototype.moveFishka = function (fishkaX, fishkaY, pustoX, pustoY) {
        var _a, _b;
        var fishka = this.fishki[fishkaX][fishkaY];
        this.fishki[pustoX][pustoY] = fishka;
        this.fishki[fishkaX][fishkaY] = null;
        _a = [fishkaX, fishkaY], this.pustoX = _a[0], this.pustoY = _a[1];
        _b = [pustoX, pustoY], fishka.posX = _b[0], fishka.posY = _b[1];
        fishka.show();
    };
    Pyatnashki.prototype.checkWin = function () {
        for (var x = 0; x < this.colX; x++) {
            for (var y = 0; y < this.colY; y++) {
                if (this.fishki[x][y] && this.fishki[x][y].num != this.colX * y + x + 1)
                    return;
            }
        }
        alert('!!!!!! Поздравляю, Вы собрали головоломку !!!!!!!!!!!');
    };
    return Pyatnashki;
}());
