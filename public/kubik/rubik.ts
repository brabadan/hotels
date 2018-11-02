/*
 * Copyright (c) 2017. Rabadan Bakhmudov
 */

/**
 * Created by Рабадан on 03.05.2017.
 */

function sign(x) {
    if (x < 0) return -1;
    if (x > 0) return 1;
    return 0;
}

class Kvadratik {
    public el: HTMLElement;
    public color: string;

    /**
     * Объявляем объект Квадратик
     * @param kubik - ссылка на его кубик
     * @param sideNumber - ссылка на грань
     * @param posX - позиция на грани слева-направо
     * @param posY - позиция на грани сверху-вниз
     */
    constructor(public kubik: Rubik, public sideNumber: number, public posX: number, public posY: number) {
        this.el = document.createElement('div');
        this.color = kubik.colors[sideNumber];
        this.el.classList.add('kvadratik');
        this.el.onmousedown = (ev) => {
            this.onClickKvadratik(ev);
            return false;
        };
        this.el.onmousemove = (ev) => {
            this.onMouseMove(ev);
            return false;
        };
        this.el.onmouseout = (ev) => {
            this.onMouseOut(ev);
            return false;
        };
        kubik.sides[sideNumber].appendChild(this.el);

        this.show();
    }

    /**
     * Когда курсор мыши над квадратиком - рисуем стрелку в сторону поворота
     * @param ev
     */
    onMouseMove(ev) {
        let x = this.posX;
        let y = this.posY;
        switch (x) {
            case 0:
                switch (y) {
                    case 0:
                        if (ev.offsetX < ev.offsetY) {
                            this.el.className = 'kvadratik left';
                        } else {
                            this.el.className = 'kvadratik up';
                        }
                        break;
                    case this.kubik.length - 1:
                        if (ev.offsetX < (this.el.clientHeight - ev.offsetY)) {
                            this.el.className = 'kvadratik left';
                        } else {
                            this.el.className = 'kvadratik down';
                        }
                        break;
                    default:
                        this.el.className = 'kvadratik left';
                }
                break;
            case this.kubik.length - 1:
                switch (y) {
                    case 0:
                        if (ev.offsetX > (this.el.clientHeight - ev.offsetY)) {
                            this.el.className = 'kvadratik right';
                        } else {
                            this.el.className = 'kvadratik up';
                        }
                        break;
                    case this.kubik.length - 1:
                        if (ev.offsetX > ev.offsetY) {
                            this.el.className = 'kvadratik right';
                        } else {
                            this.el.className = 'kvadratik down';
                        }
                        break;
                    default:
                        this.el.className = 'kvadratik right';
                }
                break;
            default:
                if (this.posY == 0) {
                    this.el.className = 'kvadratik up';
                } else if (this.posY == this.kubik.length - 1) {
                    this.el.className = 'kvadratik down';
                }
        }
    }

    /**
     * Убрали курсор с квадратика - прячем стрелку направления вращения
     * @param ev - Квадратик
     */
    onMouseOut(ev) {
        this.el.classList.remove('left', 'right', 'up', 'down');
    }

    /**
     * При клике по квадратику определяем какой слой, куда вращать
     * @param ev - Квадратик
     */
    onClickKvadratik(ev) {
        let x = this.posX; // Координаты на текущей грани слева-направо
        let y = this.posY; // Координаты на текущей грани сверху-вниз
        switch (x) {
            case 0:
                switch (y) {
                    case 0:
                        if (ev.offsetX < ev.offsetY) {
                            this.kubik.rotateLayer(this, 'left');
                        } else {
                            this.kubik.rotateLayer(this, 'up');
                        }
                        break;
                    case this.kubik.length - 1:
                        if (ev.offsetX < (this.el.clientHeight - ev.offsetY)) {
                            this.kubik.rotateLayer(this, 'left');
                        } else {
                            this.kubik.rotateLayer(this, 'down');
                        }
                        break;
                    default:
                        this.kubik.rotateLayer(this, 'left');
                }
                break;
            case this.kubik.length - 1:
                switch (y) {
                    case 0:
                        if (ev.offsetX > (this.el.clientHeight - ev.offsetY)) {
                            this.kubik.rotateLayer(this, 'right');
                        } else {
                            this.kubik.rotateLayer(this, 'up');
                        }
                        break;
                    case this.kubik.length - 1:
                        if (ev.offsetX > ev.offsetY) {
                            this.kubik.rotateLayer(this, 'right');
                        } else {
                            this.kubik.rotateLayer(this, 'down');
                        }
                        break;
                    default:
                        this.kubik.rotateLayer(this, 'right');
                }
                break;
            default:
                if (this.posY == 0) {
                    this.kubik.rotateLayer(this, 'up');
                } else if (this.posY == this.kubik.length - 1) {
                    this.kubik.rotateLayer(this, 'down');
                }
        }
        //  this.kubik.normalize();
    }

    // Рисуем квадратик
    show() {
        let size = this.kubik.kvadrSize;
        let x = 0;
        let y = 0;

        let style = 'left: ' + (x + size * this.posX) + 'px; top: ' + size * this.posY + 'px; width: ' + size + 'px; height: ' + size + 'px; ';
        style += ' background-color: ' + this.color + '; ';

        this.el.setAttribute('style', style);
    }
}

// Объект Вектор - для ортогональной системы координат
class Vektor {
    public vLen: number;

    /**
     * Начальные координаты Вектора
     * @param vX
     * @param vY
     * @param vZ
     */
    constructor(public vX: number, public vY: number, public vZ: number) {
        this.vLen = Math.sqrt(vX * vX + vY * vY + vZ * vZ);
    }

    /**
     * Вращение Вектора по оси X
     * @param dx - угол вращения
     */
    rotateX(dx: number) {
        if (this.vY == 0 && this.vZ == 0 || dx == 0) return; // вектор никуда не крутится
        let piX = dx / 180 * Math.PI;
        let piRY = (this.vY == 0 ? -Math.PI / 2 * Math.abs(this.vZ) / this.vZ : -Math.atan(this.vZ / this.vY));
        if (this.vY < 0) piRY += Math.PI;

        let piRZ = Math.PI / 2 + piRY;
        let xLen = Math.sqrt(this.vY * this.vY + this.vZ * this.vZ);

        this.vY = parseFloat((Math.cos(piX + piRY) * xLen).toFixed(5));
        this.vZ = parseFloat((Math.cos(piX + piRZ) * xLen).toFixed(5));
    }

    /**
     * Вращение Вектора по оси Y
     * @param dy - угол вращения
     */
    rotateY(dy: number) {
        if (this.vX == 0 && this.vZ == 0 || dy == 0) return; // вектор никуда не крутится
        let piY = dy / 180 * Math.PI;
        let yLen = Math.sqrt(this.vX * this.vX + this.vZ * this.vZ);

        let piRX = (this.vX == 0 ? Math.PI / 2 * sign(-this.vZ) : Math.atan(-this.vZ / this.vX));
        if (this.vX < 0) piRX += Math.PI;

        let piRZ = Math.PI / 2 + piRX;

        this.vX = parseFloat((Math.cos(piY + piRX) * yLen).toFixed(5));
        this.vZ = parseFloat((Math.cos(piY + piRZ) * yLen).toFixed(5));
    }

    /**
     * Вращение Вектора по оси Z
     * @param dz - угол вращения
     */
    rotateZ(dz: number) {
        if (this.vX == 0 && this.vY == 0 || dz == 0) return; // вектор никуда не крутится
        let piZ = dz / 180 * Math.PI;
        let piRX = (this.vX == 0 ? -Math.PI / 2 * Math.abs(this.vY) / this.vY : -Math.atan(this.vY / this.vX));
        if (this.vX < 0) piRX += Math.PI;

        let piRY = Math.PI / 2 + piRX;
        let zLen = Math.sqrt(this.vX * this.vX + this.vY * this.vY);

        this.vX = parseFloat((Math.cos(piZ + piRX) * zLen).toFixed(5));
        this.vY = parseFloat((Math.cos(piZ + piRY) * zLen).toFixed(5));
    }
}


type KvadrArrType = Kvadratik[]; // Ряд квадратиков
type KvadrArr2D = KvadrArrType[]; // Слой квадратиков

/**
 * Объект Кубик-Рубика
 */
export class Rubik {
    private directions = ['left', 'right', 'up', 'down'];
    // Ортогональная система Векторов
    public vektorZ: Vektor = new Vektor(0, 0, 10000);
    public vektorY: Vektor = new Vektor(0, 10000, 0);
    public vektorX: Vektor = new Vektor(10000, 0, 0);

    public parentEl: HTMLElement; // Кубика родительский DOM-элемент
    public rubikEl: HTMLElement; // Кубика DOM-элемент
    public el: HTMLElement;
    public copyKubik: HTMLElement; // Копия Кубика - для вращения слоя
    public sides: HTMLElement[] = []; // Грани Кубика
    public copySides: HTMLElement[] = []; // Копии граней Кубика
    public kvadrArr: KvadrArr2D[] = [];
    public kvadrSize: number; // Размер Квадратика
    public sideSize: number; // Размер Грани
    public colors = ['green', 'red', 'blue', 'darkorange', 'white', 'yellow'];
    public degX: number = 0;
    public degY: number = 0;
    public degZ: number = 0;
    public rotKubDeg = 5; // Угол однократного поворота Кубика
    public rotKubLeftEl: HTMLElement; // Кнопки поворота Кубика
    public rotKubRightEl: HTMLElement;
    public rotKubUpEl: HTMLElement;
    public rotKubDownEl: HTMLElement;
    public inputKolRot: HTMLInputElement; // Ввод количества для случайного поворота Кубика
    public rotateTimeIntervalID = 0; // для setTimer при повороте
    public rotRecords: { sideDirection: string, pos: number, rotNumber: number }[] = [];
    public autoAssemblerID: number; // для setTimer при Автосборке

    /**
     * Объект Кубика-Рубика
     * @param elId - Id DOM элемента
     * @param length - количество квадратиков на грани Кубика (по умолчанию 3х3)
     */
    constructor(elId: string, public length = 3) {
        let parentEl = document.getElementById(elId);
        parentEl.innerHTML = '';
        this.parentEl = parentEl;
        this.parentEl.onmousedown = this.parentEl.onselectstart = function (ev) {
            // выделять можно только элемент input
            if (ev.srcElement.tagName !== 'INPUT') return false
        };
        parentEl.classList.add('rubik-parent');

        // Создаем DOM-элемент Кубика
        this.rubikEl = document.createElement('div');
        this.rubikEl.classList.add('rubik');
        this.parentEl.appendChild(this.rubikEl);

        this.el = document.createElement('div');
        this.el.classList.add('rubik');

        // Создаем DOM-элемент копии Кубика (для вращения слоев)
        this.copyKubik = document.createElement('div');
        this.copyKubik.classList.add('rubik', 'rubik-copy');

        // Вычисляем размеры элементов
        this.kvadrSize = Math.round((parentEl.clientWidth + parentEl.clientHeight) / 8 / this.length) * 2;
        this.sideSize = this.kvadrSize * this.length;

        this.rubikEl.appendChild(this.el);
        this.rubikEl.appendChild(this.copyKubik);

        let style = `left: ${(this.parentEl.clientWidth - this.sideSize) / 2}px; top: ${(this.parentEl.clientHeight - this.sideSize) / 2}px;`;
        style += `width: ${this.sideSize}px; height: ${this.sideSize}px;`;

        this.rubikEl.setAttribute('style', style);
        this.rubikEl.classList.add('container');

        // создаем грани кубика и кидаем в массив sides
        for (let i = 0; i < 6; i++) {
            let side = document.createElement('div');
            side.classList.add('side');
            side.classList.add('side' + i);

            let style = this.sideStyle(i);
            side.setAttribute('style', style);
            this.el.appendChild(side);
            this.sides.push(side);

            // копии граней для вращения
            side = document.createElement('div');
            side.classList.add('copy-side');
            side.setAttribute('style', style);
            this.copyKubik.appendChild(side);
            this.copySides.push(side);
        }

        // создаем квадратики и кидаем в массив kvadrArr
        for (let side = 0; side < 6; side++) {
            let kvadrArrSide: KvadrArr2D = [];
            for (let x = 0; x < length; x++) {
                let kvadrArrY: KvadrArrType = [];
                for (let y = 0; y < length; y++) {
                    let kvadratik = new Kvadratik(this, side, x, y);
                    kvadrArrY.push(kvadratik);
                }
                kvadrArrSide.push(kvadrArrY);
            }
            this.kvadrArr.push(kvadrArrSide);
        }
        // Прорисовываем все квадратики на своих местах
        this.normalize();
        // Показываем кнопки для вращения Кубика и т.д.
        this.prepareRotateButtons();

        // Поворачиваем для красивого начального вида
        this.rotateKubik('right', 30);
        this.rotateKubik('down', 30);
        this.rotateKubikShow();
    }

    /**
     * Рисуем сторону исходя из направления взгляда
     * @param side - номер Стороны
     * @param fromSide - направление взгляда с этой стороны
     */
    sideStyle(side: number, fromSide = 0) {
        let [rotX, rotY, rotZ] = [0, 0, 0];

        switch (fromSide) {
            // стандартная расстановка граней кубика
            case 0:
                switch (side) {
                    case 0:
                        break;
                    case 1:
                        rotY = 90;
                        break;
                    case 2:
                        rotY = 180;
                        break;
                    case 3:
                        rotY = 270;
                        break;
                    case 4:
                        rotX = 270;
                        break;
                    case 5:
                        rotX = 90;
                        break;
                }
                break;
            case 1:
                switch (side) {
                    case 0:
                        rotY = -90;
                        break;
                    case 1:
                        break;
                    case 2:
                        rotY = 90;
                        break;
                    case 3:
                        rotY = 180;
                        break;
                    case 4:
                        rotZ = -90;
                        rotX = -90;
                        break;
                    case 5:
                        rotZ = 90;
                        rotX = 90;
                        break;
                }
                break;
            case 5:
                switch (side) {
                    case 0:
                        rotX = -90;
                        break;
                    case 1:
                        rotZ = -90;
                        rotY = 90;
                        break;
                    case 2:
                        rotZ = 180;
                        rotX = 90;
                        break;
                    case 3:
                        rotZ = 90;
                        rotY = -90;
                        break;
                    case 4:
                        rotX = 180;
                        break;
                    case 5:
                        break;
                }
                break;
        }
        let transform = ` rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) `;
        let translate3D = `(-1px, -1px, ${this.sideSize / 2}px); `;

        let style = ' transform: ' + transform + ' translate3D' + translate3D + ';';
        style += ' -webkit-transform: ' + transform + ' translate3D' + translate3D + ';';
        style += ' -moz-transform: ' + transform + ' translate3D' + translate3D + ';';
        style += 'width: ' + this.sideSize + 'px; height: ' + this.sideSize + 'px; ';

        return style;
    }

    /**
     * Прекращаем вращение кубика при отпускании кнопки мышки
     */
    onMouseUp() {
        clearInterval(this.rotateTimeIntervalID);
    }

    /**
     *Рисуем кнопки для вращения всего кубика и случайных ходов
     */
    prepareRotateButtons() {

// ввод количества случайного вращения слоёв кубика
        let inp = document.createElement('div');
        this.inputKolRot = document.createElement('input');
        this.inputKolRot.setAttribute('type', 'number');
        this.inputKolRot.setAttribute('value', '3');
        this.inputKolRot.setAttribute('size', '2');
        this.inputKolRot.setAttribute('placeholder', 'случ. ходы');
        this.inputKolRot.classList.add('input-kol-rot');
        this.parentEl.appendChild(this.inputKolRot);
        inp.setAttribute('style', 'left:0px; top: 0px');
// кнопка случайного вращения слоев кубика
        el = document.createElement('div');
        el.innerText = 'Случайно вращать';
        el.classList.add('rotate-kubik', 'width-auto');
        el.onclick = (ev) => {
            this.randomRotate(parseInt(this.inputKolRot.value));
            return false;
        };
        this.parentEl.appendChild(el);
        el.setAttribute('style', 'left:40px; top: 0px');
        el.classList.add('hoverInfo');
        el.setAttribute('title', 'кнопка случаного вращения слоёв кубика');

// кнопка автоматической сборки
        var el = document.createElement('div');
        el.innerText = 'Автосборка';
        el.classList.add('rotate-kubik', 'width-auto');
        el.onclick = (ev) => {
            this.autoAssembler();
            return false;
        };
        this.parentEl.appendChild(el);
        el.setAttribute('style', 'left:0px; top: 25px');
        el.classList.add('hoverInfo');
        el.setAttribute('title', 'кнопка автоматической сборки');

// кнопка хода назад
        var el = document.createElement('div');
        el.innerText = 'Назад';
        el.classList.add('rotate-kubik', 'width-auto');
        el.onclick = (ev) => {
            this.autoAssemblerTik();
            return false;
        };
        this.parentEl.appendChild(el);
        el.setAttribute('style', 'left:0px; top: 50px');
        el.classList.add('hoverInfo');
        el.setAttribute('title', 'Ход назад');

// кнопка вращения всего кубика влево
        el = document.createElement('div');
        el.innerText = '<';
        el.classList.add('rotate-kubik');
        el.onmouseup = (ev) => {
            this.onMouseUp();
        };
        el.onmouseout = (ev) => {
            this.onMouseUp();
        };

        el.onmousedown = (ev) => {
            this.rotateTimeIntervalID = setInterval(() => {
                this.rotateKubik('left');
            }, 100);
            return false;
        };
        this.parentEl.appendChild(el);
        this.rotKubLeftEl = el;
        el.setAttribute('style', 'left:0px; top: ' + (this.parentEl.clientHeight / 2 - 10 ) + 'px;');
        el.classList.add('hoverInfo');
        el.setAttribute('title', 'держите нажатой для поворота всего кубика влево');

// кнопка вращения всего кубика вправо
        el = document.createElement('div');
        el.innerText = '>';
        el.classList.add('rotate-kubik');
        el.onmouseup = (ev) => {
            this.onMouseUp();
        };
        el.onmouseout = (ev) => {
            this.onMouseUp();
        };

        el.onmousedown = (ev) => {
            this.rotateTimeIntervalID = setInterval(() => {
                this.rotateKubik('right');
            }, 100);
            return false;
        };
        this.parentEl.appendChild(el);
        this.rotKubRightEl = el;
        el.setAttribute('style', 'left:' + (this.parentEl.clientWidth - 25 - 2) + 'px; top: ' + (this.parentEl.clientHeight / 2 - 10) + 'px;');
        el.classList.add('hoverInfo');
        el.setAttribute('title', 'держите нажатой для поворота всего кубика вправо');

// кнопка вращения всего кубика вверх
        el = document.createElement('div');
        el.innerText = '^';
        el.classList.add('rotate-kubik');
        el.onmouseup = (ev) => {
            this.onMouseUp();
        };
        el.onmouseout = (ev) => {
            this.onMouseUp();
        };

        el.onmousedown = (ev) => {
            this.rotateTimeIntervalID = setInterval(() => {
                this.rotateKubik('up');
            }, 100);
            return false;
        };
        this.parentEl.appendChild(el);
        this.rotKubUpEl = el;
        el.setAttribute('style', 'top:0px; left: ' + (this.parentEl.clientWidth / 2 - 10) + 'px;');
        el.classList.add('hoverInfo');
        el.setAttribute('title', 'держите нажатой для поворота всего кубика вверх');

// кнопка вращения всего кубика вниз
        el = document.createElement('div');
        el.innerText = 'v';
        el.classList.add('rotate-kubik');
        el.onmouseup = (ev) => {
            this.onMouseUp();
        };
        el.onmouseout = (ev) => {
            this.onMouseUp();
        };

        el.onmousedown = (ev) => {
            this.rotateTimeIntervalID = setInterval(() => {
                this.rotateKubik('down');
            }, 100);
            return false;
        };
        this.parentEl.appendChild(el);
        this.rotKubDownEl = el;
        el.setAttribute('style', 'left:' + (this.parentEl.clientWidth / 2 - 10) + 'px; top: ' + (this.parentEl.clientHeight - 20) + 'px;');
        el.classList.add('hoverInfo');
        el.setAttribute('title', 'держите нажатой для поворота всего кубика вниз');

    }

// По двум векторам Z, Y расчитать углы для поворота туда degX, degY, degZ
    vektors2Degs(vektorZ: Vektor, vektorY: Vektor) {
        let vektZ = new Vektor(vektorZ.vX, vektorZ.vY, vektorZ.vZ);
        let vektY = new Vektor(vektorY.vX, vektorY.vY, vektorY.vZ);

        let degX = (vektZ.vZ == 0 ? 90 * sign(vektZ.vY) : Math.atan(vektZ.vY / vektZ.vZ) * 180 / Math.PI);
        if (vektZ.vZ < 0) degX += 180;

        let degs = this.degX2DegYZ(degX, vektY, vektZ);
        return degs;
    }

    // по выбранному углу degX и двум векторам вычисляем ближайшую позицию углов
    degX2DegYZ(dX, vY, vZ) {
        let vektY = vY;
        let vektZ = vZ;
        let degX = dX;
        vektZ.rotateX(-degX);
        vektZ.vY = 0;  // страховка от неточности
        vektY.rotateX(-degX);

        let degY = (vektZ.vZ == 0 ? 90 * sign(vektZ.vX) : Math.atan(vektZ.vX / vektZ.vZ) * 180 / Math.PI);
        if (vektZ.vZ < 0) degY += 180;
        vektZ.rotateY(-degY);
        vektY.rotateY(-degY);

        let degZ = (vektY.vY == 0 ? 90 * sign(vektY.vX) : Math.atan(vektY.vX / vektY.vY) * 180 / Math.PI);
        if (vektY.vY < 0) degZ += 180;

        // поворачиваем результат на ближайшую позицию для кубика
        while (Math.abs(this.degX - degX) > Math.abs(this.degX - (degX + 360))) degX += 360;
        while (Math.abs(this.degX - degX) > Math.abs(this.degX - (degX - 360))) degX -= 360;
        while (Math.abs(this.degY - degY) > Math.abs(this.degY - (degY + 360))) degY += 360;
        while (Math.abs(this.degY - degY) > Math.abs(this.degY - (degY - 360))) degY -= 360;
        while (Math.abs(this.degZ - degZ) > Math.abs(this.degZ - (degZ + 360))) degZ += 360;
        while (Math.abs(this.degZ - degZ) > Math.abs(this.degZ - (degZ - 360))) degZ -= 360;

        // let collision = Math.abs(this.degX - degX) + Math.abs(this.degY - degY) + Math.abs(this.degZ - degZ);
        return [degX, degY, degZ]
    }

    /**
     * Вращение всего кубика в пространстве
     * @param direction - направление вращения
     * @param deg - угол вращения
     */
    rotateKubik(direction: string, deg?: number) {
        var rotKubDeg = deg ? deg : this.rotKubDeg;
        switch (direction) {
            case 'left':
                this.vektorZ.rotateY(-rotKubDeg);
                this.vektorY.rotateY(-rotKubDeg);
                this.vektorX.rotateY(-rotKubDeg);
                break;
            case 'right':
                this.vektorZ.rotateY(rotKubDeg);
                this.vektorY.rotateY(rotKubDeg);
                this.vektorX.rotateY(rotKubDeg);
                break;
            case 'up':
                this.vektorZ.rotateX(rotKubDeg);
                this.vektorY.rotateX(rotKubDeg);
                this.vektorX.rotateX(rotKubDeg);
                break;
            case 'down':
                this.vektorZ.rotateX(-rotKubDeg);
                this.vektorY.rotateX(-rotKubDeg);
                this.vektorX.rotateX(-rotKubDeg);
        }

        let dX, dY, dZ;
        [dX, dY, dZ] = this.vektors2Degs(this.vektorZ, this.vektorY);

        // Сохраняем в настройках кубика
        [this.degX, this.degY, this.degZ] = [Math.round(dX), Math.round(dY), Math.round(dZ)];

        // перерисовываем кубик
        this.rotateKubikShow();
    }

    // перерисовываем кубик
    rotateKubikShow() {
        this.el.setAttribute('style', this.kubikStyle());
    }

    /**
     * Возвращает текущий CSS стиль для Кубика
     */
    kubikStyle() {
        // style += 'margin-left: '+this.sideSize/3+'px; margin-top: '+this.sideSize/1.7+'px; ';
        let transform = ` rotateX(${this.degX}deg) rotateY(${this.degY}deg) rotateZ(${this.degZ}deg)`;
        // transform += ' translate3D(' + (this.sideSize) + 'px,' + (this.sideSize) + 'px,0px); ';
        let style = 'transform: ' + transform + ';';
        style += '-webkit-transform: ' + transform + ';';
        style += '-moz-transform: ' + transform + ';';
        `left: ${(this.parentEl.clientWidth - this.sideSize) / 2}px; top: ${(this.parentEl.clientHeight - this.sideSize) / 2}px;`;
        // `left: ${(this.parentEl.clientWidth - this.sideSize)/2}px; top: ${(this.parentEl.clientHeight - this.sideSize)/2}px;`;
        style += `width: ${this.sideSize}px; height: ${this.sideSize}px;`;
        return style;
    }

    // Все квадратики перепривязываем к соответствующим сторонам кубика
    normalize() {
        for (let side = 0; side < 6; side++) {
            for (let x = 0; x < this.length; x++) {
                for (let y = 0; y < this.length; y++) {
                    this.kvadrArr[side][x][y].posX = x;
                    this.kvadrArr[side][x][y].posY = y;
                    this.kvadrArr[side][x][y].sideNumber = side;
                    this.kvadrArr[side][x][y].show();
                    this.sides[side].appendChild(this.kvadrArr[side][x][y].el);
                }
            }
        }
        // копия кубика (без квадратиков) не видна
        this.copyKubik.style.zIndex = '1';
        this.copyKubik.style.display = 'none';
        // this.copyKubik.style.transition = null;
    }

    /**
     *  Случайное вращение слоёв n раз
     * @param n
     */
    randomRotate(n: number = 3) {
        for (let i = 0; i < n; i++) {
            let side = Math.round(Math.random() * 5);
            let x = Math.round(Math.random() * (this.length - 1));
            let y = Math.round(Math.random() * (this.length - 1));
            let direct = Math.round(Math.random() * 3);

            this.rotateLayer(this.kvadrArr[side][x][y], this.directions[direct]);
        }
    }

    // вращение слоя кубика - от квадратика по направлению
    rotateLayer(kvadratik: Kvadratik, direction: string) {
        // переводим клик по квадратику во вращение слоя либо на 0 стороне(спереди), либо на 5 стороне(сверху)
        switch (kvadratik.sideNumber) {
            case 0:
                switch (direction) {
                    case 'up':
                        this.moveSide0Up(kvadratik.posX);
                        this.moveCopyKubik(90, 0, 0);
                        break;
                    case 'down':
                        this.moveSide0Down(kvadratik.posX);
                        this.moveCopyKubik(-90, 0, 0);
                        break;
                    case 'left':
                        this.moveSide0Left(kvadratik.posY);
                        this.moveCopyKubik(0, -90, 0);
                        break;
                    case 'right':
                        this.moveSide0Right(kvadratik.posY);
                        this.moveCopyKubik(0, 90, 0);
                        break;
                }
                break;
            case 1:
                switch (direction) {
                    case 'left':
                        this.moveSide0Left(kvadratik.posY);
                        this.moveCopyKubik(0, -90, 0);
                        break;
                    case 'right':
                        this.moveSide0Right(kvadratik.posY);
                        this.moveCopyKubik(0, 90, 0);
                        break;
                    case 'up':
                        this.moveSide5Left(this.length - kvadratik.posX - 1);
                        this.moveCopyKubik(0, 0, -90);
                        break;
                    case 'down':
                        this.moveSide5Right(this.length - kvadratik.posX - 1);
                        this.moveCopyKubik(0, 0, 90);
                        break;
                }
                break;
            case 2:
                switch (direction) {
                    case 'up':
                        this.moveSide0Down(this.length - kvadratik.posX - 1);
                        this.moveCopyKubik(-90, 0, 0);
                        break;
                    case 'down':
                        this.moveSide0Up(this.length - kvadratik.posX - 1);
                        this.moveCopyKubik(90, 0, 0);
                        break;
                    case 'left':
                        this.moveSide0Left(kvadratik.posY);
                        this.moveCopyKubik(0, -90, 0);
                        break;
                    case 'right':
                        this.moveSide0Right(kvadratik.posY);
                        this.moveCopyKubik(0, 90, 0);
                        break;
                }
                break;
            case 3:
                switch (direction) {
                    case 'left':
                        this.moveSide0Left(kvadratik.posY);
                        this.moveCopyKubik(0, -90, 0);
                        break;
                    case 'right':
                        this.moveSide0Right(kvadratik.posY);
                        this.moveCopyKubik(0, 90, 0);
                        break;
                    case 'down':
                        this.moveSide5Left(kvadratik.posX);
                        this.moveCopyKubik(0, 0, -90);
                        break;
                    case 'up':
                        this.moveSide5Right(kvadratik.posX);
                        this.moveCopyKubik(0, 0, 90);
                        break;
                }
                break;
            case 4:
                switch (direction) {
                    case 'up':
                        this.moveSide0Up(kvadratik.posX);
                        this.moveCopyKubik(90, 0, 0);
                        break;
                    case 'down':
                        this.moveSide0Down(kvadratik.posX);
                        this.moveCopyKubik(-90, 0, 0);
                        break;
                    case 'left':
                        this.moveSide5Right(this.length - kvadratik.posY - 1);
                        this.moveCopyKubik(0, 0, 90);
                        break;
                    case 'right':
                        this.moveSide5Left(this.length - kvadratik.posY - 1);
                        this.moveCopyKubik(0, 0, -90);
                        break;
                }
                break;
            case 5:
                switch (direction) {
                    case 'up':
                        this.moveSide0Up(kvadratik.posX);
                        this.moveCopyKubik(90, 0, 0);
                        break;
                    case 'down':
                        this.moveSide0Down(kvadratik.posX);
                        this.moveCopyKubik(-90, 0, 0);
                        break;
                    case 'left':
                        this.moveSide5Left(kvadratik.posY);
                        this.moveCopyKubik(0, 0, -90);
                        break;
                    case 'right':
                        this.moveSide5Right(kvadratik.posY);
                        this.moveCopyKubik(0, 0, 90);
                        break;
                }
        }

        setTimeout(() => {
            this.normalize();
            // проверяем - собран или нет
            this.checkAssembled();
        }, 300);
    }

    // вращение копии кубика с поворачиваемым слоем квадратиков
    moveCopyKubik(x: number, y: number, z: number) {
        let vektX, vektY, vektZ: Vektor;
        let fromSide = 0;
        let rotZ: number;

        // сохраняем координаты кубика
        let degX = this.degX;
        let degY = this.degY;
        let degZ = this.degZ;

        vektY = new Vektor(this.vektorY.vX, this.vektorY.vY, this.vektorY.vZ);
        vektZ = new Vektor(this.vektorZ.vX, this.vektorZ.vY, this.vektorZ.vZ);

        // Рисуем копию для поворота
        if (x == 90) {  // вращаем переднюю грань наверх-вперед
            fromSide = 1;
            vektZ = new Vektor(this.vektorX.vX, this.vektorX.vY, this.vektorX.vZ);
            rotZ = 90;
        }
        if (x == -90) {  // вращаем переднюю грань вниз-вперед
            fromSide = 1;
            vektZ = new Vektor(this.vektorX.vX, this.vektorX.vY, this.vektorX.vZ);
            rotZ = -90;
        }
        if (y == 90) {  // вращаем переднюю грань направо-вперед
            fromSide = 5;
            vektZ = new Vektor(this.vektorY.vX, this.vektorY.vY, this.vektorY.vZ);
            vektY = new Vektor(-this.vektorZ.vX, -this.vektorZ.vY, -this.vektorZ.vZ);
            rotZ = -90;
        }
        if (y == -90) {  // вращаем переднюю грань налево-вперед
            fromSide = 5;
            vektZ = new Vektor(this.vektorY.vX, this.vektorY.vY, this.vektorY.vZ);
            vektY = new Vektor(-this.vektorZ.vX, -this.vektorZ.vY, -this.vektorZ.vZ);
            rotZ = 90;
        }
        if (z == 90) {  // вращаем переднюю грань по часовой
            rotZ = 90;
        }
        if (z == -90) {  // вращаем переднюю грань против часовой
            rotZ = -90;
        }

        [this.degX, this.degY, this.degZ] = this.vektors2Degs(vektZ, vektY);
        for (let side = 0; side < 6; side++) {
            let style = this.sideStyle(side, fromSide);
            this.copySides[side].setAttribute('style', style);
        }
        this.copyKubik.setAttribute('style', this.kubikStyle() + '; z-index: 100;');
        // this.copyKubik.style.display = 'block';

        // поворачиваем копию
        this.degZ += rotZ;
        this.copyKubik.setAttribute('style', this.kubikStyle() + '; z-index: 100;');

        // восстанавливаем координаты кубика
        [this.degX, this.degY, this.degZ] = [degX, degY, degZ];
    }

    // вращаем влево слой(строку) по номеру y на 5 стороне(верхней)
    moveSide5Left(y: number) {
        this.recordMoves('side5horizontal', y, -1);

        for (let i = 0; i < this.length; i++) {
            this.copySides[5].appendChild(this.kvadrArr[5][i][y].el);
            this.copySides[1].appendChild(this.kvadrArr[1][this.length - y - 1][i].el);
            this.copySides[4].appendChild(this.kvadrArr[4][this.length - i - 1][this.length - y - 1].el);
            this.copySides[3].appendChild(this.kvadrArr[3][y][this.length - i - 1].el);

            let kvadr = this.kvadrArr[5][i][y];
            this.kvadrArr[5][i][y] = this.kvadrArr[1][this.length - y - 1][i];
            this.kvadrArr[1][this.length - y - 1][i] = this.kvadrArr[4][this.length - i - 1][this.length - y - 1];
            this.kvadrArr[4][this.length - i - 1][this.length - y - 1] = this.kvadrArr[3][y][this.length - i - 1];
            this.kvadrArr[3][y][this.length - i - 1] = kvadr;
        }

        // если крайняя полоса - вращаем грань
        if (y == 0) {
            this.rotateSideRight(2);
        }
        if (y == this.length - 1) {
            this.rotateSideLeft(0);
        }
    }

    // полосу y на 5 грани (сверху) вправо
    moveSide5Right(y: number) {
        this.recordMoves('side5horizontal', y, 1);

        for (let i = 0; i < this.length; i++) {
            this.copySides[5].appendChild(this.kvadrArr[5][i][y].el);
            this.copySides[3].appendChild(this.kvadrArr[3][y][this.length - i - 1].el);
            this.copySides[4].appendChild(this.kvadrArr[4][this.length - i - 1][this.length - y - 1].el);
            this.copySides[1].appendChild(this.kvadrArr[1][this.length - y - 1][i].el);

            let kvadr = this.kvadrArr[5][i][y];
            this.kvadrArr[5][i][y] = this.kvadrArr[3][y][this.length - i - 1];
            this.kvadrArr[3][y][this.length - i - 1] = this.kvadrArr[4][this.length - i - 1][this.length - y - 1];
            this.kvadrArr[4][this.length - i - 1][this.length - y - 1] = this.kvadrArr[1][this.length - y - 1][i];
            this.kvadrArr[1][this.length - y - 1][i] = kvadr;

        }

        // если крайняя полоса - вращаем грань
        if (y == 0) {
            this.rotateSideLeft(2);
        }
        if (y == this.length - 1) {
            this.rotateSideRight(0);
        }
    }

    // полосу x на 0 грани (спереди) вверх
    moveSide0Up(x: number) {
        this.recordMoves('side0vertical', x, -1);

        for (let i = 0; i < this.length; i++) {
            this.copySides[0].appendChild(this.kvadrArr[0][x][i].el);
            this.copySides[4].appendChild(this.kvadrArr[4][x][i].el);
            this.copySides[2].appendChild(this.kvadrArr[2][this.length - x - 1][this.length - i - 1].el);
            this.copySides[5].appendChild(this.kvadrArr[5][x][i].el);

            let kvadr = this.kvadrArr[0][x][i];
            this.kvadrArr[0][x][i] = this.kvadrArr[4][x][i];
            this.kvadrArr[4][x][i] = this.kvadrArr[2][this.length - x - 1][this.length - i - 1];
            this.kvadrArr[2][this.length - x - 1][this.length - i - 1] = this.kvadrArr[5][x][i];
            this.kvadrArr[5][x][i] = kvadr;
        }

        // если крайняя полоса - вращаем грань
        if (x == 0) {
            this.rotateSideLeft(3);
        }
        if (x == this.length - 1) {
            this.rotateSideRight(1);
        }
    }

    // полосу x на 0 грани (спереди) вниз
    moveSide0Down(x: number) {
        this.recordMoves('side0vertical', x, 1);

        for (let i = 0; i < this.length; i++) {
            this.copySides[0].appendChild(this.kvadrArr[0][x][i].el);
            this.copySides[5].appendChild(this.kvadrArr[5][x][i].el);
            this.copySides[2].appendChild(this.kvadrArr[2][this.length - x - 1][this.length - i - 1].el);
            this.copySides[4].appendChild(this.kvadrArr[4][x][i].el);

            let kvadr = this.kvadrArr[0][x][i];
            this.kvadrArr[0][x][i] = this.kvadrArr[5][x][i];
            this.kvadrArr[5][x][i] = this.kvadrArr[2][this.length - x - 1][this.length - i - 1];
            this.kvadrArr[2][this.length - x - 1][this.length - i - 1] = this.kvadrArr[4][x][i];
            this.kvadrArr[4][x][i] = kvadr;
        }

        // если крайняя полоса - вращаем грань
        if (x == 0) {
            this.rotateSideRight(3);
        }
        if (x == this.length - 1) {
            this.rotateSideLeft(1);
        }
    }

    // полосу y на 0 грани (спереди) влево
    moveSide0Left(y: number) {
        this.recordMoves('side0horizontal', y, -1);

        for (let x = 0; x < this.length; x++) {
            this.copySides[0].appendChild(this.kvadrArr[0][x][y].el);
            this.copySides[1].appendChild(this.kvadrArr[1][x][y].el);
            this.copySides[2].appendChild(this.kvadrArr[2][x][y].el);
            this.copySides[3].appendChild(this.kvadrArr[3][x][y].el);

            let kvadr = this.kvadrArr[0][x][y];
            this.kvadrArr[0][x][y] = this.kvadrArr[1][x][y];
            this.kvadrArr[1][x][y] = this.kvadrArr[2][x][y];
            this.kvadrArr[2][x][y] = this.kvadrArr[3][x][y];
            this.kvadrArr[3][x][y] = kvadr;
        }

        // если крайняя полоса - вращаем грань
        if (y == 0) {
            this.rotateSideRight(5);
        }
        if (y == this.length - 1) {
            this.rotateSideLeft(4);
        }
    }

    // полосу (значение(y) считаем сверху вниз) на 0 грани (спереди) вправо
    moveSide0Right(y: number) {
        this.recordMoves('side0horizontal', y, 1);

        for (let x = 0; x < this.length; x++) {
            this.copySides[0].appendChild(this.kvadrArr[0][x][y].el);
            this.copySides[1].appendChild(this.kvadrArr[1][x][y].el);
            this.copySides[2].appendChild(this.kvadrArr[2][x][y].el);
            this.copySides[3].appendChild(this.kvadrArr[3][x][y].el);

            let kvadr = this.kvadrArr[3][x][y];
            this.kvadrArr[3][x][y] = this.kvadrArr[2][x][y];
            this.kvadrArr[2][x][y] = this.kvadrArr[1][x][y];
            this.kvadrArr[1][x][y] = this.kvadrArr[0][x][y];
            this.kvadrArr[0][x][y] = kvadr;
        }

        // если крайняя полоса - вращаем грань
        if (y == 0) {
            this.rotateSideLeft(5);
        }
        if (y == this.length - 1) {
            this.rotateSideRight(4);
        }
    }

    // вращаемые квадратики привязываем к копии кубика (для вращения)
    side2CopySide(sideNumber: number) {
        for (let x = 0; x < this.length; x++) {
            for (let y = 0; y < this.length; y++) {
                this.copySides[sideNumber].appendChild(this.kvadrArr[sideNumber][x][y].el);
            }
        }
    }

    /**
     * Вращаем грань (по/против часовой) по заданной формуле
     * @param side - сторона кубика
     * @param xy2xy - формула вращения
     */
    rotateSide(side, xy2xy) {
        for (let y = 0; y < Math.floor(this.length / 2); y++) { // Идем слоями сверху к центру
            for (let x = 1 + y; x < this.length - y; x++) { // идем слева направо внутри очередного подквадрата грани
                // Определяем симметричные(по вращению) квадратики
                let [x1, y1] = xy2xy(x, y);
                let [x2, y2] = xy2xy(x1, y1);
                let [x3, y3] = xy2xy(x2, y2);
                // Четыре симметричных (для поворота) квадратика переносим на повернутую позицию
                [side[x][y], side[x1][y1], side[x2][y2], side[x3][y3]] = [side[x1][y1], side[x2][y2], side[x3][y3], side[x][y]];
            }
        }
    }

    /**
     * Вращаем грань копии кубика вправо - по часовой
     * @param sideNumber - номер грани
     */
    rotateSideRight(sideNumber: number) {
        this.side2CopySide(sideNumber); // вращаемые квадратики привязываем к копии кубика
        let xy2xy = (x, y) => [y, this.length - x - 1]; // Формула вращения по часовой стрелке
        this.rotateSide(this.kvadrArr[sideNumber], xy2xy); // Вращаем грань
    }

    /**
     * Вращем грань side копии кубика влево - против часовой
     * @param sideNumber
     */
    rotateSideLeft(sideNumber: number) {
        this.side2CopySide(sideNumber); // привязываем квадратики грани к копии кубика (для вращения)
        let xy2xy = (x, y) => [this.length - y - 1, x]; // Формула вращения против часовой стрелки
        this.rotateSide(this.kvadrArr[sideNumber], xy2xy); // Вращаем грань
    }

    /**
     * Записываем ходы вращений для дальнейшей автосборки
     * @param sideDirection - номер Стороны + направление вращения. Например: side0horizontal
     * @param pos - номер слоя на этой стороне. Например side0horizontal 2 - значит нижний слой, 1 -  второй сверху, 0 - верхний
     * @param rotNumber - сколько раз вращаем вправо/вверх. Если -1 то влево/вниз
     */
    recordMoves(sideDirection: string, pos: number, rotNumber: number) {
        let len = this.rotRecords.length;
        // Если первый ход - записываем и выходим
        if (len == 0) {
            this.rotRecords.push({sideDirection, pos, rotNumber});
            return;
        }

        // Если не оптимизируется - просто записываем ход и выходим
        if (sideDirection !== this.rotRecords[len - 1].sideDirection) {
            this.rotRecords.push({sideDirection, pos, rotNumber});
            return;
        }

        let current = 0; // сумма ходов текущая
        // сумма ходов минус, плюс - заранее присваиваем размер кубика за некрученные слои
        let [minus, plus] = [this.length, this.length];
        // Массив количества поворотов подряд на этой стороне
        let rotNumbers = [];
        for (let i = 0; i < this.length; i++) {
            rotNumbers[i] = 0;
        }

        let foundPos = false;  // Если найден поворот этого слоя(pos)
        // цикл по всем предыдущим ходам подряд на одной стороне(side) в одну сторону(direction)
        while (len > 0 && sideDirection == this.rotRecords[--len].sideDirection) {
            // Если повторно крутим тот же слой - оптимизируем и выходим
            if (pos == this.rotRecords[len].pos) {
                this.rotRecords[len].rotNumber = this.rotNumberNormalize(rotNumber + this.rotRecords[len].rotNumber);
                foundPos = true;
                // Если после оптимизации кол вращений этого слоя=0, то удаляем запись
                // if (this.rotRecords[len].rotNumber == 0) this.rotRecords.splice(len, 1);
            }

            rotNumbers[this.rotRecords[len].pos] = this.rotRecords[len].rotNumber;
            current += Math.abs(this.rotRecords[len].rotNumber);
            minus += Math.abs(this.rotRecords[len].rotNumber - 1) - 1; // -1 за учтенный слой
            plus += Math.abs(this.rotRecords[len].rotNumber + 1) - 1;

            // Удаляем ход - для дальнейшей записи оптимизированного
            this.rotRecords.splice(len, 1);
        }
        // Если слой не был найден - дописываем ход в массив
        if (!foundPos) {
            rotNumbers[pos] = rotNumber;
            current += Math.abs(rotNumber);
            minus += Math.abs(rotNumber - 1) - 1; // -1 за учтенный слой
            plus += Math.abs(rotNumber + 1) - 1;
        }

        let delta = 0; // Поправка кол вращений для оптимизации
        if (minus < current) {
            delta = -1;
        }
        if (plus < current) {
            delta = 1;
        }

        // цикл по предыдущим ходам !!!!! Очень важно !!!!
        // Если, к примеру, на одной стороне подряд крутили в одну сторону два слоя
        // то для оптимизированной сборки останется докрутить туда третий слой
        // а значит смотреть на предыдущие ходы приходится уже с той стороны куда мы докрутили !!!!!!!!
        for (let i = 0; i < this.rotRecords.length; i++) {
            if (minus < current) {
                switch (sideDirection) {
                    case 'side0horizontal':
                        switch (this.rotRecords[i].sideDirection) {
                            case 'side0vertical':
                                this.rotRecords[i].sideDirection = 'side5horizontal';
                                this.rotRecords[i].pos = this.length - this.rotRecords[i].pos - 1;
                                break;
                            case 'side5horizontal':
                                this.rotRecords[i].sideDirection = 'side0vertical';
                                this.rotRecords[i].rotNumber =  -this.rotRecords[i].rotNumber;
                                break;
                        }
                        break;
                    case 'side0vertical':
                        switch (this.rotRecords[i].sideDirection) {
                            case 'side0horizontal':
                                this.rotRecords[i].sideDirection = 'side5horizontal';
                                this.rotRecords[i].pos = this.length - this.rotRecords[i].pos - 1;
                                this.rotRecords[i].rotNumber =  -this.rotRecords[i].rotNumber;
                                break;
                            case 'side5horizontal':
                                this.rotRecords[i].sideDirection = 'side0horizontal';
                                break;
                        }
                        break;
                    case 'side5horizontal':
                        switch (this.rotRecords[i].sideDirection) {
                            case 'side0horizontal':
                                this.rotRecords[i].sideDirection = 'side0vertical';
                                this.rotRecords[i].pos = this.length - this.rotRecords[i].pos - 1;
                                break;
                            case 'side0vertical':
                                this.rotRecords[i].sideDirection = 'side0horizontal';
                                this.rotRecords[i].rotNumber =  -this.rotRecords[i].rotNumber;
                                break;
                        }
                        break;
                }
            }
            if (plus < current) {
                switch (sideDirection) {
                    case 'side0horizontal':
                        switch (this.rotRecords[i].sideDirection) {
                            case 'side0vertical':
                                this.rotRecords[i].sideDirection = 'side5horizontal';
                                this.rotRecords[i].rotNumber = -this.rotRecords[i].rotNumber;
                                break;
                            case 'side5horizontal':
                                this.rotRecords[i].sideDirection = 'side0vertical';
                                this.rotRecords[i].pos = this.length - this.rotRecords[i].pos - 1;
                                break;
                        }
                        break;
                    case 'side0vertical':
                        switch (this.rotRecords[i].sideDirection) {
                            case 'side0horizontal':
                                this.rotRecords[i].sideDirection = 'side5horizontal';
                                break;
                            case 'side5horizontal':
                                this.rotRecords[i].sideDirection = 'side0horizontal';
                                this.rotRecords[i].rotNumber = -this.rotRecords[i].rotNumber;
                                this.rotRecords[i].pos = this.length - this.rotRecords[i].pos - 1;
                                break;
                        }
                        break;
                    case 'side5horizontal':
                        switch (this.rotRecords[i].sideDirection) {
                            case 'side0horizontal':
                                this.rotRecords[i].sideDirection = 'side0vertical';
                                this.rotRecords[i].rotNumber = -this.rotRecords[i].rotNumber;
                                break;
                            case 'side0vertical':
                                this.rotRecords[i].sideDirection = 'side0horizontal';
                                this.rotRecords[i].pos = this.length - this.rotRecords[i].pos - 1;
                                break;
                        }
                        break;
                }
            }
        }
        // Записываем ненулевые, оптимизированные ходы
        for (let pos: number = 0; pos < this.length; pos++) {
            if ((rotNumbers[pos] + delta) != 0) {
                rotNumber = this.rotNumberNormalize(rotNumbers[pos] + delta);
                this.rotRecords.push({sideDirection, pos, rotNumber});
            }
        }
    }

    /**
     * Нормализуем количество поворотов подряд одного слоя
     * @param {number} n
     * @returns {number}
     */
    rotNumberNormalize(n: number): number {
        let res = (n + 4) % 4;
        if (res >= 2) res -= 4;

        return res;
    }

    /**
     * Если кубик собран - Поздравляем!!!
     */
    checkAssembled() {
        for (let side = 0; side < 5; side++) {
            for (let x = 0; x < this.length; x++) {
                for (let y = 0; y < this.length; y++) {
                    if (this.kvadrArr[side][x][y].color != this.kvadrArr[side][0][0].color) return;
                }
            }
        }

        this.rotRecords = [];
        setTimeout(() => {
            alert('П О З Д Р А В Л Я Ю !!!  \n \nВы собрали Кубик-Рубика!!!');
            this.rubikEl.classList.remove('kubik-assembling');
        }, 500);
    }

    /**
     * Запускаем Автосборку
     */
    autoAssembler() {
        if (this.rotRecords.length == 0) return;

        this.rubikEl.classList.add('kubik-assembling');
        this.autoAssemblerID = setInterval(() => {
            this.autoAssemblerTik()
        }, 1000);
    }

    /**
     * Шаг Назад - для Автосборки
     */
    autoAssemblerTik() {
        if (this.rotRecords.length == 0) return;
        let rotRecord = this.rotRecords.pop();
        // запись прокладка, чтоб наш откат не смешивать при оптимизации записей
        this.rotRecords.push({sideDirection: 'temp', pos: 0, rotNumber: 0});

        switch (rotRecord.sideDirection) {
            case 'side0horizontal':
                if (rotRecord.rotNumber > 0) { // было направо - вертаем влево
                    this.rotateLayer(this.kvadrArr[0][0][rotRecord.pos], 'left');
                } else {
                    this.rotateLayer(this.kvadrArr[0][0][rotRecord.pos], 'right');
                }
                break;
            case 'side0vertical':
                if (rotRecord.rotNumber > 0) { // было вниз - вертаем вверх
                    this.rotateLayer(this.kvadrArr[0][rotRecord.pos][0], 'up');
                } else {
                    this.rotateLayer(this.kvadrArr[0][rotRecord.pos][0], 'down');
                }
                break;
            case 'side5horizontal':
                if (rotRecord.rotNumber > 0) { // было направо - вертаем влево
                    this.rotateLayer(this.kvadrArr[5][0][rotRecord.pos], 'left');
                } else {
                    this.rotateLayer(this.kvadrArr[5][0][rotRecord.pos], 'right');
                }
                break;
        }

        this.rotRecords.pop(); // убираем наш последний ход
        this.rotRecords.pop(); // убираем прокладку
        rotRecord.rotNumber = rotRecord.rotNumber - sign(rotRecord.rotNumber);
        // если слой надо еще вращать сохраняем запись
        if (rotRecord.rotNumber != 0) this.rotRecords.push(rotRecord);

        // если ходы закончились - перестаем поворачивать
        if (this.rotRecords.length == 0) {
            clearInterval(this.autoAssemblerID);
            // this.rubikEl.classList.remove('kubik-assembling');
            return;
        }

    }
}
